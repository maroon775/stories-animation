import {StoryItemInterface, StoryItemStateInterface} from "./StoryItem.interface";

const faker = require('faker');

export function fetch() {
    return new Promise<{
        data: {
            items: StoryItemInterface[]
        }
    }>((resolve) => {
            const items = (new Array(60).fill({}).map(() => {
                const state: StoryItemStateInterface = faker.random.number({min: 0, max: 1});
                return {
                    id: faker.datatype.uuid(),
                    profileTitle: faker.name.findName(),
                    profileName: faker.internet.userName().toLowerCase(),
                    profilePicture: faker.image.avatar(),
                    storyImage: faker.image.people(1000),
                    state
                } as StoryItemInterface;
            }));

            setTimeout(() => resolve({
                data: {items}
            }), 1000)
        }
    );
}

