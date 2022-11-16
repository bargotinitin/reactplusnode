const dbConnect = require('./mongoconnect')

const main = async () => {
  let db= await dbConnect();
  data = await db.deleteOne(
    {'name': "Nitin"}
  );
  if (data.acknowledged) {
    console.log("Data operation completed successfully.")
  }

  data = await db.deleteMany(
    {'name': "Spider Man"}
  );
  if (data.acknowledged) {
    console.log("Data operation completed successfully.")
  }

}
main();
