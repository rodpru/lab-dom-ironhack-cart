// ITERATION 1


function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;
  let subTotal = price * quantity;
  console.log(subTotal);
  product.querySelector('.subtotal span').innerHTML = `${subTotal}`;
  return subTotal;
};

function calculateAll() {

  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2 & ITERATION 3
  let total = 0;
  let totalSum = document.querySelector('#total-value span');
  let allCartSubtotal = document.getElementsByClassName('product');
  let allCartSubtotalArray = [...allCartSubtotal];
  
  allCartSubtotalArray.forEach((item) => {
    total += updateSubtotal(item);
    return totalSum.innerHTML = total;
  });

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let itemList = document.querySelector('#cart tbody');
  itemList.removeChild(target.parentNode.parentNode);

  // let parentRow = document.getElementsByTagName('tr');
  // let parentRowArray = [..parentRow];
  // parentRowArray.forEach((row) => {
  //   row.onclick = (event) => {
  //     event.currentTarget.remove();
  //   } 
  // });



  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
