import styles from './TPButton.module.scss';

export default function TPButton({ children, onClick }) {
  return (
    <button
      className={styles.tpButton}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
