
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
        	console.log("sucess");
            $("#results").html(result);
        },
        error: function (xhr, textStatus, errorThrown) {
        	console.log("fail");
            console.log(errorThrown);
        }
    });
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