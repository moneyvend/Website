import React from 'react';
import { Layout, Card, Image } from 'antd';
import AppImages from '../../../utilities/images/images';
import styles from './comingSoon.module.css';

const ComingSoon = () => (
  <Layout className={styles.container}>
    <Image src={AppImages.LOGO_VERT} className={styles.image} alt="Logo" preview={false} />
    <Card title=" Coming Soon " bordered={false} className={styles.card}>
      Something nice is about to Happen 🚀🚀🚀
    </Card>
  </Layout>
);

export default ComingSoon;
