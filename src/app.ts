import "reflect-metadata";
import express, { Request, Response } from "express";
import { InjectableController } from "./controller/injectable";
import { SingletonController } from "./controller/singleton";
import { container } from "tsyringe";

const app = express();

app.use("/injectable", (req: Request, res: Response) =>
  container.resolve(InjectableController).handle(res)
);

app.use("/singleton", (req: Request, res: Response) =>
  container.resolve(SingletonController).handle(res)
);

export default app;
