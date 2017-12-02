var selOrigin= new Vue({
    el: "select_origin" ,
        data: {
            origins: ["JFK", "ROC", "LAX"]
        }
    });


var selDest= new Vue({
    el: "select_destination" ,
        data: {
            
        }
    });

var selDate= new Vue({
    el: "select_date" ,
        data: {
            
        }
    });


var selPrice= new Vue({
    el: "select_price" ,
        data: {

        }
    });

var search = new Vue({
    el: "search_flight" ,
    methods: {
        preform_search: function() {
            
        }
    }
});
