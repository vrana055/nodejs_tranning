import express from 'express';
import cluster from 'cluster';

const app = express();

const delay = (duration) => {
  const startTime = Date.now();
  while(Date.now() - startTime < duration) {
    // event loop is blocked
  }
};

app.get('/', (req, res) => {
  res.send(`Performance example ${process.pid}`);
});

app.get('/timer', (req, res) => {
  // delay response
  delay(9000);
  res.send(`Ding Ding Ding ${process.pid}`);
});

console.log('Running server.js.....');
if (cluster.isMaster) {
  console.log('Master has been started...');
  cluster.fork();
  cluster.fork();
} else {
  console.log('Worker process started.');
  app.listen(4000);
}
