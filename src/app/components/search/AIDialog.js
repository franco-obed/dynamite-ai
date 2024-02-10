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
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any additional headers if required
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
    setPostData({ ...postData, [name]: value });
  };

  return (
    <Card title="What API are you looking for?" loading={loading} size='large'>
      {response && (
        <div>
          <h3>Response</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
      <Form onFinish={handleSubmit}>
        <Space.Compact style={{width: '800px'}}>
          <Form.Item>
            <TextArea rows='1' name="title" placeholder="title" onChange={handleChange} size='large'></TextArea>
          </Form.Item>
          <Form.Item name="body">
            <Input rows='1' name="name" placeholder='body' onChange={handleChange}/>
          </Form.Item>
          <Button type="primary" htmlType='submit' loading={loading}>Submit</Button>
        </Space.Compact>
      </Form>
    </Card>
  );
};

export default AIDialog;
