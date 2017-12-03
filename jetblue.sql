--Basic Search Queries for Mysql

-- Find Date
SELECT Origin, Destination, DATE(FlightDate), FlightType, DollarFare, DollarTax, DollarFare + DollarTax as "FinalFare", AirportLocations.City 
FROM JetBlue JOIN AirportLocations ON JetBlue.Destination = AirportLocations.Airport  WHERE (Origin like Query
AND Destination like Query
AND DollarFare <= Query
AND DollarFare >= Query
AND IsDomesticRoute = 1
); 

-- Find Price
SELECT Origin, Destination, DATE(FlightDate), FlightType, DollarFare, DollarTax, DollarFare + DollarTax as "FinalFare", AirportLocations.City
FROM JetBlue JOIN AirportLocations ON JetBlue.Destination = AirportLocations.Airport  WHERE (Origin like Query
AND Destination like Query
AND FlightDate = Query
AND IsDomesticRoute = 1
); 

-- Find Dest
SELECT Origin, Destination, DATE(FlightDate), FlightType, DollarFare, DollarTax, DollarFare + DollarTax as "FinalFare", AirportLocations.City
FROM JetBlue JOIN AirportLocations ON JetBlue.Destination = AirportLocations.Airport WHERE (Origin like Query
AND FlightDate = Query
AND DollarFare <= Query
AND DollarFare >= Query
AND IsDomesticRoute = 1
); 

--Advanced Search Options (Filters)

-- Find Date | Language
SELECT Origin, Destination, DATE(FlightDate), FlightType, DollarFare, DollarTax, DollarFare + DollarTax as "FinalFare", AirportLocations.City 
FROM JetBlue JOIN AirportLocations ON JetBlue.Destination = AirportLocations.Airport 
JOIN CountryLanguage ON AirportLocations.Country = CountryLanguage.Country
WHERE (Origin like Query
AND Destination like Query
AND DollarFare <= Query
AND DollarFare >= Query
AND IsDomesticRoute = 1
AND CountryLanguage.Language like '%query%'
); 

-- Find Price | Language
SELECT Origin, Destination, DATE(FlightDate), FlightType, DollarFare, DollarTax, DollarFare + DollarTax as "FinalFare", AirportLocations.City
FROM JetBlue JOIN AirportLocations ON JetBlue.Destination = AirportLocations.Airport 
JOIN CountryLanguage ON AirportLocations.Country = CountryLanguage.Country
WHERE (Origin like Query
AND Destination like Query
AND FlightDate = Query
AND IsDomesticRoute = 1
AND CountryLanguage.Language like '%query%'
); 

-- Find Dest | Language
SELECT Origin, Destination, DATE(FlightDate), FlightType, DollarFare, DollarTax, DollarFare + DollarTax as "FinalFare", AirportLocations.City
FROM JetBlue JOIN AirportLocations ON JetBlue.Destination = AirportLocations.Airport 
JOIN CountryLanguage ON AirportLocations.Country = CountryLanguage.Country
WHERE (Origin like Query
AND FlightDate = Query
AND DollarFare <= Query
AND DollarFare >= Query
AND IsDomesticRoute = 1
AND CountryLanguage.Language like '%query%'
); 
