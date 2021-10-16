import React from "react";
import PlusImage from '../../assets/plus.png'
import styles from './style.module.css';
import cx from "classnames";

export const Profile: React.FC = () => {
    return <div className={styles.profile}>
        <div className={cx(styles.profile__avatar, 'js-profileAvatar')}>
            <img className={cx(styles.profile__image, 'js-profileImage')} src="https://i.pravatar.cc/500?img=8" alt=""/>
            <i className={cx(styles['profile__change-avatar'], 'js-profileChangeAvatar')}><img src={PlusImage} alt=''/></i>
        </div>
        <div className={cx(styles.profile__status, 'js-profileStatus')}>Skapa en ny status</div>
    </div>;
}