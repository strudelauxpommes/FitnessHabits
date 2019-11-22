import React from 'react';
import {GeneralInformationItemCell} from './GeneralInformationItemCell';
// import SleepComponent from '../../pages/components/SleepComponent'
import renderer from 'react-test-renderer'

// import Adapter from 'enzyme-adapter-react-16';
// import {configure, mount, shallow} from 'enzyme'

// configure({ adapter: new Adapter() });

test('renders correctly', () => {


    const tree = renderer.create(<GeneralInformationItemCell labelTitle='Dernière période' labelSubtitle='31/10/2019' labelValue='7'  />).toJSON();
    expect(tree).toMatchSnapshot();
    // expect(tree).toHaveProperty('ion-label', 'Intro')
});