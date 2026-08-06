import app from './app.js';
import { APP_NAME, connectToDatabase, PORT } from './config.js';

async function startServer() {
    await connectToDatabase();

    app.listen(PORT, () => {
        console.log(`${APP_NAME} is running at http://localhost:${PORT}`);
    });
}

startServer();
