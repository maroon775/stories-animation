import React from "react";
import s from './style.module.css';
import cx from "classnames";

const styles: Record<string, string> = s;


export enum StoryState {
    STORY_EMPTY = 0,
    STORY_UN_VIEWED = 1,
    STORY_LOADING = 2,
    STORY_VIEWED = 3,
}

interface IStoryProps {
    userAvatar: string;
    storyId: number;
    userName: string;
    userTitle: string;
    state: StoryState
}

export const UserStory: React.FC<IStoryProps> = ({userAvatar, storyId, userName, userTitle, state}) => {
    return <div className={styles.storyOuter}>
        <div className={cx(styles.story, state ? styles[StoryState[state].toLowerCase()] : '')}>
            <div className={styles.storyImage}>
                <img className={styles.userAvatar} src={userAvatar} alt=""/>
            </div>
            <div className={styles.userName}>{userName}</div>
            <div className={styles.userTitle}>{userTitle}</div>
            <svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="48"/></svg>
        </div>
    </div>;
}


