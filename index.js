// Write your solution in this file!

// updateEmployeeWithKeyAndValue
const employee = {
    name: "Ahmed Ali",
    streetAddress:"06560 Yenimahalle Ankara"
};

function updateEmployeeWithKeyAndValue(Object, key, value){
return {...Object,[key]:value}
}

const newEmployee = updateEmployeeWithKeyAndValue(employee, 'numer', "0549112669");
console.log(employee);
console.log(newEmployee);

// destructivelyUpdateEmployeeWithKeyAndValue
function  destructivelyUpdateEmployeeWithKeyAndValue(Object, key, value){
     Object[key]=value;
     return Object;
}

const destructiveEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'numer', "0549112669");
console.log(employee);

// deleteFromEmployeeByKey
function deleteFromEmployeeByKey (Object, key){
    const n = {...Object};
    delete n[key];
    return n;
}
const nondestructive = deleteFromEmployeeByKey (employee, 'streetAddress');
console.log(nondestructive);

// destructivelyDeleteFromEmployeeByKey

function destructivelyDeleteFromEmployeeByKey (Object, key){
delete Object[key];
  return Object;
}
destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress');
console.log(employee);