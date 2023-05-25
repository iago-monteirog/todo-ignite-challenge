import styles from './Header.module.css';
import rocketLogo from '../../assets/rocket-logo.svg'

export function Header() {
    return (
        <div className={styles.header}>
            <img src={rocketLogo} alt="Logotipo do todo challenge" />
            <h1>
                <span className={styles.to}>to</span>
                <span className={styles.do}>do</span>
            </h1>
        </div>
    )
}