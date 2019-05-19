'use strict';

module.exports = app => {
    const {
        INTEGER,
        STRING
    } = app.Sequelize;
    const NavigateIndex = app.model.define('navigate_index', {
        id: {
            type: INTEGER,
            primaryKey: true
        },
        category_id: INTEGER,
        category: STRING,
        site_name: STRING,
        site_url: STRING
    });
    return NavigateIndex;

}