import React from 'react';
import { Grid, Menu, Card, Header, Button, Input, Form, Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'  

export default ({ projectId, iterationId, Stories}) => (
    <div>
        <h1>Iteration {iterationId} (Project {projectId})</h1>
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
                                            <Card.Content>
                                                <div className='ui two buttons'>
                                                    <Modal trigger={<Button basic color='green'>Edit</Button>} size='mini' position='center'>
                                                        <Modal.Description>
                                                            <Card>
                                                                <Card.Content>
                                                                    <Form>
                                                                        <Form.Field>
                                                                            <input placeholder={p.subject} value={p.subject} />
                                                                        </Form.Field>
                                                                        <Form.Field>
                                                                            <input placeholder={p.description} value={p.description}/>
                                                                        </Form.Field>
                                                                        <Form.Field>
                                                                            <input placeholder={p.estimated_hours} value={p.estimated_hours} />
                                                                        </Form.Field>
                                                                        <Modal.Actions>
                                                                            <Button basic color='blue' type='submit'>Edit</Button>
                                                                        </Modal.Actions>
                                                                    </Form>
                                                                </Card.Content>
                                                            </Card>
                                                        </Modal.Description>
                                                    </Modal>
                                                    <Button basic color='red'>Delete</Button>
                                                </div>
                                            </Card.Content>
                                        </Card>
                                    </ul>
                                    )}
                                    <div>
                                        <Modal trigger={<Button basic color='blue' type='submit'>Add</Button>}
                                                size='mini'>
                                            <Modal.Description>
                                                <Card>
                                                    <Card.Content>
                                                        <Form>
                                                            <Form.Field>
                                                                <input placeholder='subject' />
                                                            </Form.Field>
                                                            <Form.Field>
                                                                <input placeholder='description' />
                                                            </Form.Field>
                                                            <Form.Field>
                                                                <input placeholder='hours' />
                                                            </Form.Field>
                                                            <Modal.Actions>
                                                                <Button basic color='blue' type='submit'>Add</Button>
                                                            </Modal.Actions>
                                                        </Form>
                                                    </Card.Content>
                                                </Card>
                                            </Modal.Description>
                                        </Modal>
                                    </div>
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
                                            <Card.Content extra>
                                                <div className='ui two buttons'>
                                                    <Button basic color='green'>Edit</Button>
                                                    <Button basic color='red'>Delete</Button>
                                                </div>
                                            </Card.Content>
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
                                            <Card.Content extra>
                                                <div className='ui two buttons'>
                                                    <Button basic color='green'>Edit</Button>
                                                    <Button basic color='red'>Delete</Button>
                                                </div>
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