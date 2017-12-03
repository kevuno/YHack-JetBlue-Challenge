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
        origin: ""
        
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
