import express, { Request, RequestHandler, Response } from "express";
import { register, loginUser } from "../controllers/auth.controller";
import { validateLogin } from "../middleware/validateRequest.middleware";

const router = express.Router();

router.post("/register", (req: Request, res: Response) => {
  register(req, res).catch((err: any) => {
    console.error("Error in registerUser:", err);
    res.status(500).json({ error: "Internal Server Error" });
  });
});

router.post(
  "/login",
  validateLogin as RequestHandler[],
  async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const token = await loginUser(email, password);
      res.json({ token });
    } catch (err) {
      console.error("Error in loginUser:", err);
      res.status(400).json({ error: err });
    }
  }
);

export default router;
