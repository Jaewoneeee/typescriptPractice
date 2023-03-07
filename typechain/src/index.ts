import crypto from "crypto"

interface BlockShape {
    hash: string; 
    preHash: string;
    height: number;
    data: string
}

class Block implements BlockShape { 
    public hash: string;
    constructor(
        public preHash: string,
        public height: number,
        public data: string
    ){
        this.hash = Block.calculateHash(preHash, height, data);
    }
    static calculateHash(preHash:string, height:number, data:string){
        const toHash = `${preHash}${height}${data}`
        return crypto.createHash("sha256").update(toHash).digest("hex");
    }
}

class Blockchain {
    private blocks: Block[];
    constructor() {
        this.blocks = []
    }
    private getPreHash(){
        if(this.blocks.length === 0) return ""
        return this.blocks[this.blocks.length - 1].hash;
    } 
    public addBlock(data:string){
        const newBlock = new Block(this.getPreHash(), this.blocks.length+1, data)
        this.blocks.push(newBlock)
    }
    public getBlocks(){
        return [...this.blocks]; // 새로운 배열을 만들면서 해킹 방지 
    }
}

const blockchain = new Blockchain();


blockchain.addBlock("First one");
blockchain.addBlock("Second one");
blockchain.addBlock("Third one");

console.log(blockchain.getBlocks());


// tsconfig에서 설정한 lib 덕분에 타입스크립트가 이런 타입들을 이해하고 인지한다  
// window.crypto
// localStorage.getItem("asdf")
// Math.cos