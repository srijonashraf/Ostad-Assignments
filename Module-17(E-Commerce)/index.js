const app = require("./app");
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

const PORT = process.env.RUNNING_PORT;

try {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
} catch (err) {
  console.log(err);
}
