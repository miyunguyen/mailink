import mongoose from 'mongoose';

const APP_NAME = 'Mailink';
const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 8080;

async function connectToDatabase() {
    const MONGODB_URI =
        process.env.MONGODB_URI || 'mongodb://mongodb:27017/mailink';

    mongoose.Promise = Promise;

    if (ENV === 'development' || ENV === 'test') {
        mongoose.set('debug', true);
    }

    try {
        await mongoose.connect(MONGODB_URI, {
            autoIndex: false,
            autoCreate: false,
        });
        console.log(`${APP_NAME} successfully connected to database.`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export { APP_NAME, PORT, connectToDatabase };
