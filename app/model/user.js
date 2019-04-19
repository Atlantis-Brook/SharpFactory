'use strict';

module.exports = app => {
    const {
        INTEGER,
        VARCHAR
    } = app.Sequlize;
    const user = app.model.define('user', {
        id: {
            type: INTEGER,
            primaryKey: ture
        },
        user_id: INTEGER,
        user: VARCHAR,
        avatar: VARCHAR
    });
    return user;
}