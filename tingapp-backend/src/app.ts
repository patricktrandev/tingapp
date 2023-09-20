import express, { Express } from "express";
import { TingServer } from "./setUpServer";
import DatabaseConnection from "./setUpDB";
import { config } from "./config";
class Application {
  public initialize(): void {
    this.loadConfig();
    DatabaseConnection();
    const app: Express = express();
    const server: TingServer = new TingServer(app);
    server.start();
  }
  private loadConfig(): void {
    //console.log("load");
    config.validateConfig();
  }
}

const application: Application = new Application();
application.initialize();
