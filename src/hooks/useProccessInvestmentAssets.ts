import { useState, useEffect } from 'react';
import { useFetch } from '@/hooks/useFetch';
import { fetchCurrencyByCode } from '@/services/currency';
import { currencyExchangeRate, getCurrencyDisplayName } from '@/utils/currency';
import { Assets } from '@/lib/schemas/assets.schema';
import investmentAssets from '@/data/investmentAssets.json';
import type { InvestmentAssets } from '@/@types/investment';
import type { ConversionRates } from '@/@types/currency';

export const useProccessInvestmentAssets = () => {
  const BRLConversionRates = useFetch<ConversionRates>(() => fetchCurrencyByCode('BRL')).data?.['brl'];
  const [processedAssets, setProcessedAssets] = useState<Assets[]>([]);

  useEffect(() => {
    const assetCodes = Object.keys(investmentAssets);

    const data = assetCodes.reduce<Assets[]>((processedAssets, assetCode) => {
      const assetPriceInBRL = currencyExchangeRate(assetCode, 'BRL', 1, BRLConversionRates);
      const assetData = (investmentAssets as InvestmentAssets)[assetCode];

      const isPriceValid = !isNaN(assetPriceInBRL) && assetPriceInBRL >= 0.01;
      if (isPriceValid) {
        processedAssets.push({
          ...assetData,
          history: [],
          id: crypto.randomUUID(),
          value: { current: assetPriceInBRL, previous: assetPriceInBRL },
          name: getCurrencyDisplayName(assetCode, 'pt-BR') || assetData.name,
        });
      }

      return processedAssets;
    }, []);  

    setProcessedAssets(data);
  }, [BRLConversionRates]);

  return { processedAssets };
};

