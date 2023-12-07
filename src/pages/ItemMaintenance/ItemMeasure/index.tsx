import { Card, Form, Input, Button, notification } from 'antd';
import './index.less';

const ItemMeasure = () => {
  const [api, contextHolder] = notification.useNotification();
  console.log('api: ', api);

  return (
    <Card>
      {contextHolder}
      <div className="flex">
        <div className="page-title">{''}</div>
        <div className="page-body">
          <Form>
            <div className="page-title">{'Item UPC'}</div>
            <div className="flex">
              <Form.Item label="">
                <Input placeholder="input placeholder" />
              </Form.Item>
            </div>
            <div className="page-title">{'SAP'}</div>
            <div className="flex">
              <Form.Item label="Length(inch)">
                <Input placeholder="input placeholder" />
              </Form.Item>
              <Form.Item label="Width(inch)">
                <Input placeholder="input placeholder" />
              </Form.Item>
              <Form.Item label="Height(inch)">
                <Input placeholder="input placeholder" />
              </Form.Item>
              <Form.Item label="Gross Weight(LB)">
                <Input placeholder="input placeholder" />
              </Form.Item>
            </div>
            <div className="page-title">{'Weight Scanner'}</div>
            <div className="flex">
              <Form.Item label="Length(inch)">
                <Input placeholder="input placeholder" />
              </Form.Item>
              <Form.Item label="Width(inch)">
                <Input placeholder="input placeholder" />
              </Form.Item>
              <Form.Item label="Height(inch)">
                <Input placeholder="input placeholder" />
              </Form.Item>
              <Form.Item label="Gross Weight(LB)">
                <Input placeholder="input placeholder" />
              </Form.Item>
            </div>
            <div className="flex submit-btns">
              <Button>Cancel Item</Button>
              <Button type="primary">SAVE</Button>
            </div>
          </Form>
        </div>
      </div>
    </Card>
  );
};

export default ItemMeasure;
