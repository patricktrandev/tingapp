import { Application, json, urlencoded } from "express";
import http from "http";
import cors from "cors";
import hpp from "hpp";
import compression from "compression";
import cookieSession from "cookie-session";
import helmet from "helmet";
import { StatusCodes } from "http-status-codes";
import "express-async-errors";
import { config } from "./config";

const PORT_SERVER = 5000;

export class TingServer {
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

  private securityMiddleware(app: Application): void {
    app.use(
      cookieSession({
        name: "session",
        keys: [config.SECRET_KEY_ONE!, config.SECRET_KEY_TWO!],
        maxAge: 24 * 3 * 60 * 60 * 1000, //3days session expired,
        secure: config.NODE_ENV !== "development", // return false when environment is not development mode
      })
    );
    app.use(hpp());
    app.use(helmet());
    app.use(
      cors({
        origin: "*",
        credentials: true,
        optionsSuccessStatus: 200,
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      })
    );
  }
  private standardMiddleware(app: Application): void {
    app.use(compression());
    app.use(
      json({
        limit: "50mb",
      })
    );
    app.use(urlencoded({ extended: true, limit: "50mb" }));
  }
  private routeMiddleware(app: Application): void {}
  private globalErrorHandler(app: Application): void {}
  private async startServer(app: Application): Promise<void> {
    try {
      const httpServer: http.Server = new http.Server(app);
      this.startHttpServer(httpServer);
    } catch (err) {
      console.log(err);
    }
  }
  //socket
  //startHTTpServer
  private startHttpServer(httpServer: http.Server): void {
    httpServer.listen(PORT_SERVER, () => {
      console.log(`Server is running on port ${PORT_SERVER}`);
    });
  }
}
