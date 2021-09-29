import Link from 'next/link';
import getConfig from 'next/config';
import { Button } from 'antd';
import { LoginOutlined, EditOutlined } from '@ant-design/icons';
import router from '@utils/navigator'
// Only holds serverRuntimeConfig and publicRuntimeConfig from next.config.js nothing else.
// const { publicRuntimeConfig: { staticFolder } } = getConfig();
import styles from './header.module.scss'

const Header = () => {
  const goLogin = () => {
    router.push('/login')
  }

  const goRegister = () => {
    router.push('/register')
  }
  return (
    <div id='header_bar' className={styles.container}>
      <Link href='/'>
        <div className={styles.logoContainer}>
          <img className={styles.logo} alt='logo' src={`/test.jpg`} />
          <a className={styles.sysName}>Nextjs</a>
        </div>
      </Link>
      <div className={styles.rightContainer}>
        <Button style={{ margin: '0 10px' }} type='primary' ghost onClick={goLogin}>
          <LoginOutlined />
          Login
        </Button>
        <Button type='primary' onClick={goRegister}>
          <EditOutlined />
          Register
        </Button>
      </div>
    </div>)
};

export default Header;
