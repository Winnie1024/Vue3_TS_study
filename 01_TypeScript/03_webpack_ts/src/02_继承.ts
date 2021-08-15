//子类---->派生类
//基类---->超类(父类)
(() => {
    class Person{
        name:string
        age:number
        gender:string
        constructor(name:string='winnie',age:number=23,gender:string='女'){
            this.name = name
            this.age = age
            this.gender = gender
        }
        sayHi(str:string){
            console.log(`我是父类，我的名字是${this.name},${str}`)//注意这里要用this.name 不是name
        }
    }
    class Student extends Person{
        constructor(name:string,age:number,gender:string){
            super(name,age,gender)
        }
        sayHi(){
            console.log('哈哈，我是子类的sayHi')
            super.sayHi('嘎嘎')
        }
    }
    const per:Person = new Person()//Person的构造器参数有默认值，new的时候可以不传
    per.sayHi('嘻嘻')
    const stu:Student = new Student('小明',10,'男')
    stu.sayHi()

})()
