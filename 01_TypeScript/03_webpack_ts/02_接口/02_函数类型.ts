(() => {
    console.log("=========================================================函数类型");
    interface ISearchFun{
        (source:string,substring:string):boolean
    }
    const searchString:ISearchFun = function(source:string,substring:string):boolean{
        return source.search(substring)>-1
    }
    console.log(searchString('变帅了','帅'))
  })();
  