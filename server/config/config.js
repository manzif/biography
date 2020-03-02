"use strict";

var config = {
  development: {
    username: 'postgres',
    password: 'password',
    database: 'manziweb',
    host: '127.0.0.1',
    dialect: 'postgres',
    "operatorsAliases": false
  },
  test: {
    username: 'database_test',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: 'rowejpvwkohmoh',
    password: 'fbc126e721f2ad48c2eaab3e150d019f8ce5642e7297bac9a6757aba45a69f7d',
    database: 'd9i0ajqr852mug',
    host: 'ec2-35-172-85-250.compute-1.amazonaws.com',
    dialect: 'postgres',
    operatorsAliases: false,
    ssl: true,
    dialectOptions: {
      ssl: {
        "require": true
      }
    }
  }
};
module.exports = config;
