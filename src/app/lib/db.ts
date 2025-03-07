import mongoose from "mongoose";
import { MongoMemoryServer } from 'mongodb-memory-server';

declare global {
  var mongoose: any; // This must be a `var` and not a `let / const`
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connect() {
  
  const mongoServer = await MongoMemoryServer.create();


  if (!mongoServer.getUri()) {
    throw new Error(
      "Please check memory capabilities and server configuration of mongo in memory database.",
    );
  }

  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      dbName: 'docgen'
    };
    cached.promise = mongoose.connect(mongoServer.getUri(), opts).then((mongoose) => {
      return mongoose;
    });
  }
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default connect;