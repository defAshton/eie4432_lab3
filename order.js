function calculatePrice() {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    const selectElement = document.getElementById("drink");
    const selectedDrink = selectElement.value;
    let price = 0;
  
    radioButtons.forEach(function (radioButton) {
        radioButton.addEventListener('change', function () {
            updatePrice();
        });
    });
  
    function updatePrice() {
        const selectedRadioButton = document.querySelector('input[type="radio"]:checked');
  
        if (selectedRadioButton) {
            const selectedSize = selectedRadioButton.value;
  
            if (selectedDrink === "bubble-milktea" || selectedDrink === "iced-latte") {
                if (selectedSize === "small") {
                    price = 20;
                } else if (selectedSize === "medium") {
                    price = 25;
                } else if (selectedSize === "large") {
                    price = 30;
                }
            }
        } else {
            price = 0;
        }
  
        const priceElement = document.getElementById("price");
        priceElement.textContent = price.toFixed(2);
    }
  
    updatePrice();
  
    if (selectedDrink === "") {
        alert("Please select a drink");
        radioButtons.forEach(function (radioButton) {
            radioButton.checked = false;
        });
    }
}
  
function validateForm() {
    const name = document.getElementById("name").value;
    const drink = document.getElementById("drink").value;
    const sizeInput = document.querySelector('input[name="size-option"]:checked');
  
    if (name.trim() == "") {
        alert("Please enter your name.");
        return false;
    }
  
    if (drink == "please select") {
        alert("Please select a drink first.");
        return false;
    }
  
    if (!sizeInput) {
        alert("Please select a size.");
        return false;
    }
  
    return true;
}
  
function placeOrder(event) {
    event.preventDefault();
    const isValid = validateForm();
  
    if (isValid) {
        const name = document.getElementById("name").value;
        const drink = document.getElementById("drink").value;
        const sizeInput = document.querySelector('input[name="size-option"]:checked');
        const size = sizeInput.value;
  
        const orderData = [name, drink, size];
        const orderDataString = JSON.stringify(orderData);
        localStorage.setItem("order", orderDataString);
  
    if (drink === "third-drink") {
        alert("Sorry, the third drink is unavailable now!");
    }else{
        $('.message').removeClass('d-none');
        $('.message').html('<div class="alert alert-success" role="alert">'+'Order placed successfully! Thanks for your order.'+'</div>').fadeIn(500).delay(3000).fadeOut(500, function() {
            $(this).remove();
        });
        document.getElementById("order").reset();
        let price = 0;
        const priceElement = document.getElementById("price");
        priceElement.textContent = price.toFixed(2);
    } 
    }
}

$(document).ready(function() {
    var $image = $('#show');
    var $drinkInput = $('#drink');
    var $showimage = $('#show-image');
    

    $drinkInput.on('change',function(){
        var value = $(this).val();
        if (value !== 'please select') {
            $showimage.removeClass('d-none');
            if (value === 'bubble-milktea') {
                $image.attr('src', 'assets/bubble-milktea.png');
                $image.attr('alt', 'Bubble Milktea');
            } else if (value === 'iced-latte') {
                $image.attr('src', 'assets/iced-latte.jpg');
                $image.attr('alt', 'Iced Latte');
            } else if (value=== 'third-drink') {
                $image.attr('src', 'assets/caramel-macchiato.jpg');
                $image.attr('alt', 'Caramel Macchiato');
            }
        }else{
            $showimage.addClass('d-none');
        }
    });
});
