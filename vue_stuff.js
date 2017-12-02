
function getAirports(){
    axios.get("origins/LAX/destinations/JFK").then(response => {
        // JSON responses are automatically parsed.
        console.log(response.data);
        this.posts = response.data;
    })
    .catch(e => {
        this.errors.push(e)
    })
//     $.ajax({url: "origins/LAX/destinations/JFK", success: function(result){
//         $("#results").html(result);
//     }});
}

var selOrigin= new Vue({
    el: "#select_origin" ,
    data: {
        origins: ["Stuff", "Stuff2"]
    },
    mounted() {
        getAirports();
    }
});