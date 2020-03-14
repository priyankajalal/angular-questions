$(document).ready(function() {

    $("#firstName").keyup(function(e) {
        console.log(e);
        var fisrtNameUpper = $("#firstName").val().toUpperCase();
        $("#firstName").val(fisrtNameUpper);

    });

    $("#btn1").click(function() {
        alert("hi");
    });

    $("#btn2").click(function() {
        $("h1").css("background-color", "blue");
        $("ul li").css("color", "green");
        document.getElementById("p1demo").style.color = "red";

    });

    $("#btn1").click(function() {
        $("ul").before("<h2>My favourite dogs!!</h2>")
        $("ul").after("<h2>All dogs are adorable!!</h2>")
        $("#p1").text("Welcome to this fun jQuery Tutorial")
    });

    $("#btn3").click(function() {
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        $("#appendP1").text(firstName + lastName);
        $("#appendP1").html("<h1>vinod</h1>");

    });

    $("#bthChgImage").click(function() {
        $(".puppers img").attr("border", "5px solid black")
        $("#goldie1").attr("src", "../images/puppie/husky.jpeg")
        $("#goldie1").addClass("imgStylo");
        $("input").datepicker()
    });

});