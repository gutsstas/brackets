// module.exports = function check(str, bracketsConfig) {
//   var stack= [];
//   var stack2= [];
//   for(var i = 0; i < str.length; i++){
//     if(str[i] == "(" || str[i] == "{" || str[i] == "[" ) stack.push(str[i]);
//
//   //  for(var y = 0; i < str.length; y++){
//   //    if(str[y] == "|") stack2.push(str[y]);
//   //  }
//   //
//   //
//   // for (let j = 0; j < stack2.length; j=j + 2 ){
//   //   stack.push(stack2[j]);
//   //   if (stack2.length % 2 !== 0) return false;
//   //
//   //
//   // }
//
//
//    if (str[i] == ")" && stack.pop() != "(" ) return false;
//    if (str[i] == "}" && stack.pop() != "{" ) return false;
//    if (str[i] == "]" && stack.pop() != "[" ) return false;
//
//
// }
//  return !stack.length;
//
//  }
module.exports = function check(str, bracketsConfig) {
     var stack = str.split('');
     for(var i = 0; i < stack.length; i++){
       for(var j = 0; j < bracketsConfig.length; j++){
         if(stack[i] == bracketsConfig[j][0] && stack[i+1] == bracketsConfig[j][1]){
           stack.splice(i,2);
           if (stack.length == 0){
               return true;
           }
           i=-1;
         }
       }
     }
     return false;
}
