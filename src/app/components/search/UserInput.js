import React from 'react';
import { Input } from 'antd';
const { TextArea } = Input;
const App = () => (
  <>
    <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} />
  </>
);
export default App;