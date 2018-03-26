$(document).ready(function(){
    var request = new XMLHttpRequest();
    var requestURL = 'https://raw.githubusercontent.com/4skinSkywalker/Database-Quotes-JSON/master/quotes.json';
    request.open('GET', requestURL);

    request.onload = function(){
        var data = JSON.parse(request.responseText);
        insertHTML(data);
    }
    request.send();

    $("#button").click(function(){
        $( "#quote-block" ).empty();
        var request = new XMLHttpRequest();
        var requestURL = 'https://raw.githubusercontent.com/4skinSkywalker/Database-Quotes-JSON/master/quotes.json';
        request.open('GET', requestURL);

        request.onload = function(){
            var data = JSON.parse(request.responseText);
            insertHTML(data);
        }
        request.send();
        
    });
    
    
    function insertHTML(data){
        var index = Math.floor((Math.random() * 1640) + 1);
        $("#quote-block").html(data[index].quoteText);
        $("#quoted-man").html(data[index].quoteAuthor);
    }
});


