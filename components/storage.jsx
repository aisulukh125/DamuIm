import AsyncStorage from '@react-native-async-storage/async-storage';

// Save a user to AsyncStorage
export const saveUser = async (user) => {
  try {
    const users = await AsyncStorage.getItem('users');
    const parsedUsers = users ? JSON.parse(users) : [];
    parsedUsers.push(user);
    await AsyncStorage.setItem('users', JSON.stringify(parsedUsers));
    console.log("User saved:", user);
  } catch (error) {
    console.error("Error saving user:", error);
  }
};

// Get all users
export const getUsers = async () => {
  try {
    const users = await AsyncStorage.getItem('users');
    return users ? JSON.parse(users) : [];
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

// Find a user by email
export const findUserByEmail = async (email) => {
  try {
    const users = await getUsers();
    return users.find((user) => user.email === email);
  } catch (error) {
    console.error("Error finding user:", error);
    return null;
  }
};
