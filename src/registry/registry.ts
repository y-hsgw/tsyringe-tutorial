import { container } from "tsyringe";
import { Database } from "../database/database";
import { TYPES } from "./type";

container.register(TYPES.Database, { useClass: Database });

export { container };
