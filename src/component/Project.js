import React from 'react';
import { Link } from 'react-router-dom'

export default ({ projectId,iterations }) => (
    <div>
        <h1>Project {projectId}</h1>
        <ul>
            <li>TODO イテレーションのデータを保持するStoreを作る</li>
            <li>TODO イテレーションの一覧を表示する</li>
            <li>TODO イテレーション詳細へリンクする</li>
        </ul>
        {iterations.list.map(prop => 
                <li key={prop.id}>
                    <Link to={'/projects/' + projectId + '/iterations/' + prop.id}>{prop.content}</Link>
                </li>
            )}
    </div>
);