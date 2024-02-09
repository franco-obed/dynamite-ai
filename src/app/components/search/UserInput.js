import React from 'react';
import { Button, Input, Space } from 'antd';
const { TextArea } = Input;
const App = () => (
  <>
    
      <Space.Compact>
        <TextArea rows={2} id='message-body' variant='filled' placeholder="maxLength is 6" maxLength={24} showCount />
        <Button type='primary'>Submit</Button>
      </Space.Compact>
  </>
);
export default App;