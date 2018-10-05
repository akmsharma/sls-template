/**  
 * Created by @author   
 * Date: {SET_DATE}  
 * Time: {SET_TIME}  
 * Function: {RESOURCE} GET
 **/
/* jshint esversion:6 */

(function () {
    "use strict";
    const Sequelize = require('sequelize');
    var db_mode = process.env.ENV || 'dev';
    let env = require('./env.json')[db_mode];
    const sequelize = new Sequelize(env.database, env.username, env.password, {
        host: env.host,
        port: env.port,
        logging: true, // Disable the logging. It is consuming the time on lambda function.
        dialect: env.dialect,
        define: {
            timestamps: false
        },
        operatorsAliases: false,
        pool: {
            max: 5,
            min: 0,
            acquire: 20000,
            idle: 10000
        }
    });
    module.exports = {
        'Sequelize': Sequelize,
        'sequelize': sequelize
    };
})();