import { Response } from "express";
import { injectable } from "tsyringe";
import { Database } from "../database/database";

@injectable()
export class InjectableController {
  constructor(private database: Database) {}

  handle(res: Response) {
    res.send("InjectableController");
    console.log(this.database);
  }
}
