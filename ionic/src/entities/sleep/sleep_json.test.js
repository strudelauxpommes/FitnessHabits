import Ajv from 'ajv'
import path from 'path'
import fs from 'fs'

const SLEEP_SCHEMA_FILE = "./sleep.schema.json"

test('a valid json sleep', () => {
    const schemaPath = path.join(__dirname, SLEEP_SCHEMA_FILE)
    const schemaFile = fs.readFileSync(schemaPath)
    const schema = JSON.parse(schemaFile)

    let ajv = Ajv()

    const sleepJson = {
        'id': 1, 
        'start': '2016-11-01T23:00:00-05:00', 
        'end': '2016-11-02T07:05:00-05:00', 
        'numberOfInteruptions': 1, 
        'comment': '',
        'moon': 'neutre'
    }

    const result = ajv.validate(schema, sleepJson)
    expect(result).toBeTruthy
})

test('invalid json sleep:  id field', () => {
    const schemaPath = path.join(__dirname, SLEEP_SCHEMA_FILE)
    const schemaFile = fs.readFileSync(schemaPath)
    const schema = JSON.parse(schemaFile)

    const ajv = Ajv()
    const sleepJSONS= [
        {'start': '2016-11-01T23:00:00-05:00', 'end': '2016-11-02T07:05:00-05:00', 'numberOfInteruptions': 1,'comment': '', 'moon': 'neutre'}, 
        {'id': '1', 'start': '2016-11-01T23:00:00-05:00', 'end': '2016-11-02T07:05:00-05:00', 'numberOfInteruptions': 1,'comment': '', 'moon': 'neutre'},
        {'id': 0, 'start': '2016-11-01T23:00:00-05:00', 'end': '2016-11-02T07:05:00-05:00', 'numberOfInteruptions': 1,'comment': '', 'moon': 'neutre'},
        {'id': null, 'start': '2016-11-01T23:00:00-05:00', 'end': '2016-11-02T07:05:00-05:00', 'numberOfInteruptions': 1,'comment': '', 'moon': 'neutre'},
        {'id': undefined, 'start': '2016-11-01T23:00:00-05:00', 'end': '2016-11-02T07:05:00-05:00', 'numberOfInteruptions': 1,'comment': '', 'moon': 'neutre'},
        {'id': -1, 'start': '2016-11-01T23:00:00-05:00', 'end': '2016-11-02T07:05:00-05:00', 'numberOfInteruptions': 1,'comment': '', 'moon': 'neutre'},
        {'id': 1.3, 'start': '2016-11-01T23:00:00-05:00', 'end': '2016-11-02T07:05:00-05:00', 'numberOfInteruptions': 1,'comment': '', 'moon': 'neutre'},
    ]
    
    sleepJSONS.forEach(json => expect(ajv.validate(schema, json)).toBeFalsy())
})

test('invalid json sleep: start field', () => {
    const schemaPath = path.join(__dirname, SLEEP_SCHEMA_FILE)
    const schemaFile = fs.readFileSync(schemaPath)
    const schema = JSON.parse(schemaFile)

    const ajv = Ajv()
    const sleepJSONS= [
        {'id': 1, 'end': '2016-11-02T07:05:00-05:00', 'numberOfInteruptions': 1,'comment': '', 'moon': 'neutre'},
        {'id': 1,  'start': null, 'end': '2016-11-02T07:05:00-05:00', 'numberOfInteruptions': 1,'comment': '', 'moon': 'neutre'}, //null
        {'id': 1,  'start': undefined, 'end': '2016-11-02T07:05:00-05:00', 'numberOfInteruptions': 1,'comment': ''}, //undefined
        {'id': 1,  'start': '2016-11-01', 'end': '2016-11-02T07:05:00-05:00', 'numberOfInteruptions': 1,'comment': '', 'moon': 'neutre'}, //missing time
        {'id': 1,  'start': '1996-10-15T00:05:32.000Z', 'end': '2016-11-02T07:05:00-05:00', 'numberOfInteruptions': 1,'comment': '', 'moon': 'neutre'}, //ISO formate: dateobj.toISOString();
        {'id': 1,  'start': '2016-11-1T23:00:00-05:00', 'end': '2016-11-02T07:05:00-05:00', 'numberOfInteruptions': 1,'comment': '', 'moon': 'neutre'}, //2016-11-1 (mission 0)
        {'id': 1, 'start': '2016-11-01T3:00:00-05:00', 'end': '2016-11-02T07:05:00-05:00', 'numberOfInteruptions': 1,'comment': '', 'moon': 'neutre'}, //3:00:00 (missing 0)
        {'id': 1, 'start': '2016-1-01T3:00:00-05:00', 'end': '2016-11-02T07:05:00-05:00', 'numberOfInteruptions': 1,'comment': '', 'moon': 'neutre'}, //2016-1-01 (missing 0)
        {'id': 1, 'start': '2016-02-30T3:00:00-05:00', 'end': '2016-11-02T07:05:00-05:00', 'numberOfInteruptions': 1,'comment': '', 'moon': 'neutre'}, //2016-02-30 (invalid date)
        {'id': 1, 'start': '2016-11-01T23:61:00-05:00', 'end': '2016-11-02T07:05:00-05:00', 'numberOfInteruptions': 1,'comment': '', 'moon': 'neutre'} //23:61 (invalid time)
    ]
    
    sleepJSONS.forEach(json => expect(ajv.validate(schema, json)).toBeFalsy())
})

