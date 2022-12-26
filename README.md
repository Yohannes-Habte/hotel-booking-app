# hotel-booking-app
## Relationships between frontend and backend
1. Relationship between CityHotel.js component (frontend) and Hotel (backend)
    1.1. In the hotel route, you need to add two routes:
        . router.get("/countByCity", countByCity) shows the cities
        . router.get("/countByType", getAllHotels) shows the number of properties 
    1.2. The controllers for the two roots:
2. ss