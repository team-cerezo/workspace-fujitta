import React from 'react';

class Iteration {
    constructor(id,content) {
        this.id = id;
        this.content = content;
    }
    static idGenerator = 0;
    static create(content) {
        return new Iteration(++Iteration.idGenerator, content);
    }
}

//ProjectListに引数としてlistを渡すと、ProjectListにその中身がはいる⇒わかる
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