import { Request, Response, Router } from "express";
import Container from "typedi";
import UserController from "../controllers/UserController";
import ArtistControllers from "../controllers/ArtistContollers";

const router = Router()
const artistController = Container.get(ArtistControllers)

router.patch("/update-artist", (req: Request, res: Response)=> artistController.update(req, res))
router.get("/:id", (req: Request, res: Response)=> artistController.getArtistById(req, res))
router.get("/:userId", (req: Request, res: Response)=> artistController.getArtistByUser(req, res))
router.get("/", (req: Request, res: Response)=> artistController.getAllArtists(req, res))

export default router