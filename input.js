// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }

  if (key === '\u0061') {
    connection.write("Move: left");
  }
  
  if (key === '\u0064') {
    connection.write("Move: right");
  }
  
  if (key === '\u0077') {
    connection.write("Move: up");
  }
  
  if (key === '\u0073') {
    connection.write("Move: down");
  }
    
  if (key === '\u0031') {
    connection.write("Say: nom nom nom");
  }
 
  if (key === '\u0032') {
    connection.write("Say: I am the longest snek");
  }
    
  if (key === '\u0033') {
    connection.write("Say: hisssss");
  }
   
  if (key === '\u0034') {
    connection.write("Say: traffic incoming, out of the way");
  }
     
  if (key === '\u0035') {
    connection.write("Say: git gud");
  }
};

module.exports = { setupInput };