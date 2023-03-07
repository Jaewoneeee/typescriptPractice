type Words = {
    // Words타입이 string만을 property로 가지는 오브젝트라는걸 말해줌
    [key:string]: string
  }
  
  // let dict :Words = {
  //   312: "food",
  
  // }
  
  class Dict {
    private words: Words
    // constructor에서 수동으로 초기화 (이해가 안가네)
    // property를 만들고 원하는 대로 초기화
    constructor(){
      this.words = {} 
    }
    add(word:Word){
      if(this.words[word.term] === undefined){
        this.words[word.term] = word.def
      }
    }
    def(term:string){
      return this.words[term]
    }
  }
  
  class Word {
    constructor(
      public term:string,
      public def :string
    ) {}
  }
  
  const kimchi = new Word("kimchi", "볶음밥")
  
  const dict = new Dict()
  
  dict.add(kimchi)
  dict.def("kimchi")
  
   // 배운거 3가지 중요한거
   // 1.property를 만들고 원하는 대로 초기화
   // 2.맨위가 타입을 만드는 방법
   // 3.클래스를 타입처럼 쓸 수 있음 