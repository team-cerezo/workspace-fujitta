import { Container } from 'flux/utils';

import Iteration from '../component/Iteration';
import StoryStore from '../store/StoryStore';

const getStores = () => [StoryStore];

const calculateState = (prevState, { match: { params: { projectId, iterationId } } }) => {
    return {
        Stories: StoryStore.getState(),
        projectId,
        iterationId
    };
};

const IterationContainer = Container.createFunctional(Iteration, getStores, calculateState, { withProps: true });

export default IterationContainer;
