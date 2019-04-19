'use strict';

module.exports = app => {
    const {
        INTEGER,
        VARCHAR
    } = app.Sequlize;
    const userAuths = app.mudel.define('user_auths', {
        id: {
            type: INTEGER,
            primaryKey: true
        },
        user_id: INTEGER,
        identity_type: VARCHAR,
        identifier: VARCHAR,
        credential: VARCHAR,
        salt: VARCHAR,
        password: VARCHAR
    });
    return userAuths;
}