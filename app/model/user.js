'use strict';

module.exports = app => {
    const {
        INTEGER,
        STRING
    } = app.Sequelize;
    const User = app.model.define('user', {
        id: {
            type: INTEGER,
            primaryKey: true
        },
        user_id: INTEGER,
        user: STRING,
        avatar: STRING
    });
    return User;
}