module.exports = function(sequelize, DataTypes) {
    let Users = sequelize.define("Users", {
        firstName: {
            type: DataTypes.STRING,
            notEmpty: true
        },
        lastName: {
            type: DataTypes.STRING,
            notEmpty: true
        },
        address: {
            type: DataTypes.TEXT
        },
        phone: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        },
        userName: {
            type: DataTypes.TEXT,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        admin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        lastLogin: {
            type: DataTypes.DATE
        },
        status: {
            type: DataTypes.ENUM('active', 'inactive'),
            defaultValue: 'active'
        },
    });

    Users.associate = function(models) {
        //  I do not beleive we will delete any users, 
        //  but if we do we will also delect any product data associated with that user.
        Users.hasMany(models.vehicle, {
            onDelete: "cascade"
        });
    };

    return Users;
}