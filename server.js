import express from 'express';

const app = express();

const delay = (duration) => {
  const startTime = Date.now();
  while(Date.now() - startTime < duration) {
    // event loop is blocked
  }
};

app.get('/', (req, res) => {
  res.send('Performance example');
});

app.get('/timer', (req, res) => {
  // delay response
  delay(9000);
  res.send('Ding Ding Ding');
});

app.listen(4000);