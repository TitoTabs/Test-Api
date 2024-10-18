import userServices from "../services/userServices.js";
import sequelizeDb from "../config/dbConfig.js";

const UserController = () => {
  const register = async (req, res) => {
    const dbInstance = await sequelizeDb.transaction();
    try {
      // Add validation or password hashing here
      const service = await userServices();

      const newUser = await service.createUser(req.body, {
        transaction: dbInstance,
      });
      await dbInstance.commit();

      return res
        .status(201)
        .json({ message: "User registered successfully", user: newUser });
    } catch (error) {
      await dbInstance.rollback(); // Rollback transaction on error
      return res.status(400).json({ message: error.message });
    }
  };

  return {
    register,
  };
};

export default UserController;
