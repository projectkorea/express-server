import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import session from "express-session";
import userRouter from "./routers/userRouter.js";
import videoRouter from "./routers/videoRouter.js";
import globalRouter from "./routers/globalRouter.js";
import routes from "./routes.js";
const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cookieParser("dev"));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "secret code",
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);

app.use(routes.home, globalRouter); // -> globalRouter -> express.Router().get -> middleware console.log
//get에서도 미들웨어가 존재한다는 말?
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);
//app.use(path, middleware)
export default app;
