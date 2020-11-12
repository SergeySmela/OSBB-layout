// function my(str) {
//     let arr = [];
//     for (let i = 0; i < str.length - 1; i++) {
//         arr[i] = str.slice(0, i) + str.slice(i, i + 1) + '.' + str.slice(i+1);
//     }
//     arr.unshift(str);
//     arr.push(str.split('').join('.'));
    
//     return arr;
// }

// console.log(my('abcd'));

// function myFunc(str) {
//     const variants = [];
//     for (let i = 0; i < 2 ** (str.length - 1); i++) {
//       let variant = str[0] || '';
//       [...i.toString(2).padStart(str.length - 1, '0')].forEach((el, i) => {
//         variant += ((el == 0) ? '' : '.') + (str[i + 1] || '');
//       });
//       variants.push(variant);
//       console.log([...i.toString(2).padStart(str.length - 1, '0')]);
//     }
//     return variants;
// }
   
//   console.log(myFunc('abcd'));

// function recurs(str) {
 
//   let arr = [];
  
//   if (str.length == 0) {
//     return [str]
//   }
//   else {
//     str = '.' + str.slice(-1)
//     arr.push(str + '.')
    
//     return recurs(str);
//   }

//   // return arr
// }

// console.log('[recurs]', recurs('abc'));
 

// let ar = [
//   1, 6, 7, 7, 8, 10, 12, 13, 14, 19
// ];

// function qwerty(arr, d) {
//   var result = [];

//   for(var i = 0; i < arr.length; i++) {
//    var elem = arr[i];  

//     for(var j = i + 1; j < arr.length; j++) {
//       var item = arr[j];

//       if ((item - elem == d)) {

//         for (let index = j + 1; index < arr.length; index++) {
//           const element = arr[index];
  
//           if((element - item == d)  ) {
              
//             result.push(elem + ':' + item + ':' + element)
//           };  
          
//         }
//       }     
      
//    }
// }

// return result;
// }

// console.log('[qwerty(ar)]', qwerty(ar, 3));

function recConcat(str) { 
  console.log(str);

  if (str.length <= 2){
      let el1 = str[0] + str[1];
      let el2 = str[0] + '.' + str[1];
      var baseArray = [el1, el2];
      console.log("End of recursion", baseArray);
      return baseArray;
  }

  var items = recConcat(str.substring(1));

  let variants = [];
items.forEach(element => {
      variants.push(str[0] + element);
      variants.push(str[0] + '.' + element);
  });
  return variants;
}

// console.log(recConcat("abcde"));

var a = 3; 
a = func(a);
function func(a) {
  a++
};
console.log('[a]', a);