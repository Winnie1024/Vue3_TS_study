(function () {
  //字符串和数字之间能够一起拼接
  let str5: string = "我有这么多的钱";
  let num: number = 1000;
  console.log(str5 + num);
  console.log("=========================================================undefined/null");
  //undefined 和 null 都可以作为其他类型的子类型,把undefined和nu1l赋值给其他类型的变量的
  //如:number类型的变量ll let num2: number = undefined
  //注意:需要在非严格模式下"strict": false,
  let num2: number = null;
  console.log(num2);
  console.log("=========================================================数组/元组");
  //数组定义方式1
  let arr1: number[] = [10, 28, 30, 40, 50];
  console.log(arr1);
  //数组定义方式2:泛型的写法
  let arr2: Array<number> = [100, 200, 300];
  console.log(arr2);
  //元组类型:在定义数组的时候,类型和数据的个数一开始就已经限定了
  let arr3: [string, number, boolean] = ["小甜甜", 100, true];
  //类型和值对应不上，报错
  // let arr4:[string,number,boolean] = [1,'小甜甜',100,true]
  console.log(arr3);
  //类型的好处，可以自动对代码静态分析
  console.log(arr3[0].split(""));
  //   console.log(arr3[1].split(''))//number类型没有split方法，报错
  console.log("=========================================================枚举类型");
  //枚举类型,枚举里面的每个数据值都可以叫元素,
  //每个元素都有自己的编号,编号是从0开始的,依次的递增加1
  //也可手动赋值，
  enum Color {
    red = 10,
    green = 100,
    blue,
  }
  //定义一个color的枚举类型的变量来接收枚举的值
  let color: Color = Color.red;
  console.log(color);
  console.log(Color.red, Color.green, Color.blue); //10 100 101
  //枚举类型提供的一个便利是你可以由枚举的值得到它的名字。例如，我们知道数值为101，但是不确定它映射到Color里的哪个名字，我们可以查找相应的名字:
  console.log(Color[101]); //blue
  //小例子,枚举中的元素可以是中文的数据值,但是不推荐
  enum Gender {
    男,
    女,
  }
  console.log(Gender.男); //0
  console.log("=========================================================any类型");
  // any类型
  let str: any = 100;
  str = "winnie";
  console.log(str);
  //当一个数组中要存储多个数据,个数不确定,类型不确定,此时也可以使用any类型来定义数组
  let arr: any[] = [100, "winnie", true];
  console.log(arr);
  console.log(arr[1].split("")); // ["w", "i", "n", "n", "i", "e"]
  //这种情况下也没有错误的提示信息, any类型有优点,也有缺点
  //   console.log(arr[0].split(""));//控制台：Uncaught TypeError: arr[0].split is not a function
  console.log("=========================================================void类型");
  // void类型
  function showMsg(): void {
    console.log("只要富婆把握住,连夜搬进大别墅");
    // return undefined//打印undefined
    // 不写return打印undefined
    // return null//打印null
    // return 'winnie'//报错： TS2322: Type 'string' is not assignable to type 'void'.
  }
  console.log(showMsg());
  //定义void类型的变量,可以接收一个undefined的值,但是意义不是很大
  let vd: void = undefined;
  console.log(vd);
  console.log("=========================================================object类型");
  function getobj(obj: object): object {
    console.log(obj);
    return {
      name: "winnie",
      age: "23",
    };
  }
  console.log(getobj(new String("123")));
  console.log(getobj(String));
  console.log("=========================================================联合类型");
  //需求2:定义一个函数得到一个数字或字符串值的长度
  function getlength(str: number | string): number {
    return str.toString.length;
  }
  //如果是number其实没有必要toString,故优化：(but静态编译器报错)
  // function getlength2(str:number|string):number{
  //     if(str.length){     //报错：类型“string|number”上不存在属性length”。
  //         return str.length
  //     }else{
  //         return str.toString.length
  //     }
  // }
  console.log("=========================================================类型断言");
  //解决以上需求
  //告诉编译器,我知道我自己是什么类型,也知道自己在干什么
  function getlength2(str: number | string): number {
    if ((<string>str).length) {
      //语法方式一：尖括号
      //   return (<string>str).length
      //语法方式二：as
      return (str as string).length;
    } else {
      return str.toString.length;
    }
  }
  console.log(getlength2("winnie"));
  console.log(getlength2(123));
  console.log("=========================================================类型推断");
  let txt1 = 100; // 自动推断 number类型
  //  txt1 = '小甜甜好帅'//报错
  console.log(txt1);
  let txt2; // 自动推断 any类型
  txt2 = 100;
  txt2 = "帅杨好帅哦";
  console.log(txt2);
})();
