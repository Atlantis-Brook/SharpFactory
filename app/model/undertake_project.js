'use strict';

module.exports = app => {
    const {
        INTEGER,
        TIME,
        VARCHAR,
        TEXT
    } = app.Sequlize;
    const undertakeProject = app.model.define('undertake_project', {
        id: {
            type: INTEGER,
            primaryKey: ture
        },
        user: VARCHAR,
        phone: INTEGER,
        email: VARCHAR,
        address: VARCHAR,
        content: TEXT,
        readme: VARCHAR,
        file: TEXT,
        created_at: TIME
    });
    return undertakeProject;
}