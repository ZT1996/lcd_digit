/**
 * Created by zhaotong on 16-5-21.
 */
function printIcd(inputs) {
  var array = createIcdArray();
  printIcdNumber(inputs,array);
}

function printIcdNumber(inputs,array) {
  var str = inputs.toString();
  var arr = [];
  var newIcd = [];
  var newIcdNumber;

  for(var k = 0; k < str.length; k++){
    arr.push(str[k]);
  }
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < array.length; j++){
      if(arr[i] == j){
        newIcd.push(array[j]);
      }
    }
  }
  newIcdNumber = newIcd.join('');
  console.log(newIcdNumber);
}
