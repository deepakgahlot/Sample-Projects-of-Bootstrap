$('.item') 
    .bind('dragstart', function (evt) { 
        evt.dataTransfer.setData('text', this.id); 
        $('h2').fadeIn('fast'); 
    }) 
    .hover( 
        function () { $('div', this).fadeIn(); },  
        function () { $('div', this).fadeOut(); } 
    );$('#cart') 
    .bind('dragover', function (evt) { 
        evt.preventDefault(); 
    }) 
    .bind('dragenter', function (evt) { 
        evt.preventDefault(); 
    }) 
    .bind('drop', function (evt) { 
  var id = evt.dataTransfer.getData('text'), 
    item = $('#' + id), 
    cartList = $("#cart ul"), 
    total = $("#total span"), 
    price = $('p:eq(1) span', item).text(), 
prevCartItem = null, 
    notInCart = (function () { 
        var lis = $('li', cartList), 
            len = lis.length, 
            i; 
  
        for (i = 0; i < len; i++ ) { 
            var temp = $(lis[i]); 
            if (temp.data("id") === id) { 
                prevCartItem = temp; 
                return false; 
            } 
        } 
        return true; 
    } ()), 
    quantLeftEl, quantBoughtEl, quantLeft;

$("h2").fadeOut('fast'); 
  
if (notInCart) { 
    prevCartItem = $('<li />', { 
        text : $('p:first', item).text(), 
        data : { id : id } 
    }).prepend($('<span />', { 
        'class' : 'quantity', 
        text : '0'
    })).prepend($('<span />', { 
        'class' : 'price', 
        text : price 
    })).appendTo(cartList); 
}
//<li><span class="p" /><span class="q"/></li>
quantLeftEl = $('p:last span', item); 
quantLeft   = parseInt(quantLeftEl.text(), 10) - 1; 
quantLeftEl.text(quantLeft); 
quantBoughtEl = $('.quantity', prevCartItem); 
quantBoughtEl.text(parseInt(quantBoughtEl.text(), 10) + 1); 
  
if (quantLeft === 0) { 
    item.fadeOut('fast').remove(); 
} 
  
total.text((parseFloat(total.text(), 10) + parseFloat(price.split('$')[1])).toFixed(2)); 
  
evt.stopPropagation(); 
return false;
    });

    