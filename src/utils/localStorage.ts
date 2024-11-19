import { Assets } from '@/lib/schemas/assets.schema';
import AsyncStorage from '@react-native-async-storage/async-storage';

async function isAsyncStorageAvailable(key: string, value: string): Promise<boolean> {
  try {
    const storage = AsyncStorage;
    if (!storage) return false;

    await storage.setItem(key, value);
    await storage.removeItem(key);

    return true;
  } catch (err) {
    // Trata o erro sem especificidade de quota, já que AsyncStorage pode não dar erro específico
    console.error('Erro ao acessar AsyncStorage:', err);
    return false;
  }
}

function pruneAssetHistory(assets: unknown) {
  return (assets as Assets[]).map((asset) => ({
    ...asset,
    history: asset.history.slice(-150),
  }));
}

export { isAsyncStorageAvailable, pruneAssetHistory };
