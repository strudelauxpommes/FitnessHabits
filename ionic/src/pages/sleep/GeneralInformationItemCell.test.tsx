import React from 'react';
import {GeneralInformationItemCell} from './GeneralInformationItemCell';
import renderer from 'react-test-renderer'


test('renders correctly', () => {
    const tree = renderer.create(<GeneralInformationItemCell labelTitle='Dernière période' labelSubtitle='31/10/2019' labelValue='7'  />).toJSON();
    expect(tree).toMatchSnapshot();
});