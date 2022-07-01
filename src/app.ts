import "reflect-metadata";
import express, { Request, Response } from "express";
import { container } from "./lib/tsyringe/tsyringe.config";
import { InjectableController } from "./controller/injectable";

const app = express();

app.use("/injectable", (req: Request, res: Response) =>
  container.resolve(InjectableController).handle(res)
);

export default app;
