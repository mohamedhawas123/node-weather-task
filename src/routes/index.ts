import express from 'express';
import weatherRoutes from './weather.routes';
import cityRoutes from './city.routes';
import favoritesRoutes from './favorites.routes';
import authRoutes from './auth.routes';

const router = express.Router();

router.use('/weather', weatherRoutes);
router.use('/city', cityRoutes);
router.use('/favorites', favoritesRoutes);
router.use('/auth', authRoutes);

export default router;
