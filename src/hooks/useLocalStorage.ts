import { z } from 'zod';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { pruneAssetHistory } from '@/utils/localStorage';

export const useLocalStorage = <T>(schema: z.Schema<T>) => {
  type TData = z.infer<typeof schema>;

  const getStorageItem = async (storageKey: string): Promise<TData | null> => {
    try {
      const storageItem = await AsyncStorage.getItem(storageKey);
      if (!storageItem) return null;

      const parsedData = JSON.parse(storageItem);
      const parsedItem = schema.safeParse(parsedData);

      if (!parsedItem.success) {
        const errors = parsedItem.error.flatten();
        console.error(errors);
        return null;
      }

      return parsedItem.data;
    } catch (error) {
      console.error("Error getting storage item:", error);
      return null;
    }
  };

  const setStorageItem = async (storageKey: string, value: TData): Promise<void> => {
    try {
      let storageValue = schema.safeParse(value);

      const isStorageAvailable = await isAsyncStorageAvailable(storageKey, JSON.stringify(value));
      if (!isStorageAvailable) {
        if (storageKey === 'investmentAssets') {
          storageValue = schema.safeParse(pruneAssetHistory(value));
        }
      }

      if (!storageValue.success) {
        const errors = storageValue.error.flatten();
        console.error(errors);
        return;
      }

      await AsyncStorage.setItem(storageKey, JSON.stringify(storageValue.data));
    } catch (error) {
      console.error("Error setting storage item:", error);
    }
  };

  return { getStorageItem, setStorageItem };
};

async function isAsyncStorageAvailable(key: string, value: string): Promise<boolean> {
  try {
    await AsyncStorage.setItem(key, value);
    await AsyncStorage.removeItem(key);
    return true;
  } catch (err) {
    console.error("Error with AsyncStorage:", err);
    return false;
  }
}
