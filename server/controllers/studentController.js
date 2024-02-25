import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../data/database.js';

export class Student extends Model { };

Student.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes
    },
    
}, {
    tableName: "students",
    timestamps: true,
    paranoid: true, // Soft delete
    sequelize
});