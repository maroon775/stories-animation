export enum StoryItemStateInterface {
    STORY_EMPTY = 0,
    STORY_UN_VIEWED = 1,
    STORY_LOADING = 2,
    STORY_VIEWED = 3,
}

export interface StoryItemInterface {
    id: string;
    profilePicture: string;
    profileName: string;
    profileTitle: string;
    state: StoryItemStateInterface;
    storyImage: string;
}