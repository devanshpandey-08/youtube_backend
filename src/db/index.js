import mongoose from 'mongoose';
import {DB_NAME} from '../constants.js';


const connectDB = async () => {
    try {
      const connectionInstance = await mongoose.connect(process.env.MONGO_URL, {
            dbName: DB_NAME,
             // Optional: Set a connection timeout (in milliseconds)
        });
        
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Error while connecting to database', error);
        process.exit(1); // Exit the process with an error code  // process is in Node.js, and process.exit(1) indicates that the process exited with an error. This is a common way to signal that something went wrong during the execution of the program.
    }
};

export default connectDB;