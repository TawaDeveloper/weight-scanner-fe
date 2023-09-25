import { Card, Upload, UploadProps, message } from 'antd';
import { useRequest } from 'ahooks';
import { useMemo, useRef, useState } from 'react';
import MarioListContent from '@tawa/mario-list-content';
import { TableQueryActions } from '@tawa/mario-hooks/lib/useTableQuery';
import { tableFields, formFields } from './fields';
import { bakeryAPI } from '@/services';
import AddModal from './AddModal';
import { download } from '@/utils';
import { CommonButton } from '@/components/CommonButton';
import './index.less';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { RcFile } from 'antd/lib/upload';
import { t } from 'i18next';
import LogModal from './LogModal';
import { DEFAULT_LANG, INITIAL_PAGE_PARAMS } from '@/constants';
// import { useNavigate } from 'react-router-dom';

const SalesTargetSetting = () => {
  const lang = localStorage.getItem('lang') ?? DEFAULT_LANG;
  const [fileList, setFileList] = useState<any[]>([]);
  const [uploading, setUploading] = useState(false);
  const actionRef = useRef<TableQueryActions>(null);
  const [show, setShow] = useState<{ type: string; data?: any }>();
  const [showLog, setShowLog] = useState(false);
  const [item, setItem] = useState<defs.bakery.SalesGoalListItem>();
  const [id, setId] = useState<number>(0);
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);
  const { data: optionsData, loading: optionLoading } = useRequest(
    bakeryAPI.salesGoal.getListOptions.request,
  );
  // const navigate = useNavigate();

  const handleClose = () => {
    actionRef.current?.onQuery();
    setShow(undefined);
  };

  const getList = (params: any) => {
    const { createTime } = params || {};
    return bakeryAPI.salesGoal.getSalesGoalForPage.request({
      ...INITIAL_PAGE_PARAMS,
      ...params,
      month: createTime ? moment(createTime).month() + 1 : undefined,
      year: createTime ? moment(createTime).year() : undefined,
    });
  };

  const { loading, data, run } = useRequest(getList);

  const rowSelection = {
    selectedRowKeys,
    onChange: setSelectedRowKeys,
  };

  const tableProps = {
    loading,
    fields: tableFields,
    data: data?.data?.records,
    total: data?.data?.total,
    rowKey: 'id',
    rowSelection,
    nextFields: [
      {
        key: 'action',
        name: t<string>(`pages.orderList.title0050`),
        width: 120,
        type: 'action',
        props: (_: any, record: defs.bakery.SalesGoalListItem) => ({
          options: [
            {
              name: t<string>(`pages.common.edit`),
              onClick: () => {
                setItem(record);
                setShow({
                  type: 'edit',
                });
              },
            },
            {
              name: t<string>(`menus.top.operationLog`),
              onClick: () => {
                setId(record.id || 0);
                setShowLog(true);
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

  const formProps = useMemo(() => {
    return {
      fields: formFields.map((el) => {
        if (el.key === 'storeId' || el.key === 'dep') {
          return {
            ...el,
            props: () => ({
              options:
                el.key === 'storeId'
                  ? optionsData &&
                    optionsData?.data &&
                    optionsData?.data?.stores
                    ? optionsData?.data?.stores
                    : []
                  : optionsData && optionsData?.data && optionsData?.data?.deps
                  ? optionsData?.data?.deps
                  : [],
            }),
          };
        } else {
          return { ...el };
        }
      }),
    };
  }, [optionsData]);

  const downloadTemplate = async () => {
    const content = await bakeryAPI.salesGoal.downloadTemplate.request({
      responseType: 'blob',
      'response-type': 'blob',
    });
    download({ content, filename: 'SALES_GOAL_TEMP.xlsx' });
  };

  const uploadProps: UploadProps = {
    action: '',
    listType: 'text',
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    fileList,
    beforeUpload: async (file) => {
      if (!/^.*\.(?:xls|xlsx)$/i.test(file.name)) {
        message.error(t<string>(`components.goodsSelect.title0020`) as string);
      } else {
        handleUpload(file);
      }
      return false;
    },
  };

  const handleUpload = (currentFile: RcFile) => {
    setUploading(true);
    const formData = new FormData();
    formData.append('file', currentFile);
    bakeryAPI.salesGoal.batchImport
      .request(formData, { headers: { Accept: '*/*' } })
      .then((data) => {
        if (data.success) {
          setFileList([]);
          actionRef.current?.onQuery();
        }
      })
      .catch(() => {
        message.error('upload failed.');
      })
      .finally(() => {
        setUploading(false);
      });
  };

  return (
    <Card>
      <div className="flex">
        <div className="button-group">
          <CommonButton
            onClick={() => {
              setItem(undefined);
              setShow({
                type: 'add',
              });
            }}
          >
            {t<string>(`pages.orderList.title0127`)}
          </CommonButton>

          <Upload {...uploadProps}>
            <CommonButton loading={uploading}>
              {' '}
              {t<string>(`pages.orderList.title0128`)}
            </CommonButton>
          </Upload>
          <Link to={''} onClick={() => downloadTemplate()}>
            {t<string>(`pages.orderList.title0129`)}
          </Link>
        </div>
      </div>
      {!optionLoading && (
        <MarioListContent
          lang={lang.replace('_', '')}
          ref={actionRef}
          formProps={formProps}
          tableProps={tableProps}
          fetchData={run}
          toolbar={<></>}
        />
      )}
      {(show?.type === 'add' || show?.type === 'edit') && (
        <AddModal
          editItem={item}
          optionsData={optionsData?.data}
          onClose={handleClose}
        />
      )}
      {showLog && id && (
        <LogModal
          id={id}
          show={showLog}
          handleClose={() => setShowLog(false)}
        ></LogModal>
      )}
    </Card>
  );
};

export default SalesTargetSetting;
