import { AsyncStorage } from 'react-native';

// ?Saving tokens to the device
export const saveData = async () => {
  try {
    await AsyncStorage.setItem('TEST_ITEM', 'check this out');
  } catch (error) {
    console.log(error);
  }
}

export const getData = async () => {
  try {

  } catch (error) {
    const value = await AsyncStorage.getItem('TEST_ITEM');
    if (value) {
      console.log(value);
    }
  }
}
