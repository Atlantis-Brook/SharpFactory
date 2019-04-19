'use strict';

module.exports = app => {
    const {
        INTEGER,
        VARCHAR,
        TIME
    } = app.Sequelize;
    const forum = app.model.define('forum', {
        id: {
            type: INTEGER,
            primaryKey: ture
        },
        user: VARCHAR,
        message: VARCHAR,
        ip: INTEGER,
        address: VARCHAR,
        created_at: TIME
    });
    return forum;

}