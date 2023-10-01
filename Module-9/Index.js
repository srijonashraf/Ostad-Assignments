const app = require('./App');
const dotenv = require('dotenv');

// Load environment variables from config.env file
dotenv.config({ path: './config.env' });

const PORT = process.env.RUNNING_PORT || 5500; // Use 5500 as a default if RUNNING_PORT is not defined in config.env

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
