'use client';

import { useTonAddress } from '@tonconnect/ui-react';
import { collection, doc, getDocs, query, setDoc, updateDoc, where } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { db } from '@/app/lib/firebase';

export type LanguageLevel = 'a1' | 'a2' | 'b1' | 'b2' | 'c1' | 'c2';

export interface SelectedLanguages {
  [language: string]: LanguageLevel;
}

const useSelectedLanguage = (userId: string, initialValue: SelectedLanguages) => {
  const address = useTonAddress();

  const [selectedLanguages, setSelectedLanguages] = useState<SelectedLanguages>(initialValue);
  const [isOnboardingWasFinished, setIsOnboardingWasFinished] = useState<boolean>(false);
  const [isShowOnboarding, setIsShowOnboarding] = useState<boolean>(false);

  const selectedLanguagesKeys = Object.keys(selectedLanguages);
  const isDisableButton = selectedLanguagesKeys.length === 0;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userRef = collection(db, "user");
        const q = query(userRef, where("wallet_address", "==", address));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const userDoc = querySnapshot.docs[0];
          const userData = userDoc.data();
          if (userData) {
            setSelectedLanguages(userData.choosen_lang || initialValue);
            setIsOnboardingWasFinished(userData.onboarding || false);
          }
        } else {
          const userDocRef = doc(userRef);
          await setDoc(userDocRef, { choosen_lang: initialValue, onboarding: false });
        }
      } catch (error) {
        console.error('Error fetching user data: ', error);
      }
    };

    void fetchUserData();
  }, []);


  const handleOnboardingShown = (value: boolean) => {
    setIsShowOnboarding(value);
  };


  const handleLanguageChange = (language: string, level: LanguageLevel) => {
    const updatedLanguages = {
      ...selectedLanguages,
      [language]: level,
    };
    setSelectedLanguages(updatedLanguages);
    void updateUserData(updatedLanguages);
  };
  const updateUserData = async (updatedLanguages: SelectedLanguages) => {
    try {
      const userRef = collection(db, "user");
      const q = query(userRef, where("wallet_address", "==", address));
      const querySnapshot = await getDocs(q);

      if(querySnapshot.empty){
        throw new Error("No user found with the provided wallet address");
      }

      const userDoc = querySnapshot.docs[0].ref;
      await updateDoc(userDoc, { choosen_lang: updatedLanguages });
    } catch (error) {
      console.error('Error updating user data: ', error);
    }
  };

  const handleOnboardingFinish = async () => {
    try {
      const userRef = collection(db, "user");
      const q = query(userRef, where("wallet_address", "==", address));
      const querySnapshot = await getDocs(q);

      if(querySnapshot.empty){
        throw new Error("No user found with the provided wallet address");
      }

      const userDoc = querySnapshot.docs[0].ref;
      await updateDoc(userDoc, { onboarding: true });

      setIsOnboardingWasFinished(true);
      setIsShowOnboarding(false);
    } catch (error) {
      console.error('Error finishing onboarding: ', error);
    }
  };

  return {
    selectedLanguages,
    setSelectedLanguages,
    handleOnboardingFinish,
    isOnboardingWasFinished,
    isDisableButton,
    handleLanguageChange,
    isShowOnboarding,
    handleOnboardingShown,
  };
};

export default useSelectedLanguage;
