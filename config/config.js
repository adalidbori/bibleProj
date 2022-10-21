const promise = require('bluebird');
const options = {
    promiseLib: promise,
    query: (e) => {}
}

const pgp = require('pg-promise')(options);
const types = pgp.pg.types;
types.setTypeParser(1114, function(stringValue){
    return stringValue;
});

const databaseConfig = {
    'host' : '54.241.7.103',
    'port' : 5432,
    'database' : 'bible_db',
    'user' : 'bori',
    'password' : 'adalid1988'
};

const db = pgp(databaseConfig);

module.exports = db;