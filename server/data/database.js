import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('erpsystem', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database Connected!');
        await sequelize.sync();
    } catch (error) {
        console.error('Connection Failed: ', error);
    }
}