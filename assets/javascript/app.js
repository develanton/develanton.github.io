// document ready function
$(document).ready(function () {

//Toggle responsive burger functionality
        

        $(document.body).on("click",".burger",function(){

            
            console.log('clickers');
        });

    






    // Global variables 
    var baseGifs = ["Star Wars", "Lord of the Rings", "Harry Potter", "Back to the Future"];
    var butts = $("#butts");
    var search = $("#search");
    var count = -1;

    // loop to display each of the arrays strings as buttons
    var wordloop = baseGifs.forEach(baseGifs => {
        butts.append("<button class='button' id='butts'>" + baseGifs + "</a>");

    });

    // add item to topics array
    $("#searchButt").on("click", function (event) {
        event.preventDefault();
        var userInput = $("#search").val().trim();

        butts.append("<button class='button' id='butts'>" + userInput + "</button>");

        console.log(userInput);

        $("#search").val("");

    })

    // console logging a proof that it works up till this point before it calls the API
    console.log("it's alive!");


    // clicking on the topic buttons to call the API's data to display content
    $(document.body).on("click", "#butts", function (event) {

        var term = event.target.innerText;
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=aOBNvDAUoSCFk4afN29oBolqLxw9lcaC&q=" + term + "&limit=10&offset=0&rating=R&lang=en"

        console.log("Term: " + term);

        // ajax call to API
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            var result = response.data;
            console.log(result);

            //looping through the API's results        
            for (let i = 0; i < result.length; i++) {

                count++;

                var ratings = ("Rating:" + result[i].rating);
                var divers = $("#gifDisplay").append("<div><strong>Rating: </strong>" + result[i].rating + "</div>");
                var img = $("<img>")

                img.attr("src", result[i].images.fixed_width.url);
                img.attr("data-still", result[i].images.fixed_width_still.url);
                img.attr("data-animate", result[i].images.fixed_width.url);
                img.attr("data-state", "animate");
                img.attr("class", "gif");
                img.attr("num", count);

                divers.append(img);



            };

            $(document.body).unbind().on("click", ".gif", function () {

                console.log(this);


                var state = $(this).attr("data-state");

                if (state === "animate") {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");

                } else {
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");
                }


                console.log(this);
                console.log(state);


            })

        })

    })






});












