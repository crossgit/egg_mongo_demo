// exports.info = function* (ctx) {
//     // 调用service的方法
//     const users = yield ctx.service.user.query();
//     ctx.body = users;
// }

'use strict';

module.exports = app => {
    class UserController extends app.Controller {
        * info() {
            // 调用service的方法
            const users = yield this.ctx.service.user.query();
            this.ctx.body = users;
        }
    }
    return UserController;
};
