import React from "react";
import styles from './style.css';

const STORY_EMPTY = 0;
const STORY_UN_VIEWED = 1;
const STORY_LOAD = 2;
const STORY_VIEWED = 3;

interface IStoryProps {
    userAvatar: string;
    storyId: number;
}

export const Story: React.FC<IStoryProps> = ({userAvatar, storyId}) => {
    return <span>
        <img src={userAvatar} alt=""/>
    </span>;
}


