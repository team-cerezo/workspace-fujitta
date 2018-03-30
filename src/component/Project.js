import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import {fetchIterations} from '../actions';
import IterationStore from '../store/IterationStore';

class Fetch extends React.Component {
    render() {
        return (
            <div>Iterations</div>
        );
    }
    componentDidMount() {
        fetchIterations();
    }
}

export default ({ projectId,iterations }) => (
    <div>
        <Fetch />
        <h1>Project {projectId}</h1>
        <ul>
        {iterations.list.map(prop => 
                <li key={prop.id}>
                    <Link to={'/project/' + projectId + '/iteration/' + prop.id}>{prop.description}</Link>
                </li>
            )}
        </ul>
    </div>
);