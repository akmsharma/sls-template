/**  
 * Created by @author   
 * Date: {SET_DATE}  
 * Time: {SET_TIME}  
 * Function: {RESOURCE} CRUD
 **/
/* jshint esversion:6 */
(function () {
    "use strict";
    module.exports.handler = (event, context, callback) => {
        context.callbackWaitsForEmptyEventLoop = false;
        let get = require('./get');
        switch (event.httpMethod) {
            case 'GET':
                get.get(event, context, callback);
                break;
            case 'POST':
//                create.create(event, context, callback);
//                break;
            case 'PATCH':
//                update.update(event, context, callback);
//                break;
            case 'DELETE':
//                remove.delete(event, context, callback);
//                break;
            default:
                const response = {
                    statusCode: 405,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: {
                        "message": "Method Not Allowed"
                    },
                };
                callback(null, response);
        }
    };
})();