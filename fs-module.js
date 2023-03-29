

const fs = require('fs');
const dir = __dirname;
const path = dir + `\\assets\\temp.txt`;


// Example: Reading a directory
fs.readdir('./assets', (err, files) => {
  if (err) {
    throw err;
  }
  console.log(files);
});
console.log('Reading a Directory...');


// Example: Open and Read file
fs.open(path, 'r', function(err, fd) {
  if (err) {
    return console.error(err);
  }

  var buffr = new Buffer(1024);
  fs.read(fd, buffr, 0, buffr.length, 0, function(err, bytes) {
    if (err) throw err;

    // Print only read bytes to avoid junk.
    if (bytes > 0) {
      console.log(buffr.slice(0, bytes).toString());
    }

    // Close the opened file.
    fs.close(fd, function(err) {
      if (err) throw err;
    });
  });
});



// Example: Reading File Synchronously
var data = fs.readFileSync(path, 'utf8');
console.log(data);


// Example: Renaming a file
fs.rename(path+'\\assets\\temp.txt', path+'\\assets\\dummy.txt', err => {
  if (err) throw err;
  console.log('Rename complete');
}); 


// Example: Creating & Writing File
fs.writeFile(dir + '\\assets\\test.txt', 'This is first paragraph!', function(err) {
  if (err) console.log(err);
  else console.log('Write operation complete.');
});


// Example: Append File Content
fs.appendFile(dir + '\\assets\\test.txt', '\nThis is second paragraph!', function(err) {
  if (err) console.log(err);
  else console.log('Append operation complete.');
});


// Example: File Status
 fs.stat(path, (err, stats) => {
  if (err) throw err;
  console.log(`stats: ${JSON.stringify(stats)}`);
});


// Example: Deleting a file 
fs.unlink(path, err => {
  if (err) throw err;
  console.log(`Successfully deleted file: ${path}`);
});  

