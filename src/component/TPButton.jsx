import styles from './TPButton.module.scss';

export default function TPButton({ children, ...rest }) {
  return (
    <button
      className={styles.tpButton}
      {...rest}
    >
      {children}
    </button>
  );
}
