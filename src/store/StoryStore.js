import { ReduceStore } from 'flux/utils';
import ActionTypes from '../action-types';
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
            case ActionTypes.EDIT_TASK:{
                const { subject, description, estimated_hours } = payload;
                const task = Task.create(subject, description, estimated_hours, 'TODO');
                return state.add(task);
            }
            case ActionTypes.ADD_TASK:{
                const { subject, description, estimated_hours } = payload;
                const task = Task.create(subject, description, estimated_hours,'TODO')
            }
            default:
                return state;
        }
    }
}

let taskList = TaskList.empty()
.add(Task.create('たすく１','たすくのないよう１',5,'TODO'))
.add(Task.create('たすく２','たすくのないよう２',7,'DOING'))
.add(Task.create('たすく３','たすくのないよう３',0.5,'DONE'))
.add(Task.create('たすく4','たすくのないよう4',8,'DOING'))
.add(Task.create('たすく5','たすくのないよう5',1,'DONE'))
.add(Task.create('たすく6','たすくのないよう6',2,'DOING'))
.add(Task.create('たすく7','たすくのないよう7',3,'DONE'))
.add(Task.create('たすく8','たすくのないよう8',4,'TODO'))

export default new StoryStore(RascaloidDispatcher);