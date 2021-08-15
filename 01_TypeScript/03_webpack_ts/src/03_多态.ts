///多态:父类型的引用指向了子类型的对象,不同类型的对象针对相同的方法,产生了不同的行为
(() => {
    class Animal{
        name:string
        constructor(name:string){
            this.name = name
        }
        run(distance:number=0){
            console.log(`${this.name}跑了${distance}米这么远的距离`)
        }
    }
    class Dog extends Animal{
        constructor(name:string){
            super(name)
        }
        run(distance:number=5){
            console.log(`${this.name}跑了${distance}米这么远的距离`)

        }
    }
    class Pig extends Animal{
        constructor(name:string){
            super(name)
        }
        run(distance:number=10){
            console.log(`${this.name}跑了${distance}米这么远的距离`)

        }
        sing(){
            console.log('啦啦啦~~')
        }
    }
    const ani:Animal = new Animal('动物')
    ani.run()
    const dog:Dog = new Dog('大狗')
    dog.run()
    const pig:Pig = new Pig('小猪')
    pig.run()
    console.log("=========================================================多态");
    const dog1:Animal = new Dog('大狗')
    dog1.run()
    const pig1:Animal = new Pig('小猪')
    pig1.run()//调用的是子类Pig自己的run
    // pig1.sing()//静态报错：类型“Animal”上不存在属性“sing”
    console.log("=========================================================多态");
    function showRun(ani:Animal){
        ani.run()
    }
    showRun(dog1)//调用的是子类P自己的run
    showRun(pig1)

})() 