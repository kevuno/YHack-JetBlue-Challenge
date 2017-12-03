--Basic Search Queries for Mysql

-- Find Date
--SELECT Origin, Destination, DATE(FlightDate), FlightType, DollarFare, DollarTax, DollarFare + DollarTax as "FinalFare", AirportLocations.City 
--FROM JetBlue JOIN AirportLocations ON JetBlue.Destination = AirportLocations.Airport  WHERE (Origin like Query
--AND Destination like Query
--AND DollarFare <= Query
--AND DollarFare >= Query
--AND IsDomesticRoute = 1
--); 

-- Find Price
--SELECT Origin, Destination, DATE(FlightDate), FlightType, DollarFare, DollarTax, DollarFare + DollarTax as "FinalFare", AirportLocations.City
--FROM JetBlue JOIN AirportLocations ON JetBlue.Destination = AirportLocations.Airport  WHERE (Origin like Query
--AND Destination like Query
--AND FlightDate = Query
--AND IsDomesticRoute = 1
--); 

-- Find Dest
--SELECT Origin, Destination, DATE(FlightDate), FlightType, DollarFare, DollarTax, DollarFare + DollarTax as "FinalFare", AirportLocations.City
--FROM JetBlue JOIN AirportLocations ON JetBlue.Destination = AirportLocations.Airport WHERE (Origin like Query
--AND FlightDate = Query
--AND DollarFare <= Query
--AND DollarFare >= Query
--AND IsDomesticRoute = 1
--); 

--Advanced Search Options (Filters)

-- Find Date | Language
--SELECT Origin, Destination, DATE(FlightDate), FlightType, DollarFare, DollarTax, DollarFare + DollarTax as "FinalFare", AirportLocations.City 
--FROM JetBlue JOIN AirportLocations ON JetBlue.Destination = AirportLocations.Airport 
--JOIN CountryLanguage ON AirportLocations.Country = CountryLanguage.Country
--WHERE (Origin like Query
--AND Destination like Query
--AND DollarFare <= Query
--AND DollarFare >= Query
--AND IsDomesticRoute = 1
--AND CountryLanguage.Language like '%query%'
--); 

-- Find Price | Language
--SELECT Origin, Destination, DATE(FlightDate), FlightType, DollarFare, DollarTax, DollarFare + DollarTax as "FinalFare", AirportLocations.City
--FROM JetBlue JOIN AirportLocations ON JetBlue.Destination = AirportLocations.Airport 
--JOIN CountryLanguage ON AirportLocations.Country = CountryLanguage.Country
--WHERE (Origin like Query
--AND Destination like Query
--AND FlightDate = Query
--AND IsDomesticRoute = 1
--AND CountryLanguage.Language like '%query%'
--); 

-- Find Dest | Language
--SELECT Origin, Destination, DATE(FlightDate), FlightType, DollarFare, DollarTax, DollarFare + DollarTax as "FinalFare", AirportLocations.City
--FROM JetBlue JOIN AirportLocations ON JetBlue.Destination = AirportLocations.Airport 
--JOIN CountryLanguage ON AirportLocations.Country = CountryLanguage.Country
--WHERE (Origin like Query
--AND FlightDate = Query
--AND DollarFare <= Query
--AND DollarFare >= Query
--AND IsDomesticRoute = 1
--AND CountryLanguage.Language like '%query%'
--); 


-- New SQL stuff
-- Domestic with Uber
SELECT * FROM JetBlue JOIN AirportLocations ON JetBlue.Destination = AirportLocations.Airport 
JOIN CountryLanguage ON AirportLocations.Country = CountryLanguage.Country
WHERE (Origin like Query
AND (FlightDate = Query OR FlightDate IS NULL)
AND DollarFare >= Query
AND DollarFare <= Query
AND IsDomesticRoute = 1
AND AirportLocations.UberOrNot = 1
AND (CountryLanguage.Language like '%query%' 
    OR CountryLanguage.Language like 'query%' 
    OR CountryLanguage.Language like '%query' 
)); 

