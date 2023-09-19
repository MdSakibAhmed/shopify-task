function openCartDrawer() {
  document.querySelector(".cart-drawer").classList.add("cart-drawer--active");
}

function closeCartDrawer() {
  document
    .querySelector(".cart-drawer")
    .classList.remove("cart-drawer--active");
}


const addToCartForms = document.querySelectorAll('form[action="/cart/add"]');

 addToCartForms.forEach((form) => {
  form.addEventListener("submit", async (event) => {
    // Prevent normal submission
    event.preventDefault();
    await fetch("/cart/add", {
      method: "post",
      body: new FormData(form),
    });

    openCartDrawer()
    
  
  })
 })


    
    document.querySelectorAll(".cart-drawer-header-right-close, .cart-drawer")
    .forEach((el) => {
      el.addEventListener("click", () => {
        console.log("closing drawer");
        closeCartDrawer();
      });
    });

    
document.querySelector("clear-all").addEventListener("click",async()=> {
  await fetch("/cart/clear", {
      method: "post",
  
    });
  
})

                        