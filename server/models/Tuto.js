module.exports = (sequelize, DataTypes) => {
  const Tutorial = sequelize.define("tutorials", {
    name: {
      type: DataTypes.STRING,
    },
    text: {
      type: DataTypes.STRING,
    },
  });
  return Tutorial;
};
