var express = require("express");
const mongoose = require('mongoose');
const axios = require('axios');
const app = express();
app.use(express.static('public'));

mongoose.connect("mongodb://localhost:27017/cryptoDB");

const cryptoSchema = new mongoose.Schema({
    name: String,
    last: Number,
    buy: Number,
    sell: Number,
    volume: Number,
    base_unit: String

});
const Crypto=mongoose.model("Crypto",cryptoSchema);
axios.get("https://api.wazirx.com/api/v2/tickers")
    .then((response) => {
        const crypto1=new Crypto({
            name:response.data.btcinr.name,
            last:response.data.btcinr.last,
            buy:response.data.btcinr.buy,
            sell:response.data.btcinr.sell,
            volume:response.data.btcinr.volume,
            base_unit:response.data.btcinr.base_unit
        })
        crypto1.save();
        const crypto2=new Crypto({
            name:response.data.xrpinr.name,
            last:response.data.xrpinr.last,
            buy:response.data.xrpinr.buy,
            sell:response.data.xrpinr.sell,
            volume:response.data.xrpinr.volume,
            base_unit:response.data.xrpinr.base_unit
        })
        crypto2.save();
        const crypto3=new Crypto({
            name:response.data.ethinr.name,
            last:response.data.ethinr.last,
            buy:response.data.ethinr.buy,
            sell:response.data.ethinr.sell,
            volume:response.data.ethinr.volume,
            base_unit:response.data.ethinr.base_unit
        })
        crypto3.save();
        const crypto4=new Crypto({
            name:response.data.trxinr.name,
            last:response.data.trxinr.last,
            buy:response.data.trxinr.buy,
            sell:response.data.trxinr.sell,
            volume:response.data.trxinr.volume,
            base_unit:response.data.trxinr.base_unit
        })
        crypto4.save();
        const crypto5=new Crypto({
            name:response.data.eosinr.name,
            last:response.data.eosinr.last,
            buy:response.data.eosinr.buy,
            sell:response.data.eosinr.sell,
            volume:response.data.eosinr.volume,
            base_unit:response.data.eosinr.base_unit
        })
        crypto5.save();
        const crypto6=new Crypto({
            name:response.data.zilinr.name,
            last:response.data.zilinr.last,
            buy:response.data.zilinr.buy,
            sell:response.data.zilinr.sell,
            volume:response.data.zilinr.volume,
            base_unit:response.data.zilinr.base_unit
        })
        crypto6.save();
        const crypto7=new Crypto({
            name:response.data.batinr.name,
            last:response.data.batinr.last,
            buy:response.data.batinr.buy,
            sell:response.data.batinr.sell,
            volume:response.data.batinr.volume,
            base_unit:response.data.batinr.base_unit
        })
        crypto7.save();
        const crypto8=new Crypto({
            name:response.data.zrxinr.name,
            last:response.data.zrxinr.last,
            buy:response.data.zrxinr.buy,
            sell:response.data.zrxinr.sell,
            volume:response.data.zrxinr.volume,
            base_unit:response.data.zrxinr.base_unit
        })
        crypto8.save();
        const crypto9=new Crypto({
            name:response.data.reqinr.name,
            last:response.data.reqinr.last,
            buy:response.data.reqinr.buy,
            sell:response.data.reqinr.sell,
            volume:response.data.reqinr.volume,
            base_unit:response.data.reqinr.base_unit
        })
        crypto9.save();
        const crypto10=new Crypto({
            name:response.data.nulsinr.name,
            last:response.data.nulsinr.last,
            buy:response.data.nulsinr.buy,
            sell:response.data.nulsinr.sell,
            volume:response.data.nulsinr.volume,
            base_unit:response.data.nulsinr.base_unit
        })
        crypto10.save();
    })
    .catch((error) => {
        console.log(error);
    });

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
})
app.get('/top10', async (req, res) => {
    try {
      const cryptos = await Crypto.find().exec();
      res.send(cryptos);
    } catch (err) {
      console.log(err);
      res.status(500).send('Error retrieving results from database');
    }
  });
  
app.listen(3000, function () {
    console.log("Server started at Port 3000");
});
