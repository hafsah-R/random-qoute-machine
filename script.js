const color=['#FFE4E1','#FFF5EE','#F5F5F5','#FAF0E6','#FFFFE0','#E6E6FA','#F0F8FF','pink'];
var url="http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";

var rand =Math.floor(Math.random()*color.length); 

var qouteText=""
var qouteAuthor=""

function changeColor(){
	
	$('#quote-box').css('background-color',color[rand]);
}

var getQuote= function(data){
    
    var quot="https://twitter.com/intent/tweet?text=" + data.quoteText+data.quoteAuthor;
 
       
    $('#text').text(data.quoteText);
	$('#text').slideUp();
	$('#text').slideDown();
    $('#author').text(data.quoteAuthor);

	
};

$(document).ready(function(){
	
    $.getJSON(url,getQuote,'jsonp');
  changeColor()
});

$("#new-quote").on("click",function(){
	
  $.getJSON(url,getQuote,'jsonp');
  changeColor()

});


