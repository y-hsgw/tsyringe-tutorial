import { Response } from "express";
import { autoInjectable } from "tsyringe";
import { Database } from "../database/database";

@autoInjectable()
export class AutoInjectableController {
  constructor(private readonly database?: Database) {}

  handle(res: Response) {
    res.send("AutoInjectableController");
    console.log(this.database);
  }
}