-- Domestic without Uber
SELECT * FROM JetBlue JOIN AirportLocations ON JetBlue.Destination = AirportLocations.Airport 
JOIN CountryLanguage ON AirportLocations.Country = CountryLanguage.Country
WHERE (Origin like Query
AND (FlightDate = Query OR FlightDate IS NULL)
AND DollarFare >= Query
AND DollarFare <= Query
AND IsDomesticRoute = 1
AND AirportLocations.UberOrNot = 0
AND (CountryLanguage.Language like '%query%' 
    OR CountryLanguage.Language like 'query%' 
    OR CountryLanguage.Language like '%query' 
)); 

-- International with Uber
SELECT * FROM JetBlue JOIN AirportLocations ON JetBlue.Destination = AirportLocations.Airport 
JOIN CountryLanguage ON AirportLocations.Country = CountryLanguage.Country
WHERE (Origin like Query
AND (FlightDate = Query OR FlightDate IS NULL)
AND DollarFare >= Query
AND DollarFare <= Query
AND IsDomesticRoute = 0
AND AirportLocations.UberOrNot = 1
AND (CountryLanguage.Language like '%query%' 
    OR CountryLanguage.Language like 'query%' 
    OR CountryLanguage.Language like '%query' 
)); 

-- International without Uber
SELECT * FROM JetBlue JOIN AirportLocations ON JetBlue.Destination = AirportLocations.Airport 
JOIN CountryLanguage ON AirportLocations.Country = CountryLanguage.Country
WHERE (Origin like Query
AND (FlightDate = Query OR FlightDate IS NULL)
AND DollarFare >= Query
AND DollarFare <= Query
AND IsDomesticRoute = 0
AND AirportLocations.UberOrNot = 0
AND (CountryLanguage.Language like '%query%' 
    OR CountryLanguage.Language like 'query%' 
    OR CountryLanguage.Language like '%query' 
)); 

-- ###############################
-- test cases
-- ###############################
-- 1

SELECT * FROM JetBlue JOIN AirportLocations ON JetBlue.Destination = AirportLocations.Airport 
JOIN CountryLanguage ON AirportLocations.Country = CountryLanguage.Country
WHERE (Origin like 'JFK'
AND (DATE(FlightDate) = '2017-11-29' OR '2017-11-29' IS NULL)
AND DollarFare >= 0
AND DollarFare <= 1000
AND IsDomesticRoute = 1
AND AirportLocations.UberOrNot = 1
AND (CountryLanguage.Language like '%english%' 
    OR CountryLanguage.Language like 'english%' 
    OR CountryLanguage.Language like '%english' 
)); 

-- 2

SELECT * FROM JetBlue JOIN AirportLocations ON JetBlue.Destination = AirportLocations.Airport 
JOIN CountryLanguage ON AirportLocations.Country = CountryLanguage.Country
WHERE (Origin like 'ROC'
AND (DATE(FlightDate) = '2017-11-29' OR '2017-11-29' IS NULL)
AND DollarFare >= 100
AND DollarFare <= 1000
AND IsDomesticRoute = 1
AND AirportLocations.UberOrNot = 1
AND (CountryLanguage.Language like '%spanish%' 
    OR CountryLanguage.Language like 'spanish%' 
    OR CountryLanguage.Language like '%spanish' 
)); 

-- 3

SELECT * FROM JetBlue JOIN AirportLocations ON JetBlue.Destination = AirportLocations.Airport 
JOIN CountryLanguage ON AirportLocations.Country = CountryLanguage.Country
WHERE (Origin like 'JFK'
AND (DATE(FlightDate) = '2017-11-29' OR '2017-11-29' IS NULL)
AND DollarFare >= 900
AND DollarFare <= 1000
AND IsDomesticRoute = 1
AND AirportLocations.UberOrNot = 1
AND (CountryLanguage.Language like '%%' 
    OR CountryLanguage.Language like '%' 
    OR CountryLanguage.Language like '%' 
)); 

-- 4

SELECT * FROM JetBlue JOIN AirportLocations ON JetBlue.Destination = AirportLocations.Airport 
JOIN CountryLanguage ON AirportLocations.Country = CountryLanguage.Country
WHERE (Origin like 'LAX'
AND (DATE(FlightDate) = '2017-11-29' OR '2017-11-29' IS NULL)
AND DollarFare >= 750
AND DollarFare <= 1000
AND IsDomesticRoute = 1
AND AirportLocations.UberOrNot = 1
AND (CountryLanguage.Language like '%%' 
    OR CountryLanguage.Language like '%' 
    OR CountryLanguage.Language like '%' 
)); 

