module.exports = function(sequelize, DataTypes) {
    let vehicle = sequelize.define("vehicle", {
        vehicleMake: {
            type: DataTypes.STRING,
            notEmpty: true
        },
        vehicleModel: {
            type: DataTypes.STRING,
            notEmpty: true
        },
        vehicleLicense: {
            type: DataTypes.STRING
        },
        vehicleLocation: {
            type: DataTypes.STRING
        },
        dateOfService: {
            type: DataTypes.DATE
        }
    });

    vehicle.associate = function(models) {
        vehicle.belongsTo(models.Users, {
            foreignKey: {
                allowNull: false
            }
        });
        vehicle.hasMany(models.products, {
            onDelete: "cascade"
        });
    };
    return vehicle;
};