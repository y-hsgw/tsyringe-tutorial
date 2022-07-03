import "reflect-metadata";
import express, { Request, Response } from "express";
import { container } from "tsyringe";
import { InjectableController } from "./controller/injectable";
import { SingletonController } from "./controller/singleton";
import { AutoInjectableController } from "./controller/autoInjectable";

const app = express();

app.use("/injectable", (req: Request, res: Response) =>
  container.resolve(InjectableController).handle(res)
);

app.use("/singleton", (req: Request, res: Response) =>
  container.resolve(SingletonController).handle(res)
);

app.use("/autoInjectable", (req: Request, res: Response) =>
  new AutoInjectableController().handle(res)
);

export default app;
