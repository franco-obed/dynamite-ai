import React, {useState} from 'react';
import ArrowUpOutlined from '@ant-design/icons';
import { Button, Input, Space } from 'antd';



const { TextArea } = Input;

const App = () => {
    const [postData, setPostData] = useState({});
    const [response, setResponse] = useState(null);
  
    const handleSubmit = async () => {
      try {
        const response = await fetch('https://example.com/api/endpoint', {
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
        
        console.log(postData)
        const data = await response.json();
        setResponse(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

  return (
  
    <form onSubmit={handleSubmit}>  
        <Space.Compact style={{width: '800px'}}>
          <TextArea rows={1} id='message-body' variant='filled' placeholder="Don't be afraid to ask" maxLength={256} showCount />
          <Button type='primary' icon={<ArrowUpOutlined />}>Send</Button>
        </Space.Compact>
    </form>
  
  );
}
export default App;