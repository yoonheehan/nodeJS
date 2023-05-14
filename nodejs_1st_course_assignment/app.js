const http = require("http");
const userRoute = require("./routes");

const server = http.createServer(userRoute);

server.listen(3000);
