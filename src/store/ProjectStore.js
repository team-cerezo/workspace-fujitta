import { ReduceStore } from 'flux/utils';

import RascaloidDispatcher from '../dispatcher';
import { Project, ProjectList } from '../model/ProjectModel';

class ProjectStore extends ReduceStore {
    getInitialState() {
        let projectList = ProjectList.empty()
                            .add(Project.create('testProject1'))
                            .add(Project.create('testProject2'))
                            .add(Project.create('testProject3'))
        return projectList;
    }
}

export default new ProjectStore(RascaloidDispatcher);
