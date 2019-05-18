'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async home() {
    const  ctx  = this.ctx;
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
