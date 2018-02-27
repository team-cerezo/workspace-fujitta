import { Container } from 'flux/utils';

import Home from '../component/Home';
import ProjectStore from '../store/ProjectStore';

const getStores = () => [ProjectStore];

const calculateState = () => {
    return {
        projects: ProjectStore.getState()
    };
};

const HomeContainer = Container.createFunctional(Home, getStores, calculateState);

export default HomeContainer;
