const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

app.get("/weather", async (req, res) => {
    const city = req.query.city;

    if (!city) {
        return res.status(400).json({ error: "City is required" });
    }

    try {
        const url = `https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${city}&aqi=yes`;
        const response = await fetch(url);

        if (!response.ok) {
            return res.status(404).json({ error: "Location not found" });
        }

        const data = await response.json();
        const temp = data.current.temp_c;

        let type = "";

        if (temp <= 10) {
            type = "cold";
        } else if (temp <= 20) {
            type = "cool";
        } else if (temp <= 30) {
            type = "warm";
        } else if (temp <= 40) {
            type = "hot";
        } else {
            type = "extreme";
        }

        res.json({
            temperature: temp,
            condition: data.current.condition.text,
            wind: data.current.wind_kph,
            weatherType: type
        });

    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
