import React from "react";
import PlusImage from '../../assets/plus.png'
import styles from './style.module.css';

export const Profile: React.FC = () => {
    return <div className={styles.profile}>
        <div className={styles.profile__avatar}>
            <img className={styles.profile__image} src="https://i.pravatar.cc/500?img=8" alt=""/>
            <i className={styles['profile__change-avatar']}><img src={PlusImage} alt="Change photo"/></i>
        </div>
        <div className={styles.profile__status}>Skapa en ny status</div>
    </div>;
}