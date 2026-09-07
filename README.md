# 🌱 EcoTrack – Personal Carbon Footprint Dashboard

EcoTrack is a modern and responsive frontend web application that helps users estimate, understand, and reduce their personal carbon footprint.

Users can calculate estimated CO₂ emissions from daily activities such as transportation, electricity usage, food consumption, and food waste. The application provides visual insights, sustainability tips, challenges, and a What-If simulator to understand how lifestyle changes can reduce emissions.

> **Note:** EcoTrack provides illustrative estimates for educational and portfolio purposes. Actual carbon emissions may vary depending on location, energy sources, vehicle efficiency, lifestyle, and calculation methodology.

---

## 🚀 Live Demo

🔗 **Live Demo:** Add your deployed Vercel/Netlify URL here

Example:

`https://your-ecotrack-project.vercel.app`

---

## 📸 Project Overview

EcoTrack provides an easy-to-use dashboard where users can:

- Calculate their estimated carbon footprint
- View emissions by category
- Track previous calculations
- Explore sustainability recommendations
- Complete eco-friendly challenges
- Simulate lifestyle changes
- Monitor their progress
- Store data locally in the browser

---

## ✨ Features

### 🧮 Carbon Calculator

Users can enter their daily/monthly activity data and calculate estimated emissions from:

- 🚗 Transportation
- ⚡ Electricity usage
- 🍖 Food consumption
- 🗑️ Food waste

The calculator generates:

- Total carbon footprint
- Category-wise emissions
- Percentage contribution
- Estimated CO₂ emissions

---

### 📊 Interactive Dashboard

The dashboard provides a visual overview of the user's carbon footprint.

It includes:

- Total monthly emissions
- Eco Score
- Category-wise emissions
- Progress indicators
- Monthly emission trends
- Carbon reduction insights

Charts are implemented using **Recharts**.

---

### 🔄 What-If Carbon Simulator

The simulator allows users to understand the impact of changing their lifestyle.

For example:

- Reducing car usage
- Reducing electricity consumption
- Switching to sustainable transportation

The application calculates the estimated difference between the current footprint and the simulated footprint.

---

### 🌍 Sustainability Challenges

Users can participate in eco-friendly challenges such as:

- Car-Free Day
- Walk 5,000 Steps
- Public Transport Week
- Switch Off Lights
- Reduce AC Usage
- Meat-Free Day
- Reduce Food Waste
- Reusable Bottle
- Recycle for a Week
- Eco Champion

Users can mark challenges as completed and track their progress.

---

### 💡 Sustainability Tips

EcoTrack provides sustainability recommendations based on different categories:

- Transport
- Energy
- Food
- Waste
- Lifestyle

These tips help users understand practical ways to reduce their environmental impact.

---

### 📜 Calculation History

Previous carbon footprint calculations are stored in the browser using **LocalStorage**.

Users can view:

- Previous calculations
- Date of calculation
- Category-wise emissions
- Total emissions

---

### 👤 User Profile

The application provides a simple profile section where users can manage basic information such as:

- Name
- City
- Sustainability goal

Profile information is stored locally.

---

## 🛠️ Tech Stack

### Frontend

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- Bootstrap 5

### Libraries

- React Router
- Recharts
- Lucide React

### Storage

- Browser LocalStorage

### Data

- JSON

### Development Tools

- Visual Studio Code
- Git
- GitHub
- Vite
- npm

---

## 📁 Project Structure

```text
EcoTrack/
│
├── public/
│   ├── images/
│   │   ├── logo.png
│   │   ├── hero.png
│   │   └── eco-illustration.png
│   │
│   └── data/
│       ├── challenges.json
│       ├── tips.json
│       └── emission-factors.json
│
├── src/
│   │
│   ├── assets/
│   │   └── images/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── Footer.jsx
│   │   ├── StatCard.jsx
│   │   ├── ProgressBar.jsx
│   │   ├── EcoScore.jsx
│   │   ├── EmissionCard.jsx
│   │   ├── ChartCard.jsx
│   │   ├── ChallengeCard.jsx
│   │   └── LoadingSpinner.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Calculator.jsx
│   │   ├── Simulator.jsx
│   │   ├── Challenges.jsx
│   │   ├── History.jsx
│   │   └── Profile.jsx
│   │
│   ├── services/
│   │   └── dataService.js
│   │
│   ├── utils/
│   │   ├── calculations.js
│   │   ├── storage.js
│   │   └── constants.js
│   │
│   ├── hooks/
│   │   └── useLocalStorage.js
│   │
│   ├── styles/
│   │   ├── global.css
│   │   ├── navbar.css
│   │   ├── sidebar.css
│   │   ├── dashboard.css
│   │   ├── calculator.css
│   │   ├── simulator.css
│   │   ├── challenges.css
│   │   ├── loadingSpinner.css
│   │   └── responsive.css
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md