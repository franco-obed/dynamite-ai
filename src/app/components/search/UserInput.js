import React from 'react';
import { Button, Input, Space } from 'antd';
const { TextArea } = Input;
const App = () => (
  <>
    <Space.Compact>
      <TextArea rows={4} placeholder="maxLength is 6" maxLength={6}  />
      <Button type='primary'>Submit</Button>
    </Space.Compact>
  </>
);
export default App;