// ===== FUNCTIONS =====

// === Call Signatures : 마우스 올렸을때 나오는거
//const add = (a:number, b:number) => a+b;

// 타입을 먼저 생각하고, 코딩을 하게 된다 awsome!
type Add = (a:number, b:number) => number;
const add:Add = (a, b) => a + b;

// === Overloading
// 오버로딩은 함수가 서로 다른 여러개의 call signatures를 가지고 있을 때 발생 
// 다시 말하면, 오버로딩은 여러 call signatures가 있는 함수일 뿐이다
type Add2 = {
                        //return 
  (a:number, b:number) : number;
  (a:number, b:string) : number;
}
//const add2: Add2 = (a,b) => a+b;
const add2: Add2 = (a,b) => {
  if(typeof b === "string") return a;
  return a + b;
};

// 좋은 예시
// 라우팅을 할때 어떤식으로 넘겨줄지 
// 핵심은 만약 네가 string이나 Confing 타입을 가지고 있다면
// 타입스크립트는 내부에서 그 타입을 체크해두록 해주는 것
type Config = {
  path : string,
  state : object
}

type Push = {
  (path: string) : void;
  (config: Config) : void;
}

const push: Push = (config) => {
  if(typeof config === "string"){
    console.log(config)
  } else {
    console.log(config.path, config.state)
  }
}

// 다른 여러개의 argument를 가지고 있을 때
type Add3 = {
  (a:number, b:number) : number;
  (a:number, b:number, c:number) : number
}
// c가 아마도 number일 것이라고 명시(선택사항인거지ㅇㅇ, 옵션)
const add3:Add3 = (a, b, c?:number) => {
  if(c) return a + b + c;
  return a + b;
}

// === Polymorphism 다형성, 여러가지 다른 구조들
// === Generic
// generic은 네가 요청한대로 signature를 생성해줄 수 있는 도구
// any와는 완전 다르다!!

type SuperPrint = {
  <T,M>(arr:T[], b:M): T;
  // generic을 하나 더 쓰고, 두번째 arument를 선언해주면 된다 
  // (arr: number[]):void;
  // (arr: boolean[]):void;
  // (arr: string[]):void;
  // (arr: (number|boolean)[]):void;
}

const superPrint: SuperPrint = (arr) => arr[0]
  //{ arr.forEach(i => console.log(i)) }

const aa = superPrint([1,2,3,4], "s")
const bbb = superPrint([true, false, true], 3)
const cc = superPrint(["a", "d", "zxc"], [])
const dd = superPrint([1,2,true], {})

// === conclutions
type Player0<E> = {
  name:string;
  extraInfo:E
}

type NicoExtra = {
  favFood: string
}

type NicoPlyaer = Player0<NicoExtra>

//const nico: Player<{favFood:string}> = {
const nico0: NicoPlyaer = {
  name:'nico',
  extraInfo: {
    favFood: "kimchi"
  }
}

type A = Array<number>
let zxc:A = [1, 2, 3, 5]

// generic의 장점 
// type들끼리 재사용 가능. 만약 많은 것들이 있는 큰 타입을 하나 가지고 있는데,
// 그 중 하나가 달라질 수 있는 타입이라면 제너릭을 넣으면 된다
// 또한 커스텀한 타입을 보낼 때도 사용할 수 있지
