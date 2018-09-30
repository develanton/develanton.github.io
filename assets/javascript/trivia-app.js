$(document).ready(function () {
    console.log("ready");


    // Global Variables
    var timers = $("#running-time");
    var correct = 0;
    var wrong = 0;
    var valu;
    var count = 0;



    // Start trivia button, from first slide to second
    var selec = $("#starter").on("click", function () {

        var count = 10;
        var intId = setInterval(counter, 1000);

        $("#topsec").attr("style", "display:none");
        $("#trivia").attr("style", "display");

        starttime();

        // countdown starter function
        function counter() {

            count--;
            console.log(count);
            var runningSec = $("#running-time").text(count);
            if (count < 1) {
                clearInterval(intId);
            }
        }

    })

    // timer for the trivia

    function starttime() {
        timers = setTimeout(swap, 10000);
    }


    // Radio clicked evaluation function
    function eval() {

        var checker = document.getElementsByName("group1");
        var checker2 = document.getElementsByName("group2");
        var checker3 = document.getElementsByName("group3");
        var checker4 = document.getElementsByName("group4");
        var len = checker.length;


        for (var i = 0; i < len; i++) {
            if (checker[i].checked) {
                valu = checker[i].value;
                if (valu !== "correct") {
                    wrong++;
                    $("#wrongs").text(wrong);
                    console.log("wrong " + valu);
                } else {
                    correct++;
                    $("#corrects").text(correct);
                    console.log(" correct " + valu);
                }
            }
        }
        for (var i = 0; i < len; i++) {
            if (checker2[i].checked) {
                if (valu !== "correct") {
                    wrong++;
                    $("#wrongs").text(wrong);
                    console.log("wrong " + valu);
                } else {
                    correct++;
                    $("#corrects").text(correct);
                    console.log(" correct " + valu);
                }
            }
        }
        for (var i = 0; i < len; i++) {
            if (checker3[i].checked) {
                valu = checker[i].value;
                if (valu !== "correct") {
                    wrong++;
                    $("#wrongs").text(wrong);
                    console.log("wrong " + valu);
                } else {
                    correct++;
                    $("#corrects").text(correct);
                    console.log(" correct " + valu);
                }
            }
        } for (var i = 0; i < len; i++) {
            if (checker4[i].checked) {
                valu = checker[i].value;
                if (valu !== "correct") {
                    wrong++;
                    $("#wrongs").text(wrong);
                    console.log("wrong " + valu);
                } else {
                    correct++;
                    $("#corrects").text(correct);
                    console.log(" correct " + valu);
                }
            }
        }
    }



    // Call evalution fuction and swap from triva slide to score slide
    function swap() {
        eval();
        $("#trivia").attr("style", "display:none");
        $("#bottomsec").attr("style", "display");


    }



    // Restart function
    var reStarter = $("#re-starter").on("click", function () {

        $("#trivia").attr("style", "display:none");
        $("#bottomsec").attr("style", "display:none");
        $("#topsec").attr("style", "display");
    
    });

});


