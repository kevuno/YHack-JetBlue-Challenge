--Basic Search Queries for Mysql

-- Find Date
SELECT Origin, Destination, FlightDate, FlightType, DollarFare, DollarTax, DollarFare + DollarTax as "FinalFare", state.state_table 
FROM JetBlue JOIN state_table ON JetBlue.Destination = state_table.airport  WHERE (Origin like Query
AND Destination like Query
AND DollarFare <= Query
AND DollarFare >= Query
AND IsDomesticRoute = 1
); 

-- Find Price
SELECT Origin, Destination, FlightDate, FlightType, DollarFare, DollarTax, DollarFare + DollarTax as "FinalFare", state.state_table
FROM JetBlue JOIN state_table ON JetBlue.Destination = state_table.airport  WHERE (Origin like Query
AND Destination like Query
AND FlightDate = Query
AND IsDomesticRoute = 1
); 

-- Find Dest
SELECT Origin, Destination, FlightDate, FlightType, DollarFare, DollarTax, DollarFare + DollarTax as "FinalFare", state.state_table
FROM JetBlue JOIN state_table ON JetBlue.Destination = state_table.airport WHERE (Origin like Query
AND FlightDate = Query
AND DollarFare <= Query
AND DollarFare >= Query
AND IsDomesticRoute = 1
); 

