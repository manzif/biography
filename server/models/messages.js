export default (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    fullname: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    telephone: {
      type: DataTypes.STRING,
    },
    message: {
      type: DataTypes.STRING,
    }
    
  },
  {freezeTableName: true,});
  Message.associate = (models) => {
    // associations can be defined here
  };
  return Message;
};