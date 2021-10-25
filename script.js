const color=['#FFE4E1','#FFF5EE','#F5F5F5','#FAF0E6','#FFFFE0','#E6E6FA','#F0F8FF','pink'];
var url="https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";
var rand =Math.floor(Math.random()*color.length); 

var qouteText=""
var qouteAuthor=""

function changeColor(){
	
	$('#quote-box').css('background-color',color[rand]);
}

var getQuote= function(data){
    
    var quot="https://twitter.com/intent/tweet?text=" + data.quoteText+data.quoteAuthor;
   qouteText=data.quoteText
   qouteAuthor=data.quoteAuthor
       
    $('#text').text(qouteText);
	$('#text').slideUp();
	$('#text').slideDown();
    $('#author').text(qouteAuthor);

	
};

$(document).ready(function(){
	
    $.getJSON(url,getQuote,'jsonp');
  changeColor()
});

$("#new-quote").on("click",function(){
	
  $.getJSON(url,getQuote,'jsonp');
  changeColor()

});


