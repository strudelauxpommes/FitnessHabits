import React from 'react';
import {HeaderToolBarWithImage} from './HeaderToolBarWithImage';
// import SleepComponent from '../../pages/components/SleepComponent'
import renderer from 'react-test-renderer'
import { moon } from 'ionicons/icons';

// import Adapter from 'enzyme-adapter-react-16';
// import {configure, mount, shallow} from 'enzyme'

// configure({ adapter: new Adapter() });

test('renders correctly', () => {
    const tree = renderer.create(<HeaderToolBarWithImage title="Sommeil" imageName={moon} />).toJSON();
    expect(tree).toMatchSnapshot();
});