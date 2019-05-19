'use strict';

module.exports = app => {
    const {
        INTEGER,
        STRING,
        DATE
    } = app.Sequelize;
    const Forum = app.model.define('forum', {
        id: {
            type: INTEGER,
            primaryKey: true
        },
        user: STRING,
        message: STRING,
        ip: INTEGER,
        address: STRING,
        created_at: DATE
    });
    return Forum;

}