// 인터페이스는 가볍다. 인터페이스는 컴파일하면 JS로 바뀌지 않고 사라짐
// 인터페이스는 타입스크립트에서만 존재하고, 자바스크립트에서는 존재하지 않게 되기 때문

// abstract class User2 {
//   constructor(
//     protected firstName:string,
//     protected lastName:string,
//   ){}
//   abstract sayHi(name:string):string
//   abstract fullName():string
// }

// class Player5 extends User2{
//   fullName(){
//     return `${this.firstName} ${this.lastName}`
//   }
//   sayHi(name:string){
//     return `Hello ${name} My name is ${this.fullName}`
//   }
// }

interface User2 {
    firstName:string,
    lastName:string,
    sayHi(name:string):string,
    fullName():string
  }
  
  interface Human{
    health:number
  }
  // 협업할때 인터페이스를 만들어두고 팀원이 원하는 각자의 방식으로 클래스를 상속하도록 할수 있겠네 굳
  class Player5 implements User2, Human{
    constructor(
      public firstName:string,
      public lastName:string,
      public health:number
    ){}
    fullName(){
      return `${this.firstName} ${this.lastName}`
    }
    sayHi(name:string){
      return `Hello ${name} My name is ${this.fullName}`
    }
  }
  
  function makeUser(user: User2){
    return "hi"
  }
  
  makeUser({
    firstName:"jaewon",
    lastName:"kim",
    fullName: () => "xx",
    sayHi: (name) => "string"
  })
  