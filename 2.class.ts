// 추상 클래스
// 오로지 상속 받을 수만 있고, 직접적으로 인스턴스를 만들지는 못함
abstract class User {
    constructor(
      private firstName:string,
      private lastName:string,
      public nickname:string
  ){}
  // 추상 메소드
  abstract getNickName():void

  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

class Player extends User{

}

const nico = new User("nico", "las", "slRH")
const nico2 = new Player("nico", "las", "slRH")

nico2.firstName
nico2.nickname
nico2.getFullName()

// private과 protected의 차이 이해하기