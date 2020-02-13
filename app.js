
// Menu function
$(function() {
    $("#select").on("change", function(event) {
      const $selected = $(event.target).val();
      console.log(`You have selected ${$selected}`)
     $.ajax({
        method: 'GET',
        url: `https://api.nytimes.com/svc/topstories/v2/us.json?api-key=4hmoxMS85CtrYORgACww50nTW7xoRIKr`
    
    }).done(function(results){
        $.each(results,function(index,value){

            console.log(results)
             for(let i=0;i<results.lenght;i++){
          console.log(results[i])
          $('.choose').append(`${results}`)
          }
        })
         
    })
})
})

       
        






// //API PULL

// $(document).ready(function() {
//   $(".loader").hide();
//   $(".posts").on("change", function(event) {
//     $("ul").empty();
//     $(".loader").show();
//     $change = $(this).val();
//     $.getJSON(
//       `https://api.nytimes.com/svc/topstories/v2/${$change}.json?api-key=YTMJtmBtB00ippV8QvL3cjmtA9aRZvIf`
//     ).done(function(data) {
//       let counter = 0;

//       $.each(data.results, function(key, value) {
//         // console.log(value); Debugging
//         let multimedia = value.multimedia;
//         if (multimedia.length === 0) {
//           return;
//         }
//         let description = value.abstract;
//         let articleURL = value.url;
//         $.each(multimedia, (key, value) => {
//           if (value.format === "superJumbo") {
//             let imageURL = value.url;
//             let listItem = `<li><a href = "${articleURL}" target="_blank">
//                     <img src = "${imageURL}"><p>${description}</p></a></li>`;

//             $("ul").append(listItem);
//             $("footer").css({"position":"relative", "padding-bottom": "30px"});
//             $("header").css("padding-top", "35px")

//             $(".loader").hide();
//           } else {
//             return;
//           }
//         });
//         counter++;

//         return counter !== 12;


//     })
// // .fail (function() {
// //             $("ul").append(`<li>Sorry, there was a problem, please try again.</li>`)
// //       });
//     });
//   });
// });


  
