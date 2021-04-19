function fireEmployees(employees,unemployed){
  return employees = employees.filter(function(index){
      return ! unemployed.includes(index);
  });
}
// fireEmployees(["Steve","David","Mike","Donald","Lake","Julian"],["Donald","Lake"]) --> [Steve,David,Mike,Julian]

// fireEmployees(["Donald","Lake"],["Donald","Lake"]) --> []

// fireEmployees(["Steve","David","Mike","Donald","Lake","Julian"],[]) --> [Steve,David,Mike,Donald,Lake,Julian]

// fireEmployees(["Mike","Steve","David","Mike","Donald","Lake","Julian"],["Mike"]) --> [Steve,David,Donald,Lake,Julian]

console.log("雇用者リストとリストラ一覧");

console.log("雇用：Steve、David、Mike、Donald、Lake、Julian");
console.log("解雇：Donald、Lake");
console.log("更新リスト：" +fireEmployees(["Steve","David","Mike","Donald","Lake","Julian"],["Donald","Lake"]));

console.log("雇用：Donald、Lake");
console.log("解雇：Donald、Lake");
console.log("更新リスト：" +fireEmployees(["Donald","Lake"],["Donald","Lake"]));

console.log("雇用：Steve、David、Mike、Donald、Lake、Julian");
console.log("解雇：無し");
console.log("更新リスト：" +fireEmployees(["Steve","David","Mike","Donald","Lake","Julian"],[]));

console.log("雇用：Mike、Steve、David、Mike、Donald、Lake、Julian");
console.log("解雇：Mike");
console.log("更新リスト：" +fireEmployees(["Mike","Steve","David","Mike","Donald","Lake","Julian"],["Mike"]));
