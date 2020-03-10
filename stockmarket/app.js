document.addEventListener('keydown', function(event) {
    if(event.key == "Enter"){
        var stock1worth = parseFloat(document.getElementById("stock1").value) * parseFloat(document.getElementById("stock1amt").value);
        var stock2worth = parseFloat(document.getElementById("stock2").value) * parseFloat(document.getElementById("stock2amt").value);
        var stock3worth = parseFloat(document.getElementById("stock3").value) * parseFloat(document.getElementById("stock3amt").value);
        var stock4worth = parseFloat(document.getElementById("stock4").value) * parseFloat(document.getElementById("stock4amt").value);

        document.getElementById("stock1worth").innerHTML = stock1worth;
        document.getElementById("stock2worth").innerHTML = stock2worth;
        document.getElementById("stock3worth").innerHTML = stock3worth;
        document.getElementById("stock4worth").innerHTML = stock4worth;

        var total = stock1worth + stock2worth  + stock3worth + stock4worth;
        document.getElementById("totalvalue").innerHTML = total;
        document.getElementById("lossorgain").innerHTML = total - 100000;

        document.getElementById("dowchange").innerHTML = parseFloat(document.getElementById("dowstart").value) - parseFloat(document.getElementById("dowmarketday").value)
        document.getElementById("naschange").innerHTML = parseFloat(docuemnt.getElementById("nasstart").value) - parseFloat(document.getElementById("nasmarketday").value)
        
    }
});