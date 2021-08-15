
(() => {
    console.log("=========================================================类实现接口（implements）");
    interface Ifly{
        fly()
    }
    class Person1 implements Ifly{
        fly(){
            console.log('我会飞1')
        }
    }
    // const person1 = new Person1  //忘记加块号，不报错
    const person1 = new Person1()
    person1.fly()
    console.log("=========================================================一个类可以实现多个接口");
    interface Iswim{
        swim()
    }
    class Person2 implements Ifly,Iswim{
        fly(){
            console.log('我会飞2')
        }
        swim(){
            console.log('我会游泳2')
        }
    }
    const person2 = new Person2()
    person2.fly()
    person2.swim()
    console.log("=========================================================接口继承接口（extends）");
    interface Imuti extends Ifly,Iswim{
        fly()
        swim()
    }
    class Person3 implements Imuti{
        fly(){
            console.log('我会飞3')
        }
        swim(){
            console.log('我会游泳3')
        }
    }
    const person3 = new Person3()
    person3.fly()
    person3.swim()
  })();
  