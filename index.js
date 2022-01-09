const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//soal no 1
app.post("/kubus", (req, res) => {
    let sisi = Number(req.body.sisi);
  
    let volume = sisi * sisi * sisi;
    let luas_permukaan = 6 * (sisi * sisi);
  
    let response = {
      sisi: sisi,
      volume: volume,
      luas_permukaan: luas_permukaan,
    };
    res.json(response);
  });

app.post("/balok", (req, res) => {
  let panjang = Number(req.body.panjang);
  let lebar = Number(req.body.lebar);
  let tinggi = Number(req.body.tinggi);

  let volume = panjang * lebar * tinggi;
  let luas_permukaan = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi);

  let response = {
    panjang: panjang,
    lebar: lebar,
    tinggi: tinggi,
    volume: volume,
    luas_permukaan: luas_permukaan,
  };
  res.json(response);
});

app.post("/prisma_segiempat", (req,res)=>{
    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    let tinggi = Number(req.body.tinggi)

    let luas_permukaan = 2 * (panjang * tinggi) + 2 * (panjang * lebar) + 2 * (lebar * tinggi)
    let volume = panjang * lebar * tinggi

    let response = {
        panjang : panjang,
        lebar : lebar,
        tinggi : tinggi,
        luas_permukaan : luas_permukaan,
        volume : volume

    }
    res.json(response)
})

app.post("/tabung", (req, res) => {
  let jari = Number(req.body.jari);
  let tinggi = Number(req.body.tinggi);
  let phi = Number(req.body.phi);

  let volume = phi * jari * jari * tinggi;
  let luas_permukaan = 2 * phi * jari * (jari + tinggi);

  let response = {
    jari: jari,
    tinggi: tinggi,
    phi: phi,
    volume: volume,
    luas_permukaan: luas_permukaan,
  };
  res.json(response);
});

//soal no 2
app.get("/convert/celcius/:value", (req, res) => {
  let celcius = req.params.celcius;
  let value = req.params.value;

  let reamur = (4 / 5) * value;
  let fahrenheit = (9 / 5) * value + 32;
  let kelvin = (1 / 1) * value + 273;

  let response = {
    celcius: value,
    result: {
      reamur: reamur,
      fahrenheit: fahrenheit,
      kelvin: kelvin,
    },
  };
  res.json(response);
});

app.get("/convert/reamur/:value", (req, res) => {
  let reamur = req.params.reamur;
  let value = req.params.value;

  let celcius = (5 / 4) * value;
  let fahrenheit = (9 / 4) * value + 32;
  let kelvin = (5 / 4) * value + 273;

  let response = {
    reamur: value,
    result: {
      celcius: celcius,
      fahrenheit: fahrenheit,
      kelvin: kelvin,
    },
  };
  res.json(response);
});

app.get("/convert/kelvin/:value", (req, res) => {
  let kelvin = req.params.kelvin;
  let value = req.params.value;

  let celcius = value - 273;
  let fahrenheit = (9 / 5) * (value - 273.15) + 32;
  let reamur = (4 / 5) * (value - 273.15);

  let response = {
    kelvin: value,
    result: {
      celcius: celcius,
      fahrenheit: fahrenheit,
      reamur: reamur,
    },
  };
  res.json(response);
});

app.get("/convert/fahrenheit/:value", (req, res) => {
  let fahrenheit = req.params.fahrenheit;
  let value = req.params.value;

  let celcius = (5 / 9) * (value - 32);
  let reamur = (4 / 9) * (value - 32);
  let kelvin = (5 / 9) * (value - 32) + 273;

  let response = {
    fahrenheit: value,
    result: {
      celcius: celcius,
      reamur: reamur,
      kelvin: kelvin,
    },
  };
  res.json(response);
});

//soal no 3
app.post("/decimal", (req,res) => {

    let decimal = Number(req.body.decimal)

    let biner = decimal.toString(2)
    let octal = decimal.toString(8)
    let hex = decimal.toString(16)

    let response = {
        decimal : decimal,
        result : {
            biner : biner,
            octal : octal,
            hex : hex
        }
    }
    res.json(response)
})

app.post("/biner", (req,res) =>{

    let biner = Number(req.body.biner)

    let decimal = parseInt(biner,2)
    let octal = parseInt(biner, 2).toString(8)
    let hex = parseInt(biner, 2).toString(16)

    let response = {
        biner : biner,
        result : {
            decimal : decimal,
            octal : octal,
            hex : hex
        }
    }
    res.json(response)
})

app.post("/octal", (req,res) =>{

    let octal = Number(req.body.octal)

    let decimal = parseInt(octal,8)
    let binary = parseInt(octal, 8).toString(2)
    let hex = parseInt(octal, 8).toString(16)

    let response = {
        octal : octal,
        result : {
            decimal : decimal,
            binary : binary,
            hex : hex
        }
    }
    res.json(response)
})

app.post("/hex", (req,res) => {

    let hex = Number(req.body.hex)

    let decimal = parseInt(hex,16)
    let binary = parseInt(hex, 16).toString(2)
    let octal = parseInt(hex, 16).toString(8)

    let response = {
        Hexadecimal : hex,
        result : {
            decimal : decimal,
            octal : octal,
            binary : binary
        }
    }
    res.json(response)
})

//soal no 4
app.post("/bmi", (req,res)=>{
    let tinggi = Number(req.body.tinggi)
    let berat = Number(req.body.berat)

    let bmi = berat / (tinggi * tinggi)
    let status 
    if (bmi<18.5) {
        status="Kekurangan Berat Badan"
    }
    else if (bmi<=24.9 && bmi>=18.5) {
        status="Normal(ideal)"
    }
    else if (bmi<=29.9 && bmi>=25.0) {
        status="Kelebihan Berat Badan"
    }
    else{
        status="kegemukan(Obesitas)"
    }

    let response = {
        tinggi : tinggi,
        berat : berat,
        bmi : bmi,
        status : status
    }
    
    res.json(response)
})

app.listen(8000, () => {
  console.log("Server run on port 8000");
});