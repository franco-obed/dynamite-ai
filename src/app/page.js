'use client'
import styles from "./page.module.css";
import { Typography } from 'antd';
import { Image } from 'antd';

const { Title } = Typography;

export default function Home() {
  return (
      <main >
        <Image
          width = '100%'
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          preview = {false}
        />
    </main>
  );
}