-- 5

SELECT * FROM JetBlue JOIN AirportLocations ON JetBlue.Destination = AirportLocations.Airport 
JOIN CountryLanguage ON AirportLocations.Country = CountryLanguage.Country
WHERE (Origin like 'LGA'
AND (DATE(FlightDate) = NULL OR NULL IS NULL)
AND DollarFare >= 0
AND DollarFare <= 1000
AND IsDomesticRoute = 1
AND AirportLocations.UberOrNot = 1
AND (CountryLanguage.Language like '%%' 
    OR CountryLanguage.Language like '%' 
    OR CountryLanguage.Language like '%' 
)); 

-- 6 

SELECT * FROM JetBlue JOIN AirportLocations ON JetBlue.Destination = AirportLocations.Airport 
JOIN CountryLanguage ON AirportLocations.Country = CountryLanguage.Country
WHERE (Origin like 'JFK'
AND (DATE(FlightDate) = NULL OR NULL IS NULL)
AND DollarFare >= 50
AND DollarFare <= 300
AND IsDomesticRoute = 0
AND AirportLocations.UberOrNot = 0
AND (CountryLanguage.Language like '%%' 
    OR CountryLanguage.Language like '%' 
    OR CountryLanguage.Language like '%' 
)); 

-- 7

SELECT * FROM JetBlue JOIN AirportLocations ON JetBlue.Destination = AirportLocations.Airport 
JOIN CountryLanguage ON AirportLocations.Country = CountryLanguage.Country
WHERE (Origin like 'LGA'
AND (DATE(FlightDate) = '2017-07-29' OR '2017-07-29' IS NULL)
AND DollarFare >= 200
AND DollarFare <= 700
AND IsDomesticRoute = 0
AND AirportLocations.UberOrNot = 0
AND (CountryLanguage.Language like '%%' 
    OR CountryLanguage.Language like '%' 
    OR CountryLanguage.Language like '%' 
)); 

-- 8 

SELECT * FROM JetBlue JOIN AirportLocations ON JetBlue.Destination = AirportLocations.Airport 
JOIN CountryLanguage ON AirportLocations.Country = CountryLanguage.Country
WHERE (Origin like 'SFO'
AND (DATE(FlightDate) = '2017-05-15' OR '2017-05-15' IS NULL)
AND DollarFare >= 50
AND DollarFare <= 750
AND IsDomesticRoute = 0
AND AirportLocations.UberOrNot = 0
AND (CountryLanguage.Language like '%%' 
    OR CountryLanguage.Language like '%' 
    OR CountryLanguage.Language like '%' 
)); 


-- 9

SELECT * FROM JetBlue JOIN AirportLocations ON JetBlue.Destination = AirportLocations.Airport 
JOIN CountryLanguage ON AirportLocations.Country = CountryLanguage.Country
WHERE (Origin like 'ORD'
AND (DATE(FlightDate) = '2017-05-15' OR '2017-05-15' IS NULL)
AND DollarFare >= 200
AND DollarFare <= 800
AND IsDomesticRoute = 0
AND AirportLocations.UberOrNot = 0
AND (CountryLanguage.Language like '%%' 
    OR CountryLanguage.Language like '%' 
    OR CountryLanguage.Language like '%' 
)); 


--10

SELECT * FROM JetBlue JOIN AirportLocations ON JetBlue.Destination = AirportLocations.Airport 
JOIN CountryLanguage ON AirportLocations.Country = CountryLanguage.Country
WHERE (Origin like 'ROC'
AND (DATE(FlightDate) = '2017-05-15' OR '2017-05-15' IS NULL)
AND DollarFare >= 0
AND DollarFare <= 1000
AND IsDomesticRoute = 0
AND AirportLocations.UberOrNot = 0
AND (CountryLanguage.Language like '%%' 
    OR CountryLanguage.Language like '%' 
    OR CountryLanguage.Language like '%' 
)); 
