$(function(){
    $('button').on("click",function(){
        $.ajax({
            dataType:"json",
            method: 'GET',
            url: `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=Zk9OewmLcmPgTvOF`
        })
        
        .done(function(results){
            $.each(results, function(index, value){
            
            })
        })
        
})
})