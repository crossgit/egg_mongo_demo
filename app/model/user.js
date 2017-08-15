module.exports = app => {
    const mongoose = app.mongoose;
    const UserSchema = new mongoose.Schema({ 
        name: { type: String }
    });

    return mongoose.model('test1', UserSchema);
}