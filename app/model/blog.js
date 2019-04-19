'use strict';

module.exports = app => {
    const {
        INTEGER,
        TEXT,
        TIME,
        VARCHAR
    } = app.Sequelize;
    const blog = app.model.define('blog', {
        id: {
            type: INTEGER,
            primaryKey: ture
        },
        user_id: INTEGER,
        title: VARCHAR,
        visits: INTEGER,
        markdown: TEXT,
        synopsis: TEXT,
        html: TEXT,
        update_html: TIME,
        created_at: TIME,
        updated_all: TIME
    });
    return blog;
}