import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {StoryState, UserStory} from "./components/UserStory";
const faker = require('faker');

const profiles = (new Array(15)).fill('');

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Header/>
            </header>

            <div className="App-grid">
                {profiles.map(() => {
                    const userTitle = faker.name.findName();
                    const userName = faker.internet.userName().toLowerCase();
                    const avatar = faker.image.avatar();
                    const id = faker.datatype.uuid();
                    const state:StoryState = faker.random.number({min: 0, max: 3});
                    return <UserStory state={state} userName={userName} userAvatar={avatar} userTitle={userTitle} storyId={id}/>
                })}
            </div>
        </div>
    );
}

export default App;