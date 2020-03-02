
// Menu function
$(function () {
  $("#select").on("change", function (event) {
    const $selected = $(event.target).val();

    const section = $("#sections").val();
    $("header").addClass("mover");
    $(".loader-gif").css("display", "block");
    $("#multimedias").empty();
    $(".loader-gif").addClass("loader-gif2");
    //console.log(`You have selected ${$selected}`)
    $.ajax({
      method: 'GET',
      url: `https://api.nytimes.com/svc/topstories/v2/${$selected}.json?api-key=4hmoxMS85CtrYORgACww50nTW7xoRIKr`

    }).done(function ({ results }) {
      $(".loader-gif").fadeOut(1250);
      console.log(results)
      $.each(results, function (index, value) {
      });

      for (i = 0; i < 12; i++) {
        let abstract = results[i].abstract;
        let url = results[i].url;

        let image = results[i].multimedia[0].url
        console.log(image)
        console.log(abstract);
        console.log(url);
        setTimeout(() => {
          $("#multimedias").append(
            `
        <a  class="link" href="${url}">
        <figure>
       
      <img src="${image}">
      <p class="abstract">${abstract}</p>
      </figure>
            </a> 
        `
          );
        }, 1500);

      }




    })

  })
})


