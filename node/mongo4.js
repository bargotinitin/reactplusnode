const dbConnect = require('./mongoconnect')

const main = async () => {
  let db= await dbConnect();
  data = await db.updateOne(
    {'hero': "Spiderman"},
    {
      $set: {'name': 'Spider Man', 'movie': 'Spiderman: Homecoming'}
    }

  );
  console.log(data)

  // data = await db.updateMany(
  //   {'hero': "Spiderman"},
  //   {
  //     $set: {'name': 'Spider Man', 'movie': 'Spiderman: Homecoming'}
  //   }

  // );
  // console.log(data)

}
main();
