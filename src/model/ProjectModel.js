import React from 'react';

class Project {
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
    static create(id, name, description) {
        return new Project(id, name, description);
    }
    static idGenerator = 0;
    static add(name,description) {
        return new Project(++Project.idGenerator, name, description);
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