import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../data/database.js';

export class Faculty extends Model {};

Faculty.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER
    },
    gender: {
        type: DataTypes.STRING
    },
    department: {
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
    address: {
        type: DataTypes.STRING
    },
}, {
    sequelize,
    modelName: 'faculty',
    tableName: 'facultyTb',
    timestamps: false
});

export default Faculty;
