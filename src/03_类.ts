//类 接口 只是一个语法糖，编译过去实际上还是一个函数
(function(){
    class Person{
        firstName:string
        lastName:string
        fullName:string
        constructor(firstName:string,lastName:string){
            this.firstName = firstName
            this.lastName = lastName
            this.fullName = firstName + '_' + lastName
        }
    }
    function showName(person:Person){
        return person.firstName + '_' + person.lastName
    }
    const person2 = new Person('Cai','Wanyi')
    console.log(showName(person2))
})()