import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';
import {fetchProjects} from '../actions';
import ProjectStore from '../store/ProjectStore';

const Foo = () => (
    <div>foo</div>
);

class Bar extends React.Component {
    render() {
        return (
            <div>bar</div>
        );
    }
    componentDidMount() {
        console.log('xxxxxx');
        fetchProjects();
    }
}

export default ({projects}) => (
    <div>
        <h1>Home</h1>
        <Foo/>
        <Bar/>
        <ul>
           {projects.list.map(prop => 
                <li key={prop.id}>
                    <Link to={"/projects/"+prop.id}>{prop.content}</Link>
                </li>
            )}
        </ul>
        <Form>
            <Form.Field>
                <label>Register Project</label>
                <input placeholder='projectName'/>
            </Form.Field>
        </Form>
    </div>
);
