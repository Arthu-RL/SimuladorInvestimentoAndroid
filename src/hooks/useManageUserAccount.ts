import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useCallback, useEffect, useState } from 'react';
import { User, userSchema } from '@/lib/schemas/user.schema';
import { UserData } from '@/providers/userAccountProvider';

export const useManageUserAccount = (userInitialState: User) => {
  const { setStorageItem, getStorageItem } = useLocalStorage<UserData['user']>(userSchema);
  const [userData, setUserData] = useState<UserData['user']>(userInitialState);

  const updateUser = useCallback(
    (user: User) => {
      setStorageItem('userData', user);
      setUserData(user);
    },
    [setStorageItem],
  );

  useEffect(() => {
    const loadUserData = async () => {
      const storedUser = await getStorageItem('userData');
      if (storedUser) {
        setUserData(storedUser);
      } else {
        updateUser(userInitialState);
      }
    };

    loadUserData();
  }, [userInitialState, getStorageItem, updateUser]);

  return { user: userData, updateUser };
};
