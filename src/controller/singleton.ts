import { Response } from "express";
import { injectable, singleton } from "tsyringe";

@singleton()
class Child {
  constructor() {
    console.log("singleton child");
  }
}

@injectable()
export class SingletonController {
  constructor(
    // Childクラスを2回読んでいるが、インスタンスが生成されるのは1回のみ
    private readonly child1: Child,
    private readonly child2: Child
  ) {
    console.log("singletonController", this.child1, this.child2);
  }

  handle(res: Response) {
    res.send("singletonController");
  }
}
