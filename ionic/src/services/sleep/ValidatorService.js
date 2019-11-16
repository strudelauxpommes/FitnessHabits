import Ajv from 'ajv'
import path from 'path'
import fs from 'fs'

export default class ValidatorService{
    constructor(){
        const schemaPath = path.join(__dirname, "../../entities/sleep/sleep.schema.json")
        const schemaFile = fs.readFileSync(schemaPath)
        this.schema = JSON.parse(schemaFile)
        
        this.ajv = Ajv()
    }   

    validateSleepJson(json){
        return this.ajv.validate(this.schema, json)
    }

    getErrors(){
        return this.ajv.errors
    }
}