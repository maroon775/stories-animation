import React, {useCallback, useEffect, useRef, useState} from "react";
import {useAppSelector} from "../../app/hooks";
import {storyScreenDataSelector} from "./storyScreenSlice";
import styles from './StoryScreen.module.css';
import cx from "classnames";
import gsap from "gsap";
import {StoryItemInterface} from "../StoriesGrid/StoryItem.interface";
import {useDrag} from "@use-gesture/react";
import {StoryView} from "./StoryView";

interface IStoryScreenProps {
    onStoryClose: (story: StoryItemInterface) => void;
    startPosition: { x: number, y: number }
}

export const StoryScreen: React.FC<IStoryScreenProps> = (props) => {
    const storyScreenRef = useRef<HTMLDivElement>(null);
    const storyScreenBackfaceRef = useRef<HTMLDivElement>(null);
    const data = useAppSelector(storyScreenDataSelector);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (data && storyScreenRef.current) {
            gsap.to(storyScreenBackfaceRef.current, {
                background: `rgba(0, 0, 0, 0.9)`
            })
            gsap.fromTo(storyScreenRef.current,
                {
                    top: props.startPosition.y,
                    left: props.startPosition.x,
                    width: '90px',
                    height: '90px'
                },
                {
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    visibility: 'visible',
                    duration: 0.6,
                    ease: 'power2.out',
                    onComplete() {
                        setHeight(storyScreenRef.current!.scrollHeight)
                    }
                }
            );

        }
    }, [data, props.startPosition]);

    const hideScreen = useCallback(() => {
        if (storyScreenRef.current) {

            gsap.to(storyScreenRef.current,
                {
                    top: props.startPosition.y,
                    left: props.startPosition.x,
                    width: '90px',
                    height: '90px',
                    duration: 0.5,
                    ease: 'power2.in',
                    onComplete: () => {
                        storyScreenRef.current!.style.visibility = 'hidden';

                        if (data) {
                            props.onStoryClose(data);
                        }

                    }
                }
            );
        }
    }, [props.startPosition]);


    const bind = useDrag(
        ({last, velocity: [, vy], direction: [, dy], movement: [, my], cancel, canceled}) => {
            const distanceCoefficient = (my / height);//+ vy < 1 ? (vy/2)+1 : Math.min(Math.max(vy, 2.5), 1);
            console.log({
                vy,
                my,
                height,
                distanceCoefficient
            })
            if (my < -1) {
                cancel();
            } else if (last) {
                if (distanceCoefficient > 0.15) {
                    hideScreen();
                } else {
                    gsap.to(storyScreenRef.current, {
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        visibility: 'visible',
                        duration: 0.4,
                        ease: 'power3.out',
                        onComplete() {
                            setHeight(storyScreenRef.current!.scrollHeight)
                        }
                    })
                }
            } else if (distanceCoefficient <= 0.8) {
                storyScreenRef.current!.style.top = (props.startPosition.y * distanceCoefficient) + 'px';
                storyScreenRef.current!.style.transform = `scale(${(1 - distanceCoefficient / 2)})`;
                storyScreenBackfaceRef.current!.style.background = `rgba(0,0,0, ${(0.9 - distanceCoefficient)})`;
            }


        }, {from: () => [0, 0], filterTaps: false, bounds: {top: 0}, rubberband: true}
    );

    if (!data) return null;

    return <div ref={storyScreenBackfaceRef} className={styles.StoryScreenBackface}>
        <div {...bind()} ref={storyScreenRef} className={cx(styles.StoryScreen)}>
            {data ? <StoryView data={data}/> : ''}
        </div>
    </div>
}