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


import ApiClient from './ApiClient';
import Institution from './model/Institution';
import InstitutionsSearchGet200Response from './model/InstitutionsSearchGet200Response';
import DefaultApi from './api/DefaultApi';


/**
* Plaid API documentation.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var PlaidApi = require('index'); // See note below*.
* var xxxSvc = new PlaidApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new PlaidApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new PlaidApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new PlaidApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Institution model constructor.
     * @property {module:model/Institution}
     */
    Institution,

    /**
     * The InstitutionsSearchGet200Response model constructor.
     * @property {module:model/InstitutionsSearchGet200Response}
     */
    InstitutionsSearchGet200Response,

    /**
    * The DefaultApi service constructor.
    * @property {module:api/DefaultApi}
    */
    DefaultApi
};
