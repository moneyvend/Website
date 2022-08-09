import React from 'react';
import { Layout, Card, Image } from 'antd';
import { NavLink } from 'react-router-dom';
import AppImages from '../../../utilities/images/images';
import styles from './comingSoon.module.css';

const ComingSoon = () => (
  <Layout className={styles.container}>
    <Image src={AppImages.LOGO_VERT} className={styles.image} alt="Logo" preview={false} />
    <Card title=" Coming Soon " bordered={false} className={styles.card}>
      Something nice is about to Happen 🚀🚀🚀
    </Card>
    <NavLink className={styles.backHome} type="button" to="/">Back To Home</NavLink>
  </Layout>
);

export default ComingSoon;
