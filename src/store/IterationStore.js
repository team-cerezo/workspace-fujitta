import { ReduceStore } from 'flux/utils';

import RascaloidDispatcher from '../dispatcher';
import { Iteration, IterationList } from '../model/IterateModel';
import ActionTypes from '../action-types';

class IterationStore extends ReduceStore {
    getInitialState() {
        let iterationList = IterationList.empty()
        return iterationList;
    }
    reduce(state, { type, payload }) {
        switch (type) {
            case ActionTypes.FETCH_ITERATE: {
                const iterations = payload;
                return iterations.iterationList;
            }
            default:
                return state;
        }
    }
}

export default new IterationStore(RascaloidDispatcher);
