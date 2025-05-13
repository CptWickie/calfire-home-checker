# CalFire Home Risk Checker

This project is a full-stack web application designed to help users check wildfire risk zones in California and identify nearby real estate listings and food shelters. It integrates:

* Wildfire perimeter data from ArcGIS
* Real estate listings from the RapidAPI US Real Estate Listings API
* Custom map interface using Leaflet

---

##  Features

* **Interactive Wildfire Map**: Displays historical wildfire perimeters across California.
* **Real Estate Listings**: Fetches listings near Los Angeles (via RapidAPI).
* **Shelter Search**: Simulates locating nearby food shelters.
* **Legend Support**: Users can view map keys for fire zones, real estate, and shelters.
* **Toggle Layers**: Toggle visibility of fire zones, shelters, or real estate markers.

---

##  Technologies Used

### Frontend:

* React
* Leaflet (via react-leaflet)
* AOS (scroll animations)
* Custom CSS

### Backend:

* Node.js
* Express.js
* SQLite (for optional shelter storage)

---

## Setup & Deployment

### Prerequisites

* Node.js installed
* GitHub account


##  Live Preview


```
Frontend: https://your-app.onrender.com
Backend API: https://your-backend.onrender.com/api
```

---

##  Credits

* Developed by Filiberto Oceguera-Huizar, Yair Diaz, and Juan Martinez Vasquez
* Data from CalFire (ArcGIS) & RapidAPI

---


## Future Enhancements

* Login/auth for saved zones
* Real-time fire alerts
* Shelter API integration
* User-submitted tips and experiences

---

