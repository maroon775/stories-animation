import React, {useCallback, useEffect, useRef, useState} from 'react';
import './App.css';
import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {Header} from "./components/Header";
import {StoryScreen} from "./components/StoryScreen";
import {StoriesGrid} from "./components/StoriesGrid";
import {useAppDispatch} from "./app/hooks";
import {setStoryData} from "./components/StoryScreen/storyScreenSlice";
import {setStoryState} from "./components/StoriesGrid/storiesGridSlice";
import {StoryItemStateInterface} from "./components/StoriesGrid/StoryItem.interface";
import {SwipedComponent} from "./components/SwipedComponent";

gsap.registerPlugin(ScrollTrigger);

function App() {
    const [position, setPosition] = useState(() => ({x: 0, y: 0}))
    const dispatch = useAppDispatch();
    const appRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const storyClickHandler = useCallback((story, position) => {
        setPosition(position);
        dispatch(setStoryData(story));
    }, [setStoryData, dispatch]);

    const storyCloseHandler = useCallback((story) => {
        dispatch(setStoryState({story, state: StoryItemStateInterface.STORY_VIEWED}))
        dispatch(setStoryData(null));
    }, [setStoryData, dispatch]);

    useEffect(() => {
        if (headerRef && contentRef) {
            const timeline = gsap.timeline();
            timeline.fromTo(headerRef.current, {height: '25%'}, {
                height: '80px',
                duration: 2,
            }, 'sync');
            timeline.to('.js-profileAvatar', {
                width: 70,
                height: 70,
                duration: 2,
            }, 'sync');
            timeline.to('.js-profileChangeAvatar', {
                width: 15,
                height: 15,
                padding: 2,
                right: 3,
                bottom: 5,
                duration: 1.8,
            }, 'sync');

            timeline.to(contentRef.current, {
                height: (headerRef.current!.scrollHeight - 80) + contentRef.current!.clientHeight,
                duration: 2
            }, 'sync');


            timeline.to('.js-profileStatus',
                {
                    display: 'none',
                    delay: 0.2,
                    duration: 0.1
                }, 'sync');

            ScrollTrigger.create({
                animation: timeline,
                trigger: contentRef.current,
                scroller: contentRef.current,
                start: "top 1",
                end: "bottom 30%",
                scrub: true,
                // markers: true
            });
        }
    }, [headerRef, contentRef])


    return (
        <div ref={appRef} className="App">
            <header ref={headerRef} className="App-header">
                <Header/>
            </header>

            <div ref={contentRef} className="App-grid">
                <StoriesGrid onStoryClick={storyClickHandler}/>
            </div>

            {/*<SwipedComponent endPosition={position}><StoryScreen startPosition={position} onStoryClose={storyCloseHandler}/></SwipedComponent>*/}
            <StoryScreen startPosition={position} onStoryClose={storyCloseHandler}/>
        </div>
    );
}

export default App;