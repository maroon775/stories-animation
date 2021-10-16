import React from "react";
import {StoryItemInterface} from "../StoriesGrid/StoryItem.interface";
import styles from './StoryView.module.css';
import DotsIcon from '../../assets/dots.svg';

interface StoryViewProps {
    data: StoryItemInterface
}
export const StoryView: React.FC<StoryViewProps> = (props) => {
    return <div className={styles.StoryView}>
        <header className={styles.StoryViewHeader}>
            <div className={styles.StoryViewProfileImage}>
                <img src={props.data.profilePicture} alt={props.data.profileName}/>
            </div>
            <span className={styles.StoryViewProfileName}>{props.data.profileName}</span>
            <span  className={styles.StoryViewDotsMenu}>
                <img src={DotsIcon} alt=""/>
            </span>
        </header>

        <div className={styles.StoryViewContent} style={{backgroundImage: `url(${props.data.storyImage})`}} />
        <footer className={styles.StoryViewFooter}>
            <input className={styles.StoryViewInput} type="text" placeholder='Send direct message'/>
        </footer>
    </div>
}