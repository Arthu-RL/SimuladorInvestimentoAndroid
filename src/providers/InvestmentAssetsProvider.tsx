import { createContext, useContext, ReactNode } from 'react';
import { Assets } from '@/lib/schemas/assets.schema'; 
import { useGenerateInvestmentAssets } from '@/hooks/useGenerateInvestmentAssets';

type InvestmentAssetsState = {
  assets: Assets[];
  updateAssets: (assets: Assets[]) => void;
};

const InvestmentAssetsContext = createContext<InvestmentAssetsState>({
  assets: [],
  updateAssets: () => {},
});

const InvestmentAssetsProvider = ({ children }: { children: ReactNode }) => {
  const { assets, updateAssets } = useGenerateInvestmentAssets();

  return (
    <InvestmentAssetsContext.Provider value={{ assets, updateAssets }}>
      {children}
    </InvestmentAssetsContext.Provider>
  );
};

const useInvestmentAssets = () => {
  const context = useContext(InvestmentAssetsContext);
  if (!context) throw new Error('useInvestmentAssets must be used within an InvestmentAssetsProvider');
  return context;
};

export { InvestmentAssetsProvider, useInvestmentAssets };