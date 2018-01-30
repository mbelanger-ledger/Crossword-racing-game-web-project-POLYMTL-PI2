import { Request, Response, NextFunction } from "express";
import { Message } from "../../../common/communication/message";
import "reflect-metadata";
import { injectable, } from "inversify";
import { JsonReader } from "../jsonReader";

const datamuse = require("datamuse");

module Lexical {

    @injectable()
    export class Muse {

        public helloWorld(req: Request, res: Response, next: NextFunction): void {
            const message: Message = new Message();
            message.title = "Hello";
            message.body = "World";
            res.send(JSON.stringify(message));
        }

        public findWords(req: Request, res: Response, next: NextFunction): void {
            let criteria: String = req.params.criteria;

            while (criteria.includes("-")) {
                criteria = criteria.replace("-", "?");
            }

            /*datamuse.request("words?sp=" + criteria + "&max=1000&md=f,d").then((json: JSON) =>
                res.send("Word: " + json[0].word + "\n" + "Score: " + String(json[0].score)) );*/
            datamuse.request("words?sp=" + criteria + "&md=f").then((json: JSON) =>
                res.send( json ));
        }

        public findCommonWords(req: Request, res: Response, next: NextFunction): void {
            let criteria: String = req.params.criteria;
            while (criteria.includes("-")) {
                criteria = criteria.replace("-", "?");
            }

            /*datamuse.request("words?sp=" + criteria + "&max=1000&md=f,d").then((json: JSON) =>
                res.send("Word: " + json[0].word + "\n" + "Score: " + String(json[0].score)) );*/
            const reader: JsonReader = new JsonReader();
            datamuse.request("words?sp=" + criteria + "&md=f,d").then((json: JSON) =>
                res.send(reader.getWordsBasedOnCommon(json, true)));
        }

        public findUncommonWords(req: Request, res: Response, next: NextFunction): void {
            let criteria: String = req.params.criteria;
            while (criteria.includes("-")) {
                criteria = criteria.replace("-", "?");
            }

            /*datamuse.request("words?sp=" + criteria + "&max=1000&md=f,d").then((json: JSON) =>
                res.send("Word: " + json[0].word + "\n" + "Score: " + String(json[0].score)) );*/
            const reader: JsonReader = new JsonReader();
            datamuse.request("words?sp=" + criteria + "&md=f,d").then((json: JSON) =>
                res.send(reader.getWordsBasedOnCommon(json, false)));
        }
    }
}

export = Lexical;
