import { Response } from "express";
import { inject, injectable } from "tsyringe";
import { IDatabase } from "../database/database";
import { TYPES } from "../registry/type";

@injectable()
export class InjectController {
  constructor(@inject(TYPES.Database) private readonly database: IDatabase) {}

  handle(res: Response) {
    res.send("InjectController");
  }
}
