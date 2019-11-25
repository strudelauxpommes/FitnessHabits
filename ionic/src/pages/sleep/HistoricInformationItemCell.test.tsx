import React from 'react';
import {HistoricInformationItemCell} from './HistoricInformationItemCell';
import renderer from 'react-test-renderer'
import { Sleep } from '../../entities/sleep/sleep';


test('renders correctly', () => {
    var json = {
        "id": 1,
        "start": "2016-11-23T23:00:00-05:00",
        "end": "2016-11-24T07:00:00-05:00",
        "numberOfAwakenings": 2,
        "comment": "",
        "moon": 1
    }
    const sleep = new Sleep(json);
    // const tree = renderer.create(<HistoricInformationItemCell sleep={sleep} />).toJSON();
    // expect(tree).toMatchSnapshot();
});