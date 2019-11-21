import Ajv from 'ajv'
import path from 'path'
import fs from 'fs'

const SLEEP_COLLECTION_SCHEMA_FILE = "./sleep_collection.schema.json"

test('a valid json sleep collection', () => {
    const schemaPath = path.join(__dirname, SLEEP_COLLECTION_SCHEMA_FILE)
    const schemaFile = fs.readFileSync(schemaPath)
    const schema = JSON.parse(schemaFile)

    let ajv = Ajv()
    const json = [
        {
            "id": 1,
            "start": "2016-11-23T23:00:00-05:00",
            "end": "2016-11-24T07:00:00-05:00",
            "numberOfInteruptions": 2,
            "comment": "",
            "mood": "neutre"
        },
        { 
            "id": 2,
            "start": "2016-11-21T23:00:00-05:00",
            "end": "2016-11-22T08:00:00-05:00",
            "numberOfInteruptions": 2,
            "comment": "",
            "mood": "neutre"
        },
        {
            "id": 3,
            "start": "2016-11-20T22:00:00-05:00",
            "end": "2016-11-21T06:00:00-05:00",
            "numberOfInteruptions": 2,
            "comment": "",
            "mood": "neutre"
        }
    ]

    expect(ajv.validate(schema, json)).toBeTruthy()
})

test('a unvalid json sleep collection', () => {
    const schemaPath = path.join(__dirname, SLEEP_COLLECTION_SCHEMA_FILE)
    const schemaFile = fs.readFileSync(schemaPath)
    const schema = JSON.parse(schemaFile)


    let ajv = Ajv()
    const json = [
        {
            "id": 1,
            "start": "2016-1-23T23:00:00-05:00", //2016-1-23 ... is invalid
            "end": "2016-11-24T07:00:00-05:00",
            "numberOfInteruptions": 2,
            "comment": ""
        },
        { 
            "id": 2,
            "start": "2016-11-21T23:00:00-05:00",
            "end": "2016-11-22T08:00:00-05:00",
            "numberOfInteruptions": 2,
            "comment": ""
        },
        {
            "id": 3,
            "start": "2016-11-20T22:00:00-05:00",
            "end": "2016-11-21T06:00:00-05:00",
            "numberOfInteruptions": 2,
            "comment": ""
        }
    ]

    expect(ajv.validate(schema, json)).toBeFalsy()
})