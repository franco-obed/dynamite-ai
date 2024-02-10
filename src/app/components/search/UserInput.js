import React from 'react';
import { Button, Input, Space } from 'antd';
const { TextArea } = Input;
const App = () => (
  <>
    
      <Space.Compact style={{width: '800px'}}>
        <TextArea rows={1} id='message-body' variant='filled' placeholder="Don't be afraid to ask" maxLength={256} showCount />
        <Button type='primary'>Submit</Button>
      </Space.Compact>
  </>
);
export default App;