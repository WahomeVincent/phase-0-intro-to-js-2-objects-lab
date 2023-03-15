// Write your solution in this file!

const employee = {};
 
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      name: 'Sam',
      streetAddress: '11 Broadway'
    };
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    const { [key]: deletedValue, ...newEmployee } = employee;
    return newEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  