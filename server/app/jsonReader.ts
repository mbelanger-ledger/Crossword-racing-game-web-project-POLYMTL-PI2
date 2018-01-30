// import { LexicalService } from "./lexicalService";
import { Word } from "./word";

export class JsonReader {

    constructor() {}

    private readData(words: JSON): Word[] {
        // const fs = require("fs");
        // const data: string = fs.readFileSync("./app/words.json");
        // const words: JSON = JSON.parse(data);

//        var data = require("./app/words.json");

        const seperatedWords: Word[] = new Array<Word>();

        for ( let i: number = 0; i < Object.keys(words).length; i++) {
            const word: Word = new Word(words[i].word, words[i].tags, words[i].defs);
            seperatedWords.push(word);
        }

        return seperatedWords;
    }

    // meilleur nom?
    public getWordsBasedOnRarity(isCommon : boolean): Word[] {

        let seperatedWords : Word[] = this.readData();
        let foundWords : Word[] = new Array<Word>();

        // test
        seperatedWords.forEach(element => {
            if(element.isCommon === isCommon){
                foundWords.push(element);
                console.log(element.name + "   " + element.isCommon + "   " );
            } 
        });

        return foundWords;
    }

}
