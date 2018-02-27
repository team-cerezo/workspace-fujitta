import React from 'react';
import { Panel } from 'react-bootstrap';

export default ({ projectId, iterationId, Stories}) => (
    <div>
        <h1>Iteration {iterationId} (Project {projectId})</h1>
        <ul>
            <li>TODO ストーリーとタスクのデータを保持するStoreを作る</li>
            <li>TODO ストーリーの一覧を表示する</li>
            <li>TODO タスクの一覧をレーン別に表示する</li>
            <li>TODO タスクをレーン移動できるようにする（まだアサインはできなくて良い）</li>
        </ul>
        {Stories.list.map(prop => 
            <ul key={prop.id}>
                <h1>
                    {prop.content}
                </h1>
                <h2><font color='red'>TODO</font></h2>
                {prop.taskList.list.filter(t => t.status === 'TODO').map(p =>
                    <ul key={p.id}>
                    <h2>{p.subject}</h2>
                    <h4>{p.description}</h4>
                    <h4>{p.estimated_hours}時間かかる</h4>
                </ul>
                )}
                <h2><font color='red'>DOING</font></h2>
                {prop.taskList.list.filter(t => t.status === 'DOING').map(p =>
                    <ul key={p.id}>
                    <h2>{p.subject}</h2>
                    <h4>{p.description}</h4>
                    <h4>{p.estimated_hours}時間かかる</h4>
                </ul>
                )}
                <h2><font color='red'>DONE</font></h2>
                {prop.taskList.list.filter(t => t.status === 'DONE').map(p =>
                    <ul key={p.id}>
                    <h2>{p.subject}</h2>
                    <h4>{p.description}</h4>
                    <h4>{p.estimated_hours}時間かかる</h4>
                </ul>
                )}
            </ul>
        )}
    </div>
);