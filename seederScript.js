require('dotenv').config();

const productData = require('./data/products');
const connectDB = require('./config/db');
const WaistApparel = require('./models/WaistApparelModel');
const TightsApparel = require('./models/TightsApparelModel');
const PadApparel = require('./models/PadApparelModel');

const importData = async () => {
  await connectDB();

  try {
    // delete collection
    await WaistApparel.deleteMany({});
    await TightsApparel.deleteMany({});
    await PadApparel.deleteMany({});

    // insert into collection
    await WaistApparel.insertMany(productData[0]);
    await TightsApparel.insertMany(productData[1]);
    await PadApparel.insertMany(productData[2]);

    console.log('Data Import Success');

    process.exit();
  } catch (error) {
    console.error('Error with Data import', error);
    process.exit(1);
  }
};

importData();
