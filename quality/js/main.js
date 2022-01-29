
var amazon_url = "http://www.amazon.com/exec/obidos/external-search?mode=blended&tag=quality06e7-20&keyword=";


$( document ).ready(function() {

    changeAmazonUrl();
});

function urlParam(name) 
{
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    // TODO: catch error when no variable is passed
    return results[1] || 0;
}

function changeAmazonUrl() 
{

    var query = urlParam('q');
    console.log( "ready!" );
    console.log( query );

    amazon_url += query;
    
    console.log( amazon_url );

    // $("a#amazon_link").attr("href", amazon_url)

    document.location = amazon_url;
}