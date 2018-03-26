import React from 'react';
import { Link } from 'react-router-dom'

export default ({ projectId,iterations }) => (
    <div>
        <h1>Project {projectId}</h1>
        {iterations.list.map(prop => 
                <li key={prop.id}>
                    <Link to={'/projects/' + projectId + '/iterations/' + prop.id}>{prop.content}</Link>
                </li>
            )}
    </div>
);