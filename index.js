// Write your solution in this file!
 
const employee ={
    name :"vista",
    StreetAddress :"oakridgestreet"

};

function updateEmployeeWithKeyAndValue(employee,key,value){

return {...employee,...{[key]:value}};
}

  function deleteFromEmployeeByKey(employee, key){
  delete employee[key];
    return employee;

  }

  function destructivelyDeleteFromEmployeeByKey(employee, key){
  delete employee[key];
  return employee;

  }

 function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
  employee[key]= value;
  return employee;
 }