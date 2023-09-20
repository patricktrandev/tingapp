import { Application } from "express";
import http from "http";
import cors from "cors";
import hpp from "hpp";
import cookieSession from "cookie-session";
import helmet from "helmet";
import { StatusCodes } from "http-status-codes";
import "express-async-errors";
class TingServer {
  private app: Application;

  constructor(app: Application) {
    this.app = app;
  }
  public start(): void {
    this.securityMiddleware(this.app);
    this.standardMiddleware(this.app);
    this.routeMiddleware(this.app);
    this.globalErrorHandler(this.app);
    this.startServer(this.app);
  }

  private securityMiddleware(app: Application): void {}
  private standardMiddleware(app: Application): void {}
  private routeMiddleware(app: Application): void {}
  private globalErrorHandler(app: Application): void {}
  private startServer(app: Application): void {}
  //socket
  //startHTTpServer
}
