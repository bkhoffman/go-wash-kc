module.exports = function(sequelize, DataTypes) {
    let vehicle = sequelize.define("vehicle", {
        // vehicleId: {
        //     type: DataTypes.INTEGER,
        //     primaryKey: true,
        //     autoIncrement: true
        // },
        vehicleMake: {
            type: DataTypes.STRING,
            notEmpty: true
        },
        vechicleModel: {
            type: DataTypes.STRING,
            notEmpty: true
        },
        vechicleLicense: {
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