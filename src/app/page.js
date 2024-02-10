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
            src="https://e1.pxfuel.com/desktop-wallpaper/763/43/desktop-wallpaper-javascript-nodejs.jpg"
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
