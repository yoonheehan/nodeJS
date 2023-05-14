const fs = require("fs");

const createUser = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>User Page</title></head>");
    res.write(
      "<body><div>Hello! Foreigner!</div><div><form action='/create-user' method='POST'><input type='text' name='username'><button type='submit'>Send</button></form></div></body>"
    );
    res.write("</html>");
    return res.end();
  } else if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>User Page</title></head>");
    res.write("<body><ul><li>User 1</li></ul></body>");
    res.write("</html>");
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      console.log(message);
    });
    return res.end();
  }
};

module.exports = createUser;
