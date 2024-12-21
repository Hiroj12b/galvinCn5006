// Importing required core modules
const os = require('os');
const util = require('util');

// Displaying information using various os methods

// 1. Temporary directory
console.log("Temporary directory:", os.tmpdir());

// 2. Operating System platform (e.g., win32, linux)
console.log("Operating System platform:", os.platform());

// 3. Operating System release (e.g., 10.0.19045)
console.log("Operating System release:", os.release());

// 4. System uptime (in seconds)
console.log("System uptime (seconds):", os.uptime());

// 5. Total system memory (in GB)
const totalMemory = os.totalmem() / (1024 * 1024 * 1024); // Convert bytes to GB
console.log("Total system memory (GB):", totalMemory.toFixed(2));

// 6. Available system memory (in GB)
const freeMemory = os.freemem() / (1024 * 1024 * 1024); // Convert bytes to GB
console.log("Available system memory (GB):", freeMemory.toFixed(2));

// 7. CPU Information (using util.inspect for better readability)
console.log("CPU Information:");
console.log(util.inspect(os.cpus(), {showHidden: false, depth: null}));

// 8. Network Interfaces (using util.inspect for better readability)
console.log("Network Interfaces:");
console.log(util.inspect(os.networkInterfaces(), {showHidden: false, depth: null}));
