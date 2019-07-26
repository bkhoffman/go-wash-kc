module.exports = function(sequelize, DataTypes) {
    let products = sequelize.define("products", {
        productsId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        productPurchase: {
            type: DataTypes.STRING,
            notEmpty: true
        },
        purchaseQuantity: {
            type: DataTypes.INTEGER,
            notEmpty: true
        },
        productReview: {
            type: DataTypes.STRING
        },
        dateOfService: {
            type: DataTypes.DATE
        },
    });

    products.associate = function(models) {
        products.belongsTo(models.vehicle, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return products;
};