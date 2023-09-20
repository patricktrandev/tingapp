import dotenv from "dotenv";

dotenv.config({});

class Config {
  public DB_URL: string | undefined;
  public PORT_SERVER: string | undefined;
  public SECRET_KEY_ONE: string | undefined;
  public SECRET_KEY_TWO: string | undefined;
  public NODE_ENV: string | undefined;
  private readonly DEFAULT_DB_URL = `mongodb+srv://root:admin123@project-nodejs.3l3kq.mongodb.net/tingapp?retryWrites=true&w=majority`;
  constructor() {
    this.DB_URL = process.env.DB_URL || this.DEFAULT_DB_URL;
    this.PORT_SERVER = process.env.PORT_SERVER || "5001";
    this.SECRET_KEY_ONE = process.env.SECRET_KEY_ONE || "";
    this.SECRET_KEY_TWO = process.env.SECRET_KEY_TWO || "";
    this.NODE_ENV = process.env.NODE_ENV;
  }
  public validateConfig(): void {
    //console.log(this);
    for (const [key, value] of Object.entries(this)) {
      if (value === undefined) {
        throw new Error(`Configuration ${key} is undefined.`);
      }
    }
  }
}
export const config: Config = new Config();
