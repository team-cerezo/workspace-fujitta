import RascaloidDispatcher from './dispatcher';
import ActionTypes from './action-types';
import { storyStore } from './store/StoryStore';
import { Project, ProjectList } from './model/ProjectModel';
import axios from './axios';

export const fetchProjects = event => {

    axios.get('/projects')
    .then(response => {
        let projects = response.data
        let project = Project.create(projects[0].name)
        let projectList = ProjectList.add(project);
        RascaloidDispatcher.dispatch({
            type: ActionTypes.FETCH_TITLE,
            payload: {projectList}
        });
    })
};