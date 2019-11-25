import Preference from '../parameters/Preference';
import { DalImpl } from '../../dal/DalImpl';
import Dal  from '../../dal/Dal';

/*
it('renders correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  */

test('Test poids lbs', async () => {
    const dal: Dal = new DalImpl();
    await dal.setValue("preferences/unitePoids", "lbs")
    const result = await dal.getLastValue("preferences/unitePoids");
    console.log(result);
    expect(result).toEqual("lbs")
})

test('Test poids kg', async () => {
    const dal: Dal = new DalImpl();
    await dal.setValue("preferences/unitePoids", "kg")
    const result = await dal.getLastValue("preferences/unitePoids");
    console.log(result);
    expect(result).toEqual("kg")
})

test('Test taille feet', async () => {
    const dal: Dal = new DalImpl();
    await dal.setValue("preferences/unitePoids", "feet")
    const result = await dal.getLastValue("preferences/unitePoids");
    console.log(result);
    expect(result).toEqual("feet")
})

test('Test taille cm', async () => {
    const dal: Dal = new DalImpl();
    await dal.setValue("preferences/unitePoids", "cm")
    const result = await dal.getLastValue("preferences/unitePoids");
    console.log(result);
    expect(result).toEqual("cm")
})


test('Test breuvage L ', async () => {
    const dal: Dal = new DalImpl();
    await dal.setValue("preferences/unitePoids", "L")
    const result = await dal.getLastValue("preferences/unitePoids");
    console.log(result);
    expect(result).toEqual("L")
})


test('Test breuvage mL ', async () => {
    const dal: Dal = new DalImpl();
    await dal.setValue("preferences/unitePoids", "mL")
    const result = await dal.getLastValue("preferences/unitePoids");
    console.log(result);
    expect(result).toEqual("mL")
})

test('Test breuvage on', async () => {
    const dal: Dal = new DalImpl();
    await dal.setValue("preferences/unitePoids", "on")
    const result = await dal.getLastValue("preferences/unitePoids");
    console.log(result);
    expect(result).toEqual("on")
})

test('Test total breuvage ', async () => {
    const dal: Dal = new DalImpl();
    await dal.setValue("preferences/unitePoids", "L")
    const result = await dal.getLastValue("preferences/unitePoids");
    console.log(result);
    expect(result).toEqual("L")
})

test('Test total mL ', async () => {
    const dal: Dal = new DalImpl();
    await dal.setValue("preferences/unitePoids", "mL")
    const result = await dal.getLastValue("preferences/unitePoids");
    console.log(result);
    expect(result).toEqual("mL")
})

test('Test total on ', async () => {
    const dal: Dal = new DalImpl();
    await dal.setValue("preferences/unitePoids", "on")
    const result = await dal.getLastValue("preferences/unitePoids");
    console.log(result);
    expect(result).toEqual("on")
})

test('Test username change ', async () => {
    const dal: Dal = new DalImpl();
    await dal.setValue("profil/nom", "paule")
    const result = await dal.getLastValue("profil/nom");
    console.log(result);
    expect(result).toEqual("paule")
})

test('Test Height change ', async () => {
    const dal: Dal = new DalImpl();
    await dal.setValue("profil/taille", "10");
    const result = await dal.getLastValue("profil/taille");
    console.log(result);
    expect(result).toEqual("10")
})

test('Test Date change ', async () => {
    const dal: Dal = new DalImpl();
    await dal.setValue("profil/dateNaissance", "2019/01/01");
    const result = await dal.getLastValue("profil/dateNaissance");
    console.log(result);
    expect(result).toEqual("2019/01/01")
})

test('Test Sexe change ', async () => {
    const dal: Dal = new DalImpl();
    await dal.setValue("profil/sexe", "Homme");
    const result = await dal.getLastValue("profil/sexe");
    console.log(result);
    expect(result).toEqual("Homme")
})