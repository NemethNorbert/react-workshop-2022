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
            "name": "Bitcoin3",
            "label": "BTC",
            "conversionRate": 995
        },
        {
            "id": 2,
            "name": "Ethernium",
            "label": "ETH",
            "conversionRate": 995
        },
        {
            "id": 3,
            "name": "Tether",
            "label": "USDT",
            "conversionRate": 995
        },
        {
            "id": 4,
            "name": "BNB",
            "label": "BNB",
            "conversionRate": 995
        },
        {
            "id": 5,
            "name": "USD Coin",
            "label": "USDC",
            "conversionRate": 995
        },
        {
            "id": 6,
            "name": "XRP",
            "label": "XRP",
            "conversionRate": 995
        },
        {
            "id": 7,
            "name": "Solana",
            "label": "SO",
            "conversionRate": 995
        }
      ]);
});

app.listen(port, () => console.log(`mockupAPI listening on port ${port}!`));