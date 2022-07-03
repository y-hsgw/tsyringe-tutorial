export interface IDatabase {
  execute: () => void;
}

export class Database implements IDatabase {
  constructor() {
    console.log("Database");
  }

  execute() {
    console.log("Database execute");
  }
}
