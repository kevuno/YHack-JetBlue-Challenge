function getAirports(search_data){
    var origin = search_data.origin;
    var destination = search_data.destination;
    $.ajax({
        url: "http://localhost:3000/origins/"+origin+"/destinations/"+destination,
        type: "GET",
        dataType: "json",
        crossDomain: true,
        success: function(result){
            App.trips = result;
            console.log(result);
            $("#results").html(result);
        },
        error: function (xhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
}

var App = new Vue({
    el: "#main_container" ,
    data: {
        origin: "",
        results: [{
            Airport:"JFK",
            City: "New York City",
            Country: "United States",
            DailyCost: 44,
            Destination:"JFK",
            DollarFare: 203,
            DollarTax: 27,
            FareType:"LOWEST",
            FlightDate: "2017-11-30T10:11:00.000Z",
            FlightType: "NONSTOP",
            IsDomesticRoute: 1,
            IsPrivateFare: 0,
            Origin: "ROC",
            PointFare: 0,
            PointsTax:0,
            State: "New York",
            Temperature: 29,
            UberOrNot: 1,
        },{
            Airport:"JFK",
            City: "New York City",
            Country: "United States",
            DailyCost: 44,
            Destination:"JFK",
            DollarFare: 203,
            DollarTax: 27,
            FareType:"LOWEST",
            FlightDate: "2017-11-30T10:11:00.000Z",
            FlightType: "NONSTOP",
            IsDomesticRoute: 1,
            IsPrivateFare: 0,
            Origin: "ROC",
            PointFare: 0,
            PointsTax:0,
            State: "New York",
            Temperature: 29,
            UberOrNot: 1,
        }]
    },
    methods: {
        perform_search: function(){
            var flight_search = {
                origin: "ROC",
                destination:  "ANYBRO",
                price_low: "",
                price_high: "",
                isDomesticRoute: 1
            }
            getAirports(flight_search);
        }
    }
});
