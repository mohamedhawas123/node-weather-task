import { sequelize } from '../config/database';
import { User } from './user.model';
import { Favorite } from './favorite.model';

User.hasMany(Favorite, { foreignKey: 'userId', onDelete: 'CASCADE' });
Favorite.belongsTo(User, { foreignKey: 'userId' });

export const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true }); 
    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error(' Error synchronizing database:', error);
  }
};

export { User, Favorite };
