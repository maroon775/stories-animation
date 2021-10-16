import React, {useCallback, useEffect} from "react";
import {StoryItem} from "./StoryItem";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {getStoriesAsync, setStoryState, storiesSelector} from "./storiesGridSlice";
import styles from './StoriesGrid.module.css';
import {StoryItemInterface, StoryItemStateInterface} from "./StoryItem.interface";


interface StoriesGridProps {
    onStoryClick: (story: StoryItemInterface, position: {}) => void
}

export const StoriesGrid: React.FC<StoriesGridProps> = (props) => {
    const stories = useAppSelector(storiesSelector);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getStoriesAsync());
    }, []);

    const onStoryClick = useCallback((story: StoryItemInterface, position: {}) => {
        if([StoryItemStateInterface.STORY_UN_VIEWED, StoryItemStateInterface.STORY_VIEWED].includes(story.state)) {
            dispatch(setStoryState({story, state: StoryItemStateInterface.STORY_LOADING}));

            props.onStoryClick(story, position);
        }
    }, [props.onStoryClick])

    return <div className={styles.StoriesGrid}>
        {stories.map((item) => {
            return <StoryItem data={item} onClick={onStoryClick} key={item.id}/>
        })}
    </div>
}