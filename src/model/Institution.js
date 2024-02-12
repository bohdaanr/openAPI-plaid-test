/**
 * Plaid API
 * Plaid API documentation
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Institution model module.
 * @module model/Institution
 * @version 1.0.0
 */
class Institution {
    /**
     * Constructs a new <code>Institution</code>.
     * @alias module:model/Institution
     */
    constructor() { 
        
        Institution.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Institution</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Institution} obj Optional instance to populate.
     * @return {module:model/Institution} The populated <code>Institution</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Institution();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Institution</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Institution</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['logo'] && !(typeof data['logo'] === 'string' || data['logo'] instanceof String)) {
            throw new Error("Expected the field `logo` to be a primitive type in the JSON string but got " + data['logo']);
        }

        return true;
    }


}



/**
 * The institution ID
 * @member {String} id
 */
Institution.prototype['id'] = undefined;

/**
 * The institution name
 * @member {String} name
 */
Institution.prototype['name'] = undefined;

/**
 * URL of the institution's logo
 * @member {String} logo
 */
Institution.prototype['logo'] = undefined;






export default Institution;

