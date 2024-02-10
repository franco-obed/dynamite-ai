import React, { useState } from 'react';
import { Button, Card, Form, Input, Space} from 'antd';

const { TextArea } = Input;

const AIDialog = () => {
  const [loading, setLoading] = useState(false);
  const [postData, setPostData] = useState({});
  const [response, setResponse] = useState(null);

  const handleSubmit = async () => {
    setLoading(true); // Set loading to true before sending the request
    try {
      const postDataToSend = { title: postData.title, body: postData.body };
      const response = await fetch('https://abc3-200-34-176-49.ngrok-free.app/api/create_post/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      setResponse(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false); // Set loading to false after receiving the response
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData({ [name]: value });
  };

  return (
    <Card title="What API are you looking for?" loading={loading} size='large' style={{maxHeight:800, width: 800}}>
      {response && (
        <div>
          <h3>Response</h3>
          <pre style={{textWrap: 'balance', overflow: 'auto'}}>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
      <Form onFinish={handleSubmit}>
        <Space.Compact style={{width: '800px'}}>
          <Form.Item name="body">
            <Input rows='1' name="message" placeholder='...' onChange={handleChange}/>
          </Form.Item>
          <Button type="primary" htmlType='submit' loading={loading}>Submit</Button>
        </Space.Compact>
      </Form>
    </Card>
  );
};

export default AIDialog;
