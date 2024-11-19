import { useCallback, useEffect, useState } from 'react';
import { useProccessInvestmentAssets } from './useProccessInvestmentAssets';
import { useLocalStorage } from './useLocalStorage';
import { Assets, assetsSchemaArray } from '@/lib/schemas/assets.schema';

export const useGenerateInvestmentAssets = () => {
  const { setStorageItem, getStorageItem } = useLocalStorage<Assets[]>(assetsSchemaArray);
  const [assets, setAssets] = useState<Assets[]>([]);
  const { processedAssets } = useProccessInvestmentAssets();

  const updateAssets = useCallback(
    async (assets: Assets[]) => {
      await setStorageItem('investmentAssets', assets);
      const investmentAssets = await getStorageItem('investmentAssets'); 
      if (investmentAssets) {
        setAssets(investmentAssets); 
      }
    },
    [setStorageItem, getStorageItem]
  );

  useEffect(() => {
    const fetchAssets = async () => {
      const investmentAssets = await getStorageItem('investmentAssets');
      if (investmentAssets && investmentAssets.length) {
        setAssets(investmentAssets);
      } else {
        await updateAssets(processedAssets);
      }
    };

    fetchAssets();
  }, [processedAssets, updateAssets]);

  return { assets, updateAssets };
};
