import Preference from '../parameters/Preference';
import { DalImpl } from '../../dal/DalImpl';
import Dal  from '../../dal/Dal';

test('Test poid', async() => {
    const dal: Dal = new DalImpl();
    await dal.setValue("preferences/unitePoids", "lbs")
    const result = await dal.getLastValue("preferences/unitePoids");
    expect(result).toEqual("lbs")
})
