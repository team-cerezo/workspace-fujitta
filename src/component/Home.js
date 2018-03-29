import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';
import {fetchProjects} from '../actions';
import ProjectStore from '../store/ProjectStore';

class Fetch extends React.Component {
    render() {
        return (
            <div>Projects</div>
        );
    }
    componentDidMount() {
        fetchProjects();
    }
}

export default ({projects}) => (
    <div>
        <h1>Home</h1>
        <Fetch />
        <ul>
           {projects.list.map(prop => 
                <li key={prop.id}>
                    <Link to={"/projects/"+prop.id}>{prop.id}</Link>{prop.name}{prop.description}
                </li>
            )}
        </ul>
    </div>
);
