import Ajv from 'ajv'
import path from 'path'
import fs from 'fs'

/**
 * [A service to validate a sleep json object]
 */
export default class ValidatorService{
    constructor(){
        const schemaPath = path.join(__dirname, "../../entities/sleep/sleep.schema.json")
        const schemaFile = fs.readFileSync(schemaPath)
        this.schema = JSON.parse(schemaFile)
        
        this.ajv = Ajv({allErrors: true})
        this.validate;
    }   

    /**
     * [Validate a json againt a schema]
     *
     * @param   {object}  json  [a sleep json object]
     *
     * @return  {boolean}        [true if valid]
     */
    validateSleepJson(json){
        return this.ajv.validate(this.schema, json)
    }

    /**
     * [Get a list of errors for the invalid attributes]
     *
     * eg: [
        {
          keyword: 'format',
          dataPath: '.start',
          schemaPath: '#/properties/start/format',
          params: { format: 'date-time' },
          message: 'should match format "date-time"'
        }
      ]
     * 
     * @return  {[object]}  
     */
    getErrors(){
        return this.ajv.errors
    }
}