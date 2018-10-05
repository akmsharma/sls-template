/**  
 * Created by @author   
 * Date: {SET_DATE}  
 * Time: {SET_TIME}  
 * Function: {RESOURCE} GET
 **/
/* jshint esversion:6 */

(function () {
"use strict";
module.exports.get = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    var httpMethod = event.httpMethod;
    const jsonResponseHeaders = {
        'Content-Type': 'application/json'
    };
    if (httpMethod && httpMethod === "GET") {        
            callback(null, {
                statusCode: 200,
                headers: jsonResponseHeaders,
                body: {
                    "message": "Function success"
                }
            });
    } else {
        const response = {
            statusCode: 405,
            headers: jsonResponseHeaders,
            body: {
                "message": "Method Not Allowed"
            },
        };
        callback(null, response);
    }
};
})();