'use strict';

module.exports = app => {
    const {
        INTEGER,
        DATE,
        STRING,
        TEXT
    } = app.Sequelize;
    const UndertakeProject = app.model.define('undertake_project', {
        id: {
            type: INTEGER,
            primaryKey: true
        },
        user: STRING,
        phone: INTEGER,
        email: STRING,
        address: STRING,
        content: TEXT,
        readme: STRING,
        file: TEXT,
        created_at: DATE
    });
    return UndertakeProject;
}