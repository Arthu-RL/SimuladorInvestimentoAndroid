import { useState, useEffect, useRef } from 'react';
import { ToastAndroid} from 'react-native';
import Toast from 'react-native-toast-message';

export const useFetch = <T>(promise: () => Promise<Response>) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const promiseRef = useRef<() => Promise<Response>>();
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    promiseRef.current = promise;
  }, [promise]);

  useEffect(() => {
    (async () => {
      if (!promiseRef.current) return;
      setIsLoading(true);

      try {
        const response = await promiseRef.current();
        const data: T = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);

        Toast.show({
          type: 'error',
          position: 'top',
          text1: 'Erro',
          text2: 'Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente.',
        });

        ToastAndroid.show('Ocorreu um erro ao processar sua solicitação.', ToastAndroid.LONG);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return { data, isLoading };
};