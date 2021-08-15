//接口是对象的状态(属性)和行为(方法)的抽象(描述)
//接口:是一种类型,是一种规范,是一种规则,是一个能力,是一种约束

(() => {
  console.log("=========================================================只读/可选");
  //需求:创建人的对象，需要对人的属性进行一定的约束l/ id是number类型，必须有，只读的
  // name是string类型，必须位
  // age是number类型，必须有
  // sex是string类型，可以没有
  interface IPerson{
      readonly id:number,
      name:string,
      age:number,
      sex?:string
  }
  //readonly的作用跟const一样，区别只是看要把它做为变量使用还是做为一个属性，此处是属性
})();
