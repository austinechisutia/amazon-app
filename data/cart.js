export const cart = [{
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2
  },
  {
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 1
  },
  {
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 1
  }
];

export function shoppingCart(productId){
    let matchingItem;
      cart.forEach((cartItem)=>{
        if(cartItem.productId === productId){
          matchingItem = cartItem;
        } 
        
      });
      if(matchingItem){
        matchingItem.quantity++;
      } else {
        cart.push({
          productId: productId,
          quantity: 1
        })
      }
  }