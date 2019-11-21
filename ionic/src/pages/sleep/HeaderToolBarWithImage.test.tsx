import React from 'react';
import {HeaderToolBarWithImage} from './HeaderToolBarWithImage';
import renderer from 'react-test-renderer'
import { moon } from 'ionicons/icons';

test('renders correctly', () => {
    const tree = renderer.create(<HeaderToolBarWithImage title="Sommeil" imageName={moon} />).toJSON();
    expect(tree).toMatchSnapshot();
});