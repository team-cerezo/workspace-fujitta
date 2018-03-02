import React from 'react';
import { Grid, Menu, Card, Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
  

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
                <Header as='h1' content={prop.content} subheader='' />
                <Grid textAlign='center' columns={3}>
                    <Grid.Row>
                        <Grid.Column color='grey'>
                            <Menu fluid vertical>
                                <Menu.Item className='header'>TODO</Menu.Item>
                                <Menu.Item>
                                    {prop.taskList.list.filter(t => t.status === 'TODO').map(p =>
                                    <ul key={p.id}>
                                        <Card>
                                            <Card.Content>
                                                <Card.Header content={p.subject} />
                                                <Card.Meta content={p.description} />
                                                <Card.Description content={p.estimated_hours} />
                                            </Card.Content>
                                        </Card>
                                    </ul>
                                    )}
                                </Menu.Item>
                            </Menu>
                        </Grid.Column>
                        <Grid.Column color='teal'>
                            <Menu fluid vertical>
                                <Menu.Item className='header'>DOING</Menu.Item>
                                <Menu.Item>
                                    {prop.taskList.list.filter(t => t.status === 'DOING').map(p =>
                                    <ul key={p.id}>
                                        <Card>
                                            <Card.Content>
                                                <Card.Header content={p.subject} />
                                                <Card.Meta content={p.description} />
                                                <Card.Description content={p.estimated_hours} />
                                            </Card.Content>
                                        </Card>
                                    </ul>
                                    )}
                                </Menu.Item>
                            </Menu>
                        </Grid.Column>
                        <Grid.Column color='orange'>
                            <Menu fluid vertical>
                                <Menu.Item className='header'>DONE</Menu.Item>
                                <Menu.Item>
                                    {prop.taskList.list.filter(t => t.status === 'DONE').map(p =>
                                    <ul key={p.id}>
                                        <Card>
                                            <Card.Content>
                                                <Card.Header content={p.subject} />
                                                <Card.Meta content={p.description} />
                                                <Card.Description content={p.estimated_hours} />
                                            </Card.Content>
                                        </Card>
                                    </ul>
                                    )}
                                </Menu.Item>
                            </Menu>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </ul>
        )}
    </div>
);