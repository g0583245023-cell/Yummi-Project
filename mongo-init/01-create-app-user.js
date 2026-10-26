const appDatabaseName = process.env.MONGO_INITDB_DATABASE;
const appDatabase = db.getSiblingDB(appDatabaseName);

appDatabase.createUser({
  user: process.env.MONGO_APP_USERNAME,
  pwd: process.env.MONGO_APP_PASSWORD,
  roles: [{ role: "readWrite", db: appDatabaseName }],
});
