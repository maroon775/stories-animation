import React, {useCallback, useRef} from "react";
import s from './StoryItem.module.css';
import cx from "classnames";
import {StoryItemStateInterface, StoryItemInterface} from "./StoryItem.interface";

const styles: Record<string, string> = s;

interface StoryItemProps {
    data: StoryItemInterface,
    onClick: (story: StoryItemInterface, position: { x: number, y: number }) => void;
}

export const StoryItem: React.FC<StoryItemProps> = (props) => {
    const storyRef = useRef<HTMLDivElement>(null);
    const onClickHandler = useCallback((event) => {
        const {x, y} = event.target.getBoundingClientRect();
        props.onClick(props.data, {x, y});
    }, [props]);

    return <div ref={storyRef} className={styles.storyOuter} onClick={onClickHandler}>
        <div
            className={cx(styles.story, props.data.state ? styles[StoryItemStateInterface[props.data.state].toLowerCase()] : '')}>
            <div className={styles.storyImage}>
                <img className={styles.userAvatar} src={props.data.profilePicture} alt=""/>
            </div>
            <div className={styles.userName}>{props.data.profileName}</div>
            <div className={styles.userTitle}>{props.data.profileTitle}</div>
            <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="48"/>
            </svg>
        </div>
    </div>;
}


