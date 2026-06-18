const PORT = Number(process.env.PORT) || 3000; //Removed the conflicting port ie port 5000 and set it to 3000 which is the default port for development. This allows for easier testing and development without conflicts with other services that may be using port 5000.


module.exports = {
  PORT,
};
