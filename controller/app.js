function getAirports(search_data){
    $.ajax({
        url: "http://localhost:3000/",
        type: "POST",
        dataType: "json",
        data: search_data,
        crossDomain: true,
        success: function(result){
            App.result = result;
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
        departure_date: "",
        weather: "",
        price_min: 0,
        price_max: 0,
        language: "English",
        isUber: false,
        isDomestic: false,
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
        }]
    },
    methods: {
        perform_search: function(){            
            this.departure_date = $("#departure_date").val();
            this.price_min = $("#price_min").val();
            this.price_max = $("#price_max").val();
            var flight_search = {
                origin: this.origin,
                departure_date:  this.departure_date,
                price_min: this.price_min,
                price_max: this.price_max,
                isDomestic: this.isDomestic ? 1 : 0,
                isUber: this.isUber ? 1 :0
            }
            console.log(flight_search);
            getAirports(flight_search);
        },
        price_low: function(){
            
        }
    },
});
