import { t } from 'i18next';
import { Modal, ModalProps, Row, Col } from 'antd';
import { useRequest } from 'ahooks';
import { useEffect } from 'react';
import { bakeryAPI } from '@/services';

interface IProps {
  show: boolean;
  id: number;
  handleClose: () => void;
}

export default (props: IProps) => {
  const { show, handleClose, id } = props;

  const { data, run } = useRequest(
    bakeryAPI.salesGoal.getSalesGoalOptLogs.request,
    {
      manual: true,
    },
  );

  useEffect(() => {
    if (id) {
      run({
        id,
      });
    }
  }, [id]);

  const modalProps: ModalProps = {
    title: t<string>(`menus.top.operationLog`),
    open: show,
    onCancel: handleClose,
    width: '1200px',
    footer: null,
  };

  return (
    <Modal {...modalProps}>
      {data &&
        data.data &&
        data.data.map((el) => (
          <Row
            style={{
              marginBottom: '24px',
            }}
            key={`log-${el.updateTime}`}
          >
            <Col span={12}>操作时间: {el.updateTime}</Col>
            <Col span={6}>操作人: {el.optUserName}</Col>
            <Col span={6}>操作: {el.optDesc}</Col>
          </Row>
        ))}
    </Modal>
  );
};
