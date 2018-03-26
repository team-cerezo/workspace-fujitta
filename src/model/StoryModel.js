import React from 'react';

class Story {
    constructor(id,content,taskList) {
        this.id = id;
        this.content = content;
        this.taskList = taskList;
    }
    static idGenerator = 0;
    static create( content,taskList ) {
        return new Story(++Story.idGenerator, content,taskList);
    }
}

class StoryList {
    constructor(list) {
        this.list = list;
    }
    static empty() {
        return new StoryList([]);
    }
    add(story) {
        return new StoryList([story,...this.list]);
    }
}

class Task {
    constructor( id, subject, description, estimated_hours, status) {
        this.id = id;
        this.subject = subject;
        this.description = description;
        this.estimated_hours = estimated_hours;
        this.status = status;
    }
    static idGenerator = 0;
    static create( subject, description, estimated_hours, status ) {
        return new Task(++Task.idGenerator, subject, description, estimated_hours, status);
    }
    static edit (subject, description, estimated_hours, status ) {
        return new Task( this.id, subject, description, estimated_hours, status );
    }
    setStatus(status) {
        return new Task(this.id, this.subject, this.description, this.estimated_hours, status)
    }
}

class TaskList {
    constructor( list,storyId ) {
        this.list = list;
    }
    static empty() {
        return new TaskList([]);
    }
    add(task) {
        return new TaskList([task,...this.list]);
    }
    edit(id, subject, description, estimated_hours, status) {
        return new TaskList(this.list.map(task => {
            if (task.id === id) {
                return task.edit(subject, description, estimated_hours, status)
            }
            return task;
        }));
    }
}

export { Story, StoryList, Task, TaskList };