import styles from './index.less';
import { Menu } from 'antd';
import {
  SmileOutlined, // home
  CheckCircleOutlined, // 清单
  ShoppingCartOutlined, // 购物车
  DashboardOutlined, // 体重
  LockOutlined, // 锁
} from '@ant-design/icons';
import { history } from 'umi';

const items = [
  {
    key: 'welcome',
    label: 'WELCOME',
    icon: <SmileOutlined style={{ fontSize: '18px' }} />,
  },
  {
    key: 'plan',
    label: 'Day Lists',
    icon: <CheckCircleOutlined style={{ fontSize: '18px' }} />,
    children: [
      { key: 'work', label: 'About Work', icon: null },
      { key: 'study', label: 'About Skills', icon: null },
      { key: 'exercise', label: 'Keep Fit', icon: null },
      { key: 'others', label: 'Others', icon: null },
    ],
  },
  {
    key: 'shopping',
    label: 'Wish Lists',
    icon: <ShoppingCartOutlined style={{ fontSize: '18px' }} />,
  },
  {
    key: 'weight',
    label: 'Weight Record',
    icon: <DashboardOutlined style={{ fontSize: '18px' }} />,
  },
  {
    key: 'diary',
    label: 'Diary',
    icon: <LockOutlined style={{ fontSize: '18px' }} />,
    children: [
      // { key: 'january', label: 'January', icon: null },
      // { key: 'february', label: 'February', icon: null },
      // { key: 'march', label: 'March', icon: null },
      // { key: 'april', label: 'April', icon: null },
      // { key: 'may', label: 'May', icon: null },
      // { key: 'june', label: 'June', icon: null },
      { key: 'july', label: 'July', icon: null },
      { key: 'august', label: 'August', icon: null },
      { key: 'september', label: 'September', icon: null },
      { key: 'october', label: 'October', icon: null },
      { key: 'november', label: 'November', icon: null },
      { key: 'december', label: 'December', icon: null },
    ],
  },
];
const MenuTab = () => {
  const handleClick = (e: any) => {
    const path = '/' + e.key;
    history.push(path);
    console.log('handleClick>>>', e.key, window.location);
  };
  return (
    <div className={styles.menuTab}>
      <Menu
        mode="inline"
        items={items}
        defaultSelectedKeys={['welcome']}
        onClick={handleClick}
      />
    </div>
  );
};

export default MenuTab;
