'use client'
import styles from "./page.module.css";
import { Button, Card, Typography } from 'antd';
import { Image } from 'antd';

const { Title } = Typography;

export default function Home() {
  return (
      <main >
        
        <Card cover={
          <Image
            width = '100%'
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            preview = {false}
            placeholder
          />
          }
            >
        </Card>
        <Button type="dashed" href="/conversation">Start</Button> 



    
    </main>
  );
}
