$(function() {

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        let addBurger = {
            burger: $("#newBurg").val().trim(),
            about: $("#burgerdisc").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: addBurger
        }).then(function() {
            console.log("new item");
            location.reload();
        });
    });

    $("#order").on("click", function(event) {
        event.preventDefault();

        let id = $(this).data("id");
        let eaten = {
            devoured: 1
        };

        
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: eaten 
        }).then(function() {
            console.log("Burger devoured");
            location.reload();
        });
    });

    

})