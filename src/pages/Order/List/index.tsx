import { Button, Card, Checkbox, Radio, Space, message } from 'antd';
import { useRequest } from 'ahooks';
import { useEffect, useRef, useState } from 'react';
import MarioListContent from '@tawa/mario-list-content';
import { TableQueryActions } from '@tawa/mario-hooks/lib/useTableQuery';
import { t } from 'i18next';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { tableFields, formFields } from './fields';
import { messageAPI } from '@/services';
import AddModal from './AddModal';
import AuditModal from './AuditModal';
import { checkAccess } from '@/components/AuthButton';

const OrderList = () => {
  const auditModalRef = useRef<any>();
  const actionRef = useRef<TableQueryActions>(null);
  const [firstFetch, setFirstFetch] = useState(true);
  const [value, setValue] = useState(0);
  const valueRef = useRef<any>();
  const [checked, setChecked] = useState<boolean>(false);
  const [show, setShow] = useState<{ type: string; data?: any }>();
  // const [selectedRowKeys, setSelectedRowKeys] = useState<any>([]);
  const [statusCount, setStatusCount] =
    useState<defs.message.MessageStateResponse>({
      allTotal: 0,
      alreadyTotal: 0,
      awaitTotal: 0,
      refuseTotal: 0,
    });
  const handleClose = () => {
    actionRef.current?.onQuery();
    setShow(undefined);
  };
  const queryStatusCount = async (params: any) => {
    const { data } = (await messageAPI.smsMessage.stat.request(params)) ?? {};
    if (data) {
      setStatusCount(data);
    }
  };

  const getList = (params: any) => {
    const {
      pageNum = 1,
      pageSize = 20,
      auditByName,
      auditStatus,
      content,
      submitByName,
      submitTime,
      title,
    } = params || {};
    if (!auditStatus) {
      queryStatusCount({
        pageNum,
        pageSize,
        auditByName,
        title,
        submitByName,
        submitTimeStart: submitTime
          ? submitTime[0].format('YYYY-MM-DD HH:mm:ss')
          : undefined,
        submitTimeEnd: submitTime
          ? submitTime[1].format('YYYY-MM-DD HH:mm:ss')
          : undefined,
        auditStatus: auditStatus ? Number(params.auditStatus) - 1 : undefined,
        content,
      });
    }
    const result = messageAPI.smsMessage.list.request({
      pageNum,
      pageSize,
      auditByName,
      title,
      submitByName,
      submitTimeStart: submitTime
        ? submitTime[0].format('YYYY-MM-DD HH:mm:ss')
        : undefined,
      submitTimeEnd: submitTime
        ? submitTime[1].format('YYYY-MM-DD HH:mm:ss')
        : undefined,
      // eslint-disable-next-line no-nested-ternary
      auditStatus: firstFetch
        ? 0
        : auditStatus
        ? Number(params.auditStatus) - 1
        : undefined,
      content,
    });
    setFirstFetch(false);
    return result;
  };

  const { loading, data, run } = useRequest(getList);

  const tableProps = {
    loading,
    fields: tableFields,
    data: data?.data?.list,
    total: data?.data?.total,
    rowKey: 'id',
    nextFields: [
      {
        key: 'action',
        name: t<string>(`pages.commentModerationManagement.operations`),
        width: 120,
        type: 'action',
        fixed: 'right',
        props: (_: any, record: any) => ({
          options: [
            {
              // eslint-disable-next-line no-nested-ternary
              name: checkAccess('review', 'smsManagement')
                ? record.auditStatus === 1
                  ? t<string>(`pages.common.view`)
                  : t<string>(`pages.commentModerationManagement.audit`)
                : '--',
              onClick: () => {
                if (checkAccess('review', 'smsManagement')) {
                  auditModalRef.current.toShow({
                    isBatch: false,
                    ...record,
                    ids: [record?.id],
                  });
                }
              },
            },
          ],
        }),
      },
    ],
    scroll: { x: 1260 },
    pagination: {
      defaultPageSize: 20,
      pageSize: 20,
      pageSizeOptions: [10, 20, 50, 100],
    },
  };

  const formProps = {
    fields: formFields,
  };

  const handleAutomaticApproval = async (e: CheckboxChangeEvent) => {
    const { checked } = e.target;
    setChecked(checked);
    await messageAPI.smsMessage.setAutoAuditStatus.request({
      status: e.target.checked,
    });

    message.success(t<string>('pages.common.operationSuccess'));
  };

  const queryAutomaticApproval = async () => {
    const { data: checked } =
      await messageAPI.smsMessage.autoAuditStatus.request();
    setChecked(!!checked);
  };
  useEffect(() => {
    queryAutomaticApproval();
  }, []);
  const toolbar = (
    <Space>
      <Button type="primary" onClick={() => setShow({ type: 'add' })}>
        {t<string>(`pages.websiteMessageManagement.add`)}
      </Button>
      <Radio.Group
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          valueRef.current = e.target.value;
          actionRef.current!.onQuery({
            auditStatus:
              e.target.value || e.target.value === 0
                ? e.target.value + 1
                : undefined,
          });
        }}
      >
        <Radio.Button value={undefined}>
          {t<string>(`pages.enums.orderStatus.title001`)} (
          {statusCount.allTotal})
        </Radio.Button>
        <Radio.Button value={0}>
          {t<string>(`pages.enums.checkType.title001`)} (
          {statusCount.awaitTotal})
        </Radio.Button>
        <Radio.Button value={1}>
          {t<string>(`pages.enums.checkType.title002`)} (
          {statusCount.alreadyTotal})
        </Radio.Button>
        <Radio.Button value={2}>
          {t<string>(`pages.enums.checkType.title003`)} (
          {statusCount.refuseTotal})
        </Radio.Button>
      </Radio.Group>
      {checkAccess('autoApprove', 'smsManagement') && (
        <Checkbox checked={checked} onChange={handleAutomaticApproval}>
          {t<string>(`pages.commentModerationManagement.automaticApproval`)}
        </Checkbox>
      )}
    </Space>
  );

  return (
    <Card>
      <div className='page-title'>销量&销售额数据表</div>
      <MarioListContent
        ref={actionRef}
        formProps={formProps}
        tableProps={tableProps}
        fetchData={run}
        toolbar={toolbar}
      />
      {show?.type === 'add' && <AddModal onClose={handleClose} />}
      <AuditModal
        onPageQuery={() => {
          actionRef.current!.onQuery();
          // setSelectedRowKeys([]);
        }}
        ref={auditModalRef}
      />
    </Card>
  );
};

export default OrderList;
