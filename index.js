const price = 100; // цена товара
const quantity = 3; // количество
const discount = quantity > 2 ? 0.1 : 0; // скидка 10% если >2
const total = price * quantity * (1 - discount);

if(total > -1){
    console.log(`Итого: ${total} руб.`);
}
