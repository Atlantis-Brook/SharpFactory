'use strict';

module.exports = app => {
    const {
        INTEGER,
        DATE,
        STRING,
        TEXT
    } = app.Sequelize;
    const messageBoard = app.model.define('message_board', {
        id: {
            type: INTEGER,
            primaryKey: true
        },
        name: STRING,
        radio: STRING,
        email: STRING,
        message: TEXT,
        created_at: DATE
    });
    return messageBoard;
}