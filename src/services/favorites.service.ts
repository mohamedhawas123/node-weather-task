import { Favorite } from '../models/favorite.model';
import { encrypt } from '../config/encryption';

export const addFavoriteCity = async (userId: string, cityName: string): Promise<string> => {
  const favorite = await Favorite.create({ userId, cityName });
  return encrypt(JSON.stringify(favorite));
};

export const getFavoriteCities = async (userId: string): Promise<string> => {
  const favorites = await Favorite.findAll({ where: { userId } });
  return encrypt(JSON.stringify(favorites));
};
