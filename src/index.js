'use strict';

const app = require('./app');
const port = process.env.PORT || app.get('port');
const server = app.listen(port);


process.on('unhandledRejection', (reason,p) => {
  console.log("Unhandled rejection error at Promise", p, "reasons:", reason);
})

server.on('listening', () =>{
  console.log(`Feathers application started on ${app.get('host')}:${port}`);
  console.log(app.get('files'));
  }
);
