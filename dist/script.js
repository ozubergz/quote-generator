 $(document).ready(function() {
   getQuote();
   
   var quote = "";
   var author = "";
   function getQuote(){
     
     var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
     
     $.getJSON(url, function(data){
       quote = data.quoteText;
       author = data.quoteAuthor;
       $(".quote").html('"' + data.quoteText + '"');
       if(data.quoteAuthor){
        $(".name").html('-' + data.quoteAuthor);
       } else {
         $(".name").html('-' + "Unknown");
         author = "Unknown";
       };
     });
     
   };
   
   $("#twitter").on("click", function(event){
      event.preventDefault();
      window.open('https://twitter.com/intent/tweet?text=' + quote + " Said by: " + author + ".");
   });
   
   $("#newQuote").on("click", function(event){
     event.preventDefault();
     getQuote();
   });
     
});