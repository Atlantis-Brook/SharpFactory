'use strict';

module.exports = app => {
    const {
        INTEGER,
        VARCHAR
    } = app.Sequlize;
    const news = app.moel.define('news', {
        id: {
            type: INTEGER,
            primayKey: ture
        },
        title: VARCHAR,
        synopsis: VARCHAR,
        news_url: VARCHAR
    });
    return news;
}