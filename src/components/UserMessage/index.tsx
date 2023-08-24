import { BellOutlined } from '@ant-design/icons';
import { useRequest } from 'ahooks';
import { Badge } from 'antd';
import { useNavigate } from 'react-router-dom';
import { messageAPI } from '@/services';

const UserMessage = () => {
  const navigate = useNavigate();
  const inlineStyle = {
    cursor: 'pointer',
    padding: '12px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
    verticalAlign: 'middle',
    height: '100%',
  };

  const { data, cancel } = useRequest(messageAPI.boUserMessage.total.request, {
    pollingInterval: 5000,
    pollingWhenHidden: false,
    onError: () => {
      cancel();
    },
  });

  return (
    <Badge
      count={data?.data}
      overflowCount={99}
      offset={[-12, 14]}
      size="small"
      style={{ fontSize: 12 }}
      showZero={false}
    >
      <BellOutlined
        style={inlineStyle}
        onClick={() => navigate('/message/messageCenter')}
      />
    </Badge>
  );
};

export default UserMessage;
