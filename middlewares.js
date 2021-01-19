import multer from "multer";
import routes from "./routes.js";

const multerVideo = multer({ dest: "uploads/videos/" });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Wetube";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 5,
  };
  next();
};

export const uploadVideo = multerVideo.single("videoFile");
