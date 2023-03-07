// 타입으로 특정 값만 이렇게 할 수 가 있다.
type Team = "red" | "blue" | "green"
type Health = 1 | 5 | 10

//type Player = {
interface Player3 {
  nickname : string,
  team: Team,
  health: Health
}

// 이런식으로 사용할 수 없다
//interface Hello = string

const jaja :Player3 = {
  nickname : "jaja",
  team : "blue",
  health : 1
}

// 타입은 네가 원하는 모든것이 될 수 있다
// interface는 오브젝트의 모양을 특정해주기 위함

// 타입스크립트에게 오브젝트의 모양을 알려주는 두가지 방법
// 1.type : 다양한 목적
// 2.interface : 오로지 한가지 목적

interface User1 {
  name : string
}

interface User1 {
  lastname : string
}

interface User1 {
  health : number
}

interface Player4 extends User1 {
}

const alwke :Player4 = {
  name:"qwe",
  lastname:"q",
  health:3
}
// == 타입과의 차이점
// class와 매우 유사한 형태로 상속이 가능
// 여러번 선언해놔도 한번에 합쳐줌 
