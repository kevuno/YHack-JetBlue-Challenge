--Basic Search Queries for Mysql

-- Find Date
SELECT Origin, Destination, DATE(FlightDate), FlightType, DollarFare, DollarTax, DollarFare + DollarTax as "FinalFare", airportlocations.City 
FROM JetBlue JOIN airportlocations ON JetBlue.Destination = airportlocations.Airport  WHERE (Origin like Query
AND Destination like Query
AND DollarFare <= Query
AND DollarFare >= Query
AND IsDomesticRoute = 1
); 

-- Find Price
SELECT Origin, Destination, DATE(FlightDate), FlightType, DollarFare, DollarTax, DollarFare + DollarTax as "FinalFare", airportlocations.City
FROM JetBlue JOIN airportlocations ON JetBlue.Destination = airportlocations.Airport  WHERE (Origin like Query
AND Destination like Query
AND FlightDate = Query
AND IsDomesticRoute = 1
); 

-- Find Dest
SELECT Origin, Destination, DATE(FlightDate), FlightType, DollarFare, DollarTax, DollarFare + DollarTax as "FinalFare", airportlocations.City
FROM JetBlue JOIN airportlocations ON JetBlue.Destination = airportlocations.Airport WHERE (Origin like Query
AND FlightDate = Query
AND DollarFare <= Query
AND DollarFare >= Query
AND IsDomesticRoute = 1
); 

