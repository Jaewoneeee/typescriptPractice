    const nice = {
        nickname : "niko"
    }

    function divide(a, b){
    return a / b;
    }

    nice.hello();

    divde("hello")
    
    // type checker와 소통하는 방식 
    let a = "hello";
    a = "bye"
    a = 30

    let b : boolean = "asdf"
    let c : boolean = true
    let d = [1, "asd", 5]
    d.push("123")
    d.push(4)

    let f = [1,2,5]
    f.push(1)
    f.push("e")

    let e : number[] = []
    let g = []

    //type part1
    //== optional parameter 선택적타입 ==
    const player : {
        name:string,
        age?:number // ?를 넣어줌으로써 undefined가 되게끔
    } = {
        name:"nico"
    }

    // player.age값이 있는지 먼저 체크 
    if(player.age && player.age < 10) {

    }

    //== Alias == (약간 class랑 constructor같네)
    type Player = {
        name:string,
        age?:number 
    } 

    type Age = number;

    const jaewon : Player = {
        name : "jaewon",
        age : 80
    }

    const danny : Player = {
        name : "danny"
    }

    // == argument와 함수 return값에 타입 정하기 ==
    function playerMaker2(name:string) : Player{
        return {
        name:name
        }
    }

    const playerMaker = (name:string) : Player => ({name})

    const pm = playerMaker("jaewon")
    pm.age = 3 // 함수 리턴값의 타입을 Player로 정해줬기 때문에 가능하다  


    //type part2
    // == readonly ==
    // 데이터를 바꾸는 push는 오류나지만 map,filter는 사용 가능하다
    const numbers: readonly number[] = [1,2,3,4]
    numbers.push(1)
    numbers.map(() => {
    
    })
    numbers.filter(num => num> 1)
    
    // == Tuple == 
    // 서로 다른 타입을 함께 가질 수 있는 배열
    // 특정 위치에 특정 타입이 있어야함
    const tupleArr: [string, number, boolean] = ["nico", 4, true]
    tuppleArr[0] = 1

    // == any ==
    // ts의 보호장치들로부터 빠져나오고 싶을때
    const anyArr: any[] = [1,2,3,4]
    const bb: any = true
    anyArr + bb //js의 바보같은 코드 가능해짐

    const anyArr1 = [1,2,3,4]
    const bb1 = true
    anyArr1 + bb1 

    //type part3 void, never, unknown
    // == unknown ==
    // 변수의 타입을 미리 알지 못 할 때 사용
    let u: unknown;

    if(typeof u === 'number'){
        let b = u + 1;
    }

    if(typeof u === 'string'){
        let b = u.toUpperCase();
    }

    // == void ==
    // 아무것도 return하지 않는 함수
    // return없이 그냥 함수만들면 void로 인식함
    function hello(){
        console.log("4e")
    }

    // == never ==
    // 함수가 절대 return하지 않을 때 발생. 예를 들어 함수에서 exeption(예외)이 발생할 떄
    function helloo():never{
        return 123;
    }

    function helo(name:string|number){
        if(typeof name === 'string'){
        name
        } else if(typeof name === 'number'){
        name
        } else {
        name
        // ts에 helo가 name을 받을거고 이건 string이나 number라고 했기 때문
        }
    }