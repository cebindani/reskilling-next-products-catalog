import styles from './loading.module.scss';

export default function Loading() {
  return (
    <div role="progressbar" className={styles.loadingContainer}>
      <div className={styles.loadingSpinner}></div>
    </div>
  );
}
