import React from 'react';

class Project {
    constructor(id,content) {
        this.id = id;
        this.content = content;
    }
    static idGenerator = 0;
    static create(content) {
        return new Project(++Project.idGenerator, content);
    }
}

class ProjectList {
    constructor(list) {
        this.list = list;
    }
    static empty() {
        return new ProjectList([]);
    }
    add(project) {
        return new ProjectList([project,...this.list]);
    }
}

export { Project, ProjectList };