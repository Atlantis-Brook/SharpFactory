'use strict';
module.exports = () => {
    return async function login(ctx,next) {
        if (ctx.session.uid) {
            ctx.state.email = ctx.session.email;
        }
        await next();
    };
  }