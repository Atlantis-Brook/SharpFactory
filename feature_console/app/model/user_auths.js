'use strict';

module.exports = app => {
    const {
        INTEGER,
        STRING
    } = app.Sequelize;
    const UserAuths = app.model.define('user_auths', {
        id: {
            type: INTEGER,
            primaryKey: true
        },
        user_id: INTEGER,
        identity_type: STRING,
        identifier: STRING,
        credential: STRING,
        salt: STRING,
        password: STRING
    });
    return UserAuths;
}