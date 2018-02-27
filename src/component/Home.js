import React from 'react';
import { Link } from 'react-router-dom';

export default ({projects}) => (
    <div>
        <h1>Home</h1>
        <ul>
            <li>TODO プロジェクトのデータを保持するStoreを作る</li>
            <li>TODO プロジェクトの一覧を表示する</li>
            <li>TODO プロジェクト詳細へリンクする</li>
        </ul>
        <ul>
           {projects.list.map(prop => 
                <li key={prop.id}>
                    <Link to={"/projects/"+prop.id}>{prop.content}</Link>
                </li>
            )}
        </ul>
    </div>
);
