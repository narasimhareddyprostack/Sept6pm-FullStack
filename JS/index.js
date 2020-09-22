var emp_No = 101;
console.log(emp_No);

var emp_Name = "Narasimha";
console.log(emp_Name);

/*
String Literals
usefull - loggining 

`   ${  }      `
*/

var data = "My Self Narasimha and My Employee Id : 101";
var emp_Data = `My Self ${emp_Name} and My Employee Id : ${emp_No}`;
console.log(emp_Data);

var emp_Array = ['Hyd', 'Chennai', 'Bangalore','loc1','loc2','loc3']
//                0        1          2          3      4      5
console.log(emp_Array)
console.log("Before Reverse ",emp_Array[3])

//console.log(emp_Array.pop())
//console.log(emp_Array)
console.log(emp_Array.reverse())
console.log(emp_Array[3])
