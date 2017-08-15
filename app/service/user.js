module.exports = app => {
    class User extends app.Service {
        * query() {
            const users = yield this.ctx.model.User.find({});
            return users;
        }
    }
    return User
}