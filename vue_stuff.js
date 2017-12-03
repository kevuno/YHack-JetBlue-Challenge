
function getAirports(){
    // axios.get("/origins/LAX/destinations/JFK").then(response => {
    //     // JSON responses are automatically parsed.
    //     console.log(response.data);
    //     this.posts = response.data;
    // })
    // .catch(e => {
    //     this.errors.push(e)
    // })
    $.ajax({
        url: "http://localhost:3000/origins/LAX/destinations/JFK",
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
    // GET /someUrl
    // this.$http.get('localhost:3000/origins/LAX/destinations/JFK').then(response => {
    
    //     // get body data
    //     console.log(response);
    //     this.someData = response.body;
    
    // }, response => {
    //     // error callback
    // });
}

var App = new Vue({
    el: "#root" ,
    data: {
        origins: ["Stuff", "Stuff2"],
        trips: []
    },
    mounted() {
        this.trips = getAirports();

    },
    methods: {
        perform_search: function(){
            
        }
    }
});
