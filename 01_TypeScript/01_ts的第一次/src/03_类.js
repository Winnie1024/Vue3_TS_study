"use strict";
//类 接口 只是一个语法糖，编译过去实际上还是一个函数
(function () {
    var Person = /** @class */ (function () {
        function Person(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = firstName + '_' + lastName;
        }
        return Person;
    }());
    function showName(person) {
        return person.firstName + '_' + person.lastName;
    }
    var person2 = new Person('Cai', 'Wanyi');
    console.log(showName(person2));
})();
