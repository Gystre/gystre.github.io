var current = "plains";

$(document).ready(function () {
    $("input").keyup(function (event) {
        var total = 0;
        if (current == "plains") {
            var a = $("#azuriteAmount").val() * 50;
            $("#azuriteWorth").html(a);
            var d = $("#devarAmount").val() * 50;
            $("#devarWorth").html(d);
            var v = $("#veridosAmount").val() * 75;
            $("#veridosWorth").html(v);
            var c = $("#crimzianAmount").val() * 100;
            $("#crimzianWorth").html(c);
            var s = $("#sentirumAmount").val() * 400;
            $("#sentirumWorth").html(s);
            var n = $("#nythAmount").val() * 400;
            $("#nythWorth").html(n);

            total = a + d + v + c + s + n;
        } else {
            var p = $("#phasminAmount").val() * 50;
            $("#phasminWorth").html(p);
            var n = $("#noctrulAmount").val() * 50;
            $("#noctrulWorth").html(n);
            var g = $("#gobliteAmount").val() * 200;
            $("#gobliteWorth").html(g);
            var a = $("#amarastAmount").val() * 500;
            $("#amarastWorth").html(a);
            var z = $("#zodianAmount").val() * 1000;
            $("#zodianWorth").html(z);
            var t = $("#thystAmount").val() * 1000;
            $("#thystWorth").html(t);

            total = p + n + g + a + z + t;
        }

        var color = "";
        if (total >= 26000) {
            color = "green";
        } else {
            color = "red";
        }
        $("#totalStanding").css("color", color);
        $("#totalStanding").html(total);
    });

    $("#selector").change(function (event) {
        var option = $(this).val();

        if (option == "plains") {
            //invis fortuna, show plains
            $("#fortuna").addClass("invisible");
            $("#plains").removeClass();
        } else {
            $("#plains").addClass("invisible");
            $("#fortuna").removeClass();
        }
        current = option;
    });

    $("#clear").click(function () {
        $("input").val("");
        $("#totalStanding").html("");
        $("#plains span").html("");
        $("#fortuna span").html("");
    });
});