test('invalid json sleep:  end field', () => {
    const schemaPath = path.join(__dirname, SLEEP_SCHEMA_FILE)
    const schemaFile = fs.readFileSync(schemaPath)
    const schema = JSON.parse(schemaFile)

    const ajv = Ajv()
    const sleepJSONS= [
        {'id': 1, 'start': '2016-11-02T07:05:00-05:00', 'numberOfInteruptions': 1,'comment': '', 'moon': 'neutre'},
        {'id': 1, 'end': null, 'start': '2016-11-02T07:05:00-05:00', 'numberOfInteruptions': 1,'comment': '', 'moon': 'neutre'}, //null
        {'id': 1, 'end': undefined, 'start': '2016-11-02T07:05:00-05:00', 'numberOfInteruptions': 1,'comment': '', 'moon': 'neutre'}, //undefined
        {'id': 1, 'end': '2016-11-01', 'start': '2016-11-02T07:05:00-05:00', 'numberOfInteruptions': 1,'comment': '', 'moon': 'neutre'}, //missing time
        {'id': 1, 'end': '3:00:00-05:00', 'start': '2016-11-02T07:05:00-05:00', 'numberOfInteruptions': 1,'comment': '', 'moon': 'neutre'}, //missing date
        {'id': 1, 'end': '1996-10-15T00:05:32.000Z', 'start': '2016-11-02T07:05:00-05:00', 'numberOfInteruptions': 1,'comment': '', 'moon': 'neutre'}, //ISO formate: dateobj.toISOString();
        {'id': 1, 'end': '2016-11-01T3:00:00-05:00', 'start': '2016-11-02T07:05:00-05:00', 'numberOfInteruptions': 1,'comment': '', 'moon': 'neutre'}, //3:00:00 (missing 0)
        {'id': 1, 'end': '2016-11-01T3:00:00-05:00', 'start': '2016-11-02T07:05:00-05:00', 'numberOfInteruptions': 1,'comment': '', 'moon': 'neutre'}, //3:00:00 (missing 0)
        {'id': 1, 'end': '2016-11-01T3:00:00-05:00', 'start': '2016-11-02T07:05:00-05:00', 'numberOfInteruptions': 1,'comment': '', 'moon': 'neutre'}, //3:00:00 (missing 0)
        {'id': 1, 'end': '2016-11-01T3:00:00-05:00', 'start': '2016-11-02T07:05:00-05:00', 'numberOfInteruptions': 1,'comment': '', 'moon': 'neutre'}, //3:00:00 (missing 0)
        {'id': 1, 'end': '2016-11-1T23:00:00-05:00', 'start': '2016-11-02T07:05:00-05:00', 'numberOfInteruptions': 1,'comment': '', 'moon': 'neutre'}, //missing field
        {'id': 1, 'end': '2016-11-01T3:00:00-05:00', 'start': '2016-11-02T07:05:00-05:00', 'numberOfInteruptions': 1,'comment': '', 'moon': 'neutre'}, //3:00:00 (missing 0)
        {'id': 1, 'end': '2016-11-1T03:00:00-05:00', 'start': '2016-11-02T07:05:00-05:00', 'numberOfInteruptions': 1,'comment': '', 'moon': 'neutre'}, //2016-11-1 (missing 0)
        {'id': 1, 'end': '2016-1-01T3:00:00-05:00', 'start': '2016-11-02T07:05:00-05:00', 'numberOfInteruptions': 1,'comment': '', 'moon': 'neutre'}, //2016-1-01 (missing 0)
        {'id': 1, 'end': '2016-02-30T3:00:00-05:00', 'start': '2016-11-02T07:05:00-05:00', 'numberOfInteruptions': 1,'comment': '', 'moon': 'neutre'}, //2016-02-30 (invalid date)
        {'id': 1, 'end': '2016-11-01T23:61:00-05:00', 'start': '2016-11-02T07:05:00-05:00', 'numberOfInteruptions': 1,'comment': '', 'moon': 'neutre'} //23:61 (invalid time)
    ]
    
    sleepJSONS.forEach(json => expect(ajv.validate(schema, json)).toBeFalsy())
})

