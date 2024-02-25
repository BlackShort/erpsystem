import { DataType, Model } from "sequelize";
import { sequelize } from "../data/database.js";

class Admins extends Model { };

Admins.init({
    id: {
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataType.STRING,
        allowNull: false
    },
    password: {
        type: DataType.STRING,
        allowNull: false
    },
    email: {
        type: DataType.STRING,
        allowNull: false
    },
    role: {
        type: DataType.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataType.DATE,
        allowNull: false,
        defaultValue: DataType.NOW
    },
    updatedAt: {
        type: DataType.DATE,
        allowNull: false,
        defaultValue: DataType.NOW
    },
}, {
    sequelize,
    modelName: 'admins',
    tableName: 'adminsTb',
    timestamps: true,
});

export default Admins;