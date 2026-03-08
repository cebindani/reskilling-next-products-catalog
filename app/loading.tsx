import styles from './loading.module.css';

export default function Loading() {
  return (
    <div role='progressbar' className={styles['loading-container']}>
      <div className={styles['loading-spinner']}></div>
    </div>
  );
}
