function makeProduct(type, color, price, bought){
	return{
		type,
		color,
		price,
		bought,
	}
}
let product1 = makeProduct('microwave', 'white', 4000, 150)
let product2 = makeProduct('washing mashine', 'seashell', 45000, 70)
let product3 = makeProduct('tv', 'black', 65000, 40)
let product4 = makeProduct('toilet', 'Golden', 9999999, 0)
//console.log(product1, product2, product3)
let cart = [{type:'microwave', color:'white', price:4000, bought:150},{type:'washing machine', color:'seashell', price:45000, bought:70},{type:'tv', color:'black', price:65000, bought:40}, {type: 'toilet', color: 'golden', price:9999999, bought:0}]
let name = 'tv'
for(let i = 0; i < 	cart.length; i++){
	if(name == cart[i].type){
	console.log(cart[i])
}
}
