$(document).ready(function () {
  let cart = [];
  const render = function () {
    $.ajax({
      method: 'GET',
      url: '/api/product'
    }).then(function (data) {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        $('.productsList').append(`
        
        <div class='row text-center d-flex align-items-center'>
          <div class='col-sm-2'>
            <form>
              <div class='form-group'>
                  <input class="form-control" type='text'id="qty">
              </div>
            </form>
          </div>

          <div class='text-center col-sm-2' id='product'>
            <h5>${data[i].product_name}</h5>
          </div>

          <div class='text-center col-sm-2' id='descrip'>
              <h5>${data[i].description}</h5>
          </div>

          <div class='text-center col-sm-2' id='stock'>
              <h5>${data[i].stock_quantity}</h5>
          </div>

          <div class='text-center col-sm-2' id='price'>
              <h5>${data[i].price}</h5>
          </div>

          <div class='text-center col-sm-2' id='Add'>
              <button class="btn btn-inline btn-success px-1 mx-0">Add to Cart</button>
          </div>

      </div>
  <hr>`)
      }
    })
  };

  // const qtyValue = function(){
  //   $(document).load(), 'button', clickHandler)
  // };
  render();

  // const clickHandler = function (event) {
  //   event.preventDefault();
  //   let btnValue = $(this).val().trim();
  //   console.log(btnValue);
  //   let qtyValue = $(`'#${btnValue}'`).val();
  //   console.log(qtyValue);
  // };

  const checkout = function () {
    console.warn("In checkout")
    $.ajax({
      method:"PUT",
      url:"/api/product",
      data: cart
    }).then(function(res){
      console.log("success!");
    })
  }

  const addModal = function () {
    $('.modalTable').empty();
    for (let i = 0; i < cart.length; i++)
      $('#modalTable').append(`
        <tr scope ="row">
        <th scope ="row">${cart[i].product_name}</th>
        <td>${cart[i].description}</td>
        <td>${cart[i].price}</td>
        <td>${cart[i].stock_quantity}</td>
      </tr>`);
    $('#everythingModal').modal('show');
  };

  $('.checkoutButton').on('click', checkout)
  $('#addCart').on('click', addModal)

  $('.productsList').on('click', 'button', function (event) {
    event.preventDefault();
    const items = {
      uid: $(this).parents('.row').find('#product').val(),
      product_name: $(this).parents('.row').find('#product').text(),
      description: $(this).parents('.row').find('#descrip').text(),
      price: $(this).parents('.row').find('#stock').text(),
      stock_quantity: $(this).parents('.row').find('#qty').val()

    }
    cart.push(items);
    console.log(cart);
  });

});