import { Request, Response, Router } from "express";
import Container from "typedi";
import SongController from "../controllers/SongController";

const router = Router()
const songController = Container.get(SongController)

router.patch("/update-song",  (req: Request, res: Response)=> songController.update(req, res))
router.get("/:artistId",  (req: Request, res: Response)=> songController.getSongsByArtist(req, res))
router.get("/",  (req: Request, res: Response)=> songController.getAllSongs(req, res))

export default router