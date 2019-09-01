'use strict';

module.exports = app => {
    const {
        INTEGER,
        STRING
    } = app.Sequelize;
    const NavigateUser = app.model.define('navigate_user', {
        id: {
            type: INTEGER,
            primaryKey: true
        },
        user_id: INTEGER,
        category_id: INTEGER,
        category: STRING,
        site_name: STRING,
        site_url: STRING,
        site_icon: STRING

    });
    return NavigateUser;
}