import { Children } from 'react';
import styles from './index.less';
import MenuTab from '../layouts/MenuTab';

export default function IndexPage() {
  return (
    <div className={styles.main}>
      <div className={styles.siderBar}>
        <MenuTab />
      </div>
      <div className={styles.content}>{Children}</div>
    </div>
  );
}
