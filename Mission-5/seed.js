require('dotenv').config();
const connectDB = require('./db.js');
const Movie = require('./Movie.js');

const seedData = async () => {
  await connectDB();

  try {
    // await Movie.deleteMany();

    await Movie.create({
      title: "3 Idiots",
      year: 2009,
      genres: ["Comedy", "Drama"],
      rating: 8.4
    });
     await Movie.create({
      title: "Mjaa aa gya",
      year: 20010,
      genres: ["Comedy", "Drama"],
      rating: 9.0
     })

    console.log("sample data seeded successfully!");
    process.exit();
  } catch (error) {
    console.error(` Error :  ${error.message}`);
    process.exit(1);
  }
};

seedData();
