import express, { Request, Response } from 'express';
import { addFavorite, getFavorites } from '../controllers/favorites.controller';
import { authenticate } from '../middleware/auth.middleware';

const router = express.Router();

router.post('/add', authenticate, (req: Request, res: Response) => {
    getFavorites(req, res).catch((err: any) => {
    console.error('Error in addFavoriteCity:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  });
});

router.get('/:userId', authenticate, (req: Request, res: Response) => {
    addFavorite(req, res).catch((err: any) => {
    console.error('Error in getFavoriteCities:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  });
});

export default router;
