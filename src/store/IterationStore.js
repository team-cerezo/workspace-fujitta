import { ReduceStore } from 'flux/utils';

import RascaloidDispatcher from '../dispatcher';
import { Iteration, IterationList } from '../model/IterateModel';

class IterationStore extends ReduceStore {
    getInitialState() {
        let iterationList = IterationList.empty()
                            .add(Iteration.create('testIteration1'))
                            .add(Iteration.create('testIteration2'))
                            .add(Iteration.create('testIteration3'))
        return iterationList;
    }
    reduce(state, { type, payload }) {
        switch (type) {
            default:
                return state;
        }
    }
}

export default new IterationStore(RascaloidDispatcher);
