# 🌦️ Weather Forecasting Application

A simple full-stack Weather Forecasting application that provides real-time weather information for any city.  
Users can enter a city name and easily get the current weather report.

## 🚀 Features

- Search weather by city name
- Real-time temperature, condition, and wind speed
- Clean and user-friendly interface

## 🛠️ Tech Stack

Frontend
- HTML
- CSS
- JavaScript

Backend
- Node.js
- Express.js
- WeatherAPI
- dotenv (for environment variables)
- CORS

## 🧠 Architecture Overview

The frontend handles user input and displays weather information in a simple and user-friendly interface. When a city name is entered, it sends a request to the backend. The backend securely calls the Weather API using an environment variable and processes the response. Based on the temperature, it determines the weather type and sends only the required data back to the frontend. This structure keeps the application secure, clean, and easy to maintain.
