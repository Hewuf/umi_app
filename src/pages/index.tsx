import styles from './index.less';
import MenuTab from './MenuTab';

export default function IndexPage() {
  return (
    <div className={styles.main}>
      <MenuTab />
    </div>
  );
}
