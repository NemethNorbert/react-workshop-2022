const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3003;

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/data', (req, res) => {
    res.send([
        {
            "id": 1,
            "name": "Bitcoin",
            "label": "BTC",
            "conversionRate": 995
        },
        {
            "id": 2,
            "name": "Ethernium",
            "label": "ETH",
            "conversionRate": 1.2
        },
        {
            "id": 3,
            "name": "Tether",
            "label": "USDT",
            "conversionRate": 0.8
        },
        {
            "id": 4,
            "name": "BNB",
            "label": "BNB",
            "conversionRate": 3.2
        },
        {
            "id": 5,
            "name": "USD Coin",
            "label": "USDC",
            "conversionRate": 0.7
        },
        {
            "id": 6,
            "name": "XRP",
            "label": "XRP",
            "conversionRate": 2.1
        },
        {
            "id": 7,
            "name": "Solana",
            "label": "SO",
            "conversionRate": 0.96
        }
      ]);
});

app.listen(port, () => console.log(`mockupAPI listening on port ${port}!`));