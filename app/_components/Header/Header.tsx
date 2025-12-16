import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Menu />
    </header>
  );
}
