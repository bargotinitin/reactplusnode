const dbConnect = require('./mongoconnect')

const main = async () => {
  let db= await dbConnect();
  data = await db.insertOne({
    'hero': "Spiderman",
    'job': 'Avengers',
    'weapon': 'web'
  });
  console.log(data)

  data = await db.insertMany([
    {
      'hero': "Ironman",
      'job': 'Avengers',
      'weapon': 'bullets'
    },
    {
      'hero': "Captain America",
      'job': 'Avengers',
      'weapon': 'Shield'
    },
    {
      'hero': "Hulk",
      'job': 'Avengers',
      'weapon': 'Punch'
    },
  ]);
  console.log(data)
}
main();
