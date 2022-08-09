import React from 'react';
import { Layout, Card, Image } from 'antd';
import AppImages from '../../../utilities/images/images';
import styles from './notFound.module.css';
import { NavLink } from 'react-router-dom';

const NotFound = () => (
  <Layout className={styles.container}>
    <Image src={AppImages.LOGO_VERT} className={styles.image} alt="Logo" preview={false} />
    <Card title="OOps 🤭 " bordered={false} className={styles.card}>
        Requested Page is missing
    </Card>
    <NavLink className={styles.backHome} type="button" to={'/'}>Back To Home</NavLink>
  </Layout>
);

export default NotFound;
