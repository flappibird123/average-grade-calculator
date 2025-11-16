import styles from './CardBackground.module.css'

function CardBackground({ subject }) {
    return(
        <div className={styles.square}>
            <p className={styles.subject}>{subject}</p>
        </div>
    );
}

export default CardBackground;