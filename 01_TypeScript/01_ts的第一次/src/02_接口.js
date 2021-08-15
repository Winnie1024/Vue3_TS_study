"use strict";
//类型注解的好处：会有代码提示；调用函数参数必须符合接口规范
//若不符合，编译成js会报错，但是编译成功，js可运行，
(function () {
    function showName(person) {
        return person.firstName + '_' + person.lastName;
    }
    var person1 = {
        firstName: 'Cai',
        lastName: 'Wanyi'
    };
    console.log(showName(person1));
})();
