import express, { Express } from "express";
import { TingServer } from "./setUpServer";
class Application {
  public initialize(): void {
    const app: Express = express();
    const server: TingServer = new TingServer(app);
    server.start();
  }
}

const application: Application = new Application();
application.initialize();
