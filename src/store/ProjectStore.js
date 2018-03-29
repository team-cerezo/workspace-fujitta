import { ReduceStore } from 'flux/utils';

import RascaloidDispatcher from '../dispatcher';
import { Project, ProjectList } from '../model/ProjectModel';
import ActionTypes from '../action-types';

class ProjectStore extends ReduceStore {
    getInitialState() {
        let projectList = ProjectList.empty()
        return projectList;
    }
    reduce(state, { type, payload }) {
        switch (type) {
            case ActionTypes.FETCH_TITLE: {
                const projects = payload;
                return projects.projectList;
            }
            default:
                return state;
        }
    }
}

export default new ProjectStore(RascaloidDispatcher);
