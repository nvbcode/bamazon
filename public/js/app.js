$(document).ready(function () {
  let cart = [];
  const render = function () {
    $('#mainTable').empty();
    $.ajax({
      method: 'GET',
      url: '/api/product'
    }).then(function (data) {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        $('#mainTable').append(`
        <tr scope ="row">
        <th scope ="row" id='product'>${data[i].product_name}</th>
        <td id='productNumber'>${data[i].id}</td>
        <td id = 'descrip'>${data[i].description}</td>
        <td id = 'price'>${data[i].price}</td>
        <td id = 'stock'>${data[i].stock_quantity}</td>
        <td class = 'qtyCart'>
         <form>
          <div class ='form-group'>
            <input type ="text" id = 'qty'>
          </div>
          </form>
        </td>
        <td>  <button class="btn btn-inline btn-success">Add to Cart</button> </td>
      </tr>`);
      }
    })
  };


  render();

  const checkout = function () {
    console.log(cart);
    for (let i = 0; i < cart.length; i++) {
      if (parseInt(cart[i].stock_inCart) <= parseInt(cart[i].stock_quantity)) {
        cart[i].stock_quantity = (cart[i].stock_quantity - cart[i].stock_inCart);
      } else if (parseInt(cart[i].stock_inCart) > parseInt(cart[i].stock_quantity)) {
        return alert('Not enough stock!');
      }
      console.warn(cart);
      $.ajax({
        method: "PUT",
        url: `/api/product/${cart[i].id}`,
        data: cart[i]
      }).then(function (res) {
        console.log("success!");
        console.log(res);

      })
    }
    location.reload();
  };


  const addModal = function () {
    $('#modalTable').empty();
    for (let i = 0; i < cart.length; i++)
      $('#modalTable').append(`
        <tr scope ="row">
        <th scope ="row">${cart[i].product_name}</th>
        <td>${cart[i].description}</td>
        <td>${cart[i].price}</td>
        <td>${cart[i].stock_inCart}</td>
      </tr>`);
    $('#everythingModal').modal('show');
  };

  $('.checkoutButton').on('click', checkout)
  $('#addCart').on('click', addModal)

  $('#mainTable').on('click', '.btn', function (event) {
    event.preventDefault();
    let inCart = $(this).parents('tr').find('#qty').val();
    let stockQty = $(this).parents('tr').find('#stock').text();
    let productName = $(this).parents('tr').find('#product').text();
    stockQty = parseInt(stockQty);
    if (inCart > stockQty) {
      return alert('Not enough in Stock')
    }

    const items = {
      id: $(this).parents('tr').find('#productNumber').text(),
      product_name: $(this).parents('tr').find('#product').text(),
      description: $(this).parents('tr').find('#descrip').text(),
      price: $(this).parents('tr').find('#price').text(),
      stock_quantity: $(this).parents('tr').find('#stock').text(),
      stock_inCart: $(this).parents('tr').find('#qty').val()

    }

    if (cart.length === 0) {
      return cart.push(items);

    }
    else if (cart.length !== 0) {
      for (let i = 0; i < cart.length; i++) {
        console.log('entered Loop');
        console.log(productName);
        if (cart[i].product_name === productName) {
          console.log('has prop');
          cart[i].stock_inCart = parseInt(cart[i].stock_inCart) + parseInt(items.stock_inCart);
          return
        }
      };
      console.log('Does not have prop');
      cart.push(items);
      console.log(cart);
      return
    }


  });

});