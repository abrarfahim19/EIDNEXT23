import mongoose from "mongoose";

let isConnected = false;

const dbOptions = {
  dbName: process.env.DB_NAME as string,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("MongoDB is Connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI as string, dbOptions);
    isConnected = true;
    console.log("MongoDB is Connected");
  } catch (error) {
    console.log(error);
  }
};
