import React from 'react';

class Iteration {
    constructor(id, projectId, subject, description, startOn, endOn) {
        this.id = id;
        this.projectId = projectId;
        this.subject = subject;
        this.description = description;
        this.startOn = startOn;
        this.endOn = endOn;
    }
    static create(id, projectId, subject, description, startOn, endOn) {
        return new Iteration(id, projectId, subject, description, startOn, endOn);
    }
    static idGenerator = 0;
    static add(content) {
        return new Iteration(++Iteration.idGenerator, content);
    }
}

class IterationList {
    constructor(list) {
        this.list = list;
    }
    static empty() {
        return new IterationList([]);
    }
    add(iteration) {
        return new IterationList([iteration,...this.list]);
    }
}

export { Iteration, IterationList };