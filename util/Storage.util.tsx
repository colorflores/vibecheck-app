import { AsyncStorage } from 'react-native';

export const saveData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(`Error saving ${key} token`);
    console.log(error);
  }
}

export const getData = async (key: string) => { //"expiry time" here is the key
  try {
    const data = await AsyncStorage.getItem(key);  //async storage is imported, gets the key (expiry time) from phone cache
    if (data) { //if something is returned (it exists) and condition is true so the expiry time is returned
      return data;
    }
  } catch (error) { //if it is not returned error exists
    console.log(error); //print error
    return null;
  }
}

export const deleteData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
}