test('invalid json sleep: numberOfInteruptions field', () => {
    const schemaPath = path.join(__dirname, SLEEP_SCHEMA_FILE)
    const schemaFile = fs.readFileSync(schemaPath)
    const schema = JSON.parse(schemaFile)

    const ajv = Ajv()
    const sleepJSONS= [
        {'id': 1, 'start': '2016-11-01T23:00:00-05:00', 'end': '2016-11-02T07:05:00-05:00', 'comment': '', 'moon': 'neutre'},
        {'id': 1, 'start': '2016-11-01T23:00:00-05:00', 'end': '2016-11-02T07:05:00-05:00', 'numberOfInteruptions': '1','comment': '', 'moon': 'neutre'},
        {'id': 1, 'start': '2016-11-01T23:00:00-05:00', 'end': '2016-11-02T07:05:00-05:00', 'numberOfInteruptions': 2.3,'comment': '', 'moon': 'neutre'},
        {'id': 1, 'start': '2016-11-01T23:00:00-05:00', 'end': '2016-11-02T07:05:00-05:00', 'numberOfInteruptions': -1,'comment': '', 'moon': 'neutre'},
        {'id': 1, 'start': '2016-11-01T23:00:00-05:00', 'end': '2016-11-02T07:05:00-05:00', 'numberOfInteruptions': null,'comment': '', 'moon': 'neutre'},
        {'id': 1, 'start': '2016-11-01T23:00:00-05:00', 'end': '2016-11-02T07:05:00-05:00', 'numberOfInteruptions': undefined,'comment': '', 'moon': 'neutre'}
    ]
    
    sleepJSONS.forEach(json => expect(ajv.validate(schema, json)).toBeFalsy())
})

test('invalid json sleep:  comment field', () => {
    const schemaPath = path.join(__dirname, SLEEP_SCHEMA_FILE)
    const schemaFile = fs.readFileSync(schemaPath)
    const schema = JSON.parse(schemaFile)

    const ajv = Ajv()
    const sleepJSONS= [
        {'id': 1, 'start': '2016-11-01T23:00:00-05:00', 'end': '2016-11-02T07:05:00-05:00', 'numberOfInteruptions': 1, 'moon': 'neutre'},
        {'id': 1,  'start': '2016-11-01T23:00:00-05:00', 'end': '2016-11-02T07:05:00-05:00', 'numberOfInteruptions': 1,'comment': 123, 'moon': 'neutre'},
        {'id': 1,  'start': '2016-11-01T23:00:00-05:00', 'end': '2016-11-02T07:05:00-05:00', 'numberOfInteruptions': 1,'comment': null, 'moon': 'neutre'},
        {'id': 1,  'start': '2016-11-01T23:00:00-05:00', 'end': '2016-11-02T07:05:00-05:00', 'numberOfInteruptions': 1,'comment': undefined, 'moon': 'neutre'}
    ]
    
    sleepJSONS.forEach(json => expect(ajv.validate(schema, json)).toBeFalsy())
})

test('invalid json sleep:  moon field', () => {
    const schemaPath = path.join(__dirname, SLEEP_SCHEMA_FILE)
    const schemaFile = fs.readFileSync(schemaPath)
    const schema = JSON.parse(schemaFile)

    const ajv = Ajv()
    const sleepJSONS= [
        {'id': 1, 'start': '2016-11-01T23:00:00-05:00', 'end': '2016-11-02T07:05:00-05:00', 'numberOfInteruptions': 1},
        {'id': 1,  'start': '2016-11-01T23:00:00-05:00', 'end': '2016-11-02T07:05:00-05:00', 'numberOfInteruptions': 1,'comment': 123, 'moon': 1},
        {'id': 1,  'start': '2016-11-01T23:00:00-05:00', 'end': '2016-11-02T07:05:00-05:00', 'numberOfInteruptions': 1,'comment': null, 'moon': 'aa'},
        {'id': 1,  'start': '2016-11-01T23:00:00-05:00', 'end': '2016-11-02T07:05:00-05:00', 'numberOfInteruptions': 1,'comment': undefined, 'moon': null},
        {'id': 1,  'start': '2016-11-01T23:00:00-05:00', 'end': '2016-11-02T07:05:00-05:00', 'numberOfInteruptions': 1,'comment': undefined, 'moon': undefined}
    ]
    
    sleepJSONS.forEach(json => expect(ajv.validate(schema, json)).toBeFalsy())
})