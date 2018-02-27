import { ReduceStore } from 'flux/utils';

import RascaloidDispatcher from '../dispatcher';
import { Story, StoryList, Task, TaskList } from '../model/StoryModel';

class StoryStore extends ReduceStore {
    getInitialState() {
        let storyList = StoryList.empty()
                            .add(Story.create('story1',taskList))
                            .add(Story.create('story2',taskList))
                            .add(Story.create('story3',taskList))
        return storyList;
    }
    reduce(state, { type, payload }) {
        switch (type) {
            default:
                return state;
        }
    }
}

let taskList = TaskList.empty()
.add(Task.create('TODOたすく１','たすくのないよう１',5,'TODO'))
.add(Task.create('DOINGたすく２','たすくのないよう２',7,'DOING'))
.add(Task.create('DONEたすく３','たすくのないよう３',0.5,'DONE'))
.add(Task.create('DONEたすく4','たすくのないよう4',8,'DONE'))
.add(Task.create('DONEたすく5','たすくのないよう5',1,'TODO'))

export default new StoryStore(RascaloidDispatcher);

