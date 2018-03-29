import RascaloidDispatcher from './dispatcher';
import ActionTypes from './action-types';
import { storyStore } from './store/StoryStore';
import { Project, ProjectList } from './model/ProjectModel';
import { Iteration, IterationList } from './model/IterateModel';
import axios from './axios';

export const fetchProjects = event => {
    axios.get('/projects')
    .then(response => {
        let projects = response.data
        let length = projects.length;
        let projectList = ProjectList.empty();
        for (let i = 0; i < length; i++){
            let project= Project.create(projects[i].id, projects[i].name, projects[i].description);
           projectList = projectList.add(project);
        } 
        RascaloidDispatcher.dispatch({
            type: ActionTypes.FETCH_TITLE,
            payload: { projectList }
        });
    })
};
export const fetchIterations = event => {
    axios.get('/project/1/iterations')
    .then(response => {
        let iterations = response.data
        let length = iterations.length;
        let iterationList = IterationList.empty();
        for (let i = 0; i < length; i++){
            let iteration= Iteration.create(iterations[i].id, 
                                            iterations[i].projectId,
                                            iterations[i].subject,
                                            iterations[i].description,
                                            iterations[i].startOn,
                                            iterations[i].endOn);
           iterationList = iterationList.add(iteration);
        } 
        RascaloidDispatcher.dispatch({
            type: ActionTypes.FETCH_ITERATE,
            payload: { iterationList }
        });
    })
};
