console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

function addItem(item){
    if (basket.push(item) && isFull()){
        return true;
    }
    else if( basket.push(item) >= maxItems) {
        return false;
    }   
}
addItem();
//Not sure what I did to get the undefined...


console.log(addItem("kiwi"));
console.log(addItem("chocolate"));
console.log(addItem("hat"));

console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);

function listItems(){
    for (let listItems= 0; listItems < basket.length; listItems++){
        console.log(basket[listItems]);
    }
}
console.log(basket);
console.log(listItems());


function empty(){
    basket.splice(0, basket.length);
}
console.log('Empty', empty());
console.log(basket);


//Stretch 1:



//2.
function isFull(){
    if ( basket < maxItems){
        return false;
    }
    else{
        return true;
    }
}
//3.


/*
### Stretch Goals 
3. Update the required `addItem` function to:
  - Use the `isFull` function to prevent more than `maxItems` 
  from being added to the basket. 
  - If an item was added to the array, return `true`
  - If there was no room and the item could not be added 
  return `false`

__Using Array built-in functions!__

4. Create a function called `removeItem`. It should:
  - Take an input parameter for a string `item`
  - Use [Array.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) to find the index of the first matching item in the basket.
  - Use [Array.splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) to remove the first matching item from the basket.
  - Return the item removed or `null` if the item was not found
*/









// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
