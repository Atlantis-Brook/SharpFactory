'use strict';

module.exports = app => {
    const {
        INTEGER,
        DATE,
        STRING,
        TEXT
    } = app.Sequelize;
    const newInformation = app.model.define('new_information', {
        id: {
            type: INTEGER,
            primaryKey: true
        },
        name: STRING,
        gender: STRING,
        school: STRING,
        grade: STRING,
        tel: STRING,
        qq: STRING,
        whyJoin: TEXT,
        whatKnown: TEXT,
        whatWillGet: TEXT,
        created_at: DATE
    });
    return newInformation;
}