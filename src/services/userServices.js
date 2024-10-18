// import User from "../models/user";

const userServices = async () => {
  const createUser = async (data) => {
    console.log(data);

    // const user = await User.create(userData);
    // return user;
  };

  return { createUser };
};

export default userServices;
