
// const PORT = Number(process.env.PORT) || 5000;


const PORT = Number(process.env.PORT) || 3000; // default port for dev


module.exports = {
  PORT,
};

// adding a feature 
const FEATURE_FLAG = process.env.FEATURE_FLAG || false;

module.exports = {
  PORT,
  FEATURE_FLAG,
};

