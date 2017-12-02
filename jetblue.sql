--Basic Search Queries for Mysql

-- Find Date
SELECT * FROM JetBlue WHERE (Origin like Query
AND Destination like Query
AND DollarFare <= Query
AND DollarFare >= Query
AND IsDomesticRoute = 1
); 

-- Find Price
SELECT * FROM JetBlue WHERE (Origin like Query
AND Destination like Query
AND FlightDate = Query
AND IsDomesticRoute = 1
); 

-- Find Dest
SELECT * FROM JetBlue WHERE (Origin like Query
AND FlightDate = Query
AND DollarFare <= Query
AND DollarFare >= Query
AND IsDomesticRoute = 1
); 

-- 
