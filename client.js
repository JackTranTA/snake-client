const net = require("net");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541'
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: TTA");
  });

  // conn.on("connect", () =>  setInterval(() => {
  //   conn.write("Move: up");
  // }, 50));

  conn.on("data", (data) => {
    console.log(data);
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect };