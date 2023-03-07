"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
class Block {
    constructor(preHash, height, data) {
        this.preHash = preHash;
        this.height = height;
        this.data = data;
        this.hash = Block.calculateHash(preHash, height, data);
    }
    static calculateHash(preHash, height, data) {
        const toHash = `${preHash}${height}${data}`;
        return crypto_1.default.createHash("sha256").update(toHash).digest("hex");
    }
}
// tsconfig에서 설정한 lib 덕분에 타입스크립트가 이런 타입들을 이해하고 인지한다  
// window.crypto
// localStorage.getItem("asdf")
// Math.cos
