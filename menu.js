$(document).ready(function(){
    $.get("assets/drink-menu.json", function(data){
        data.forEach(function(drink, index) {
            displayDrinkCard(drink, index);
        });
    })
    .fail(function(error){
        $('.message').removeClass('d-none');
        $('.message').html('<div class="alert alert-danger" role="alert">'+'Failed to fetch drink menu. Please try again later.'+'</div>').fadeIn(500).delay(3000).fadeOut(500, function() {
            $(this).remove();
        });
    });
});

function displayDrinkCard(drink,index) {
    var cardHtml = `
        <div class="card" style="width: 13rem;">
        <img src="${drink.image}" alt="img">
        <h3>${drink.name}</h3>
        <div style="text-align: left;"><p class="bg-success" style="color:white;max-width:fit-content;">${drink.type}</p></div>
        <p>Price: $${drink.price}</p>
      </div>
    `;

    var targetColumn = $(`#drink-menu .row .col:nth-child(${index + 1})`);
    targetColumn.append(cardHtml);
  }