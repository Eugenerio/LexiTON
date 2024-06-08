"use server";

import { collection, doc, getDocs, orderBy, query, setDoc, updateDoc, where } from 'firebase/firestore';
import { v4 as uuid4 } from "uuid";
import { db } from '@/app/lib/firebase';

export const getLessons = async (address: string) => {
  try {
    const userRef = collection(db, "user");
    const queryOfUser = query(userRef, where("wallet_address", "==", address));
    const querySnapshot = await getDocs(queryOfUser);

    if (querySnapshot.empty) {
      return;
    }

    const userInfoSnapshot = querySnapshot.docs[0];
    const userInfo = userInfoSnapshot.data();

    const lessons: any[] = [];

    for (const [lang, level] of Object.entries(userInfo.choosen_lang)) {
      // Create a query against the collection for each language and level combination
      const lessonsCol = collection(db, 'lessons');
      const q = query(lessonsCol, where('lang', '==', lang), where('level', '==', level));

      const lessonSnapshot = await getDocs(q);
      const res = lessonSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      lessons.push(...res);
    }

    console.log("lessons", lessons);
    return lessons;
  } catch (error) {
    console.error("Error fetching lessons: ", error);
  }
};

export const getLessonByLanguageAndLevel = async (courseLevel: string): Promise<any> => {
  try {

    const [course, level] = courseLevel.split('%3A');

    const lessonsRef = collection(db, 'lessons');

    const q = query(lessonsRef, where('lang', '==', course), where('level', '==', level));


    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
console.log(querySnapshot.docs[0].data().cards);
      return querySnapshot.docs[0].data().cards;
    }
      return null;
  } catch (error) {
    console.error('Error fetching lesson:', error);
    throw new Error('Failed to fetch lesson');
  }
};

interface User {
  wallet_address: string;
  score: number;
  choosen_lang: {

  };
  onboarding: boolean;
}
export const setUser = async (user: User) => {
  try {
    const userRef = collection(db, "user");
    const q = query(userRef, where("wallet_address", "==", user.wallet_address));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      return;
    }

    const generatedDocId = uuid4();
    const userDoc = doc(collection(db, "user"), generatedDocId);

    await setDoc(userDoc, user);
  } catch (e) {
    console.log("Error while creating user model", e);
  }
}

export const updateUserScore = async (wallet_address: string, score: number) => {
  try {
    const userRef = collection(db, "user");
    const q = query(userRef, where("wallet_address", "==", wallet_address));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      throw new Error("No user found with the provided wallet address");
    }

    const userDoc = querySnapshot.docs[0].ref;
    await updateDoc(userDoc, { score });
  } catch (e) {
    console.log("Error while updating user score");
  }
}

export const updateUserLangs = async (wallet_address: string, choosen_lang: string[]) => {
  try {
    const userRef = collection(db, "user");
    const q = query(userRef, where("wallet_address", "==",  wallet_address));
    const querySnapshot = await getDocs(q);

    if(querySnapshot.empty){
      throw new Error("No user found with the provided wallet address");
    }

    const userDoc = querySnapshot.docs[0].ref;
    await updateDoc(userDoc, { choosen_lang })
  } catch (e) {
    console.log("Error while updating user", e);
  }
}

export const getUsers = async () => {
  try {
     const userRef = collection(db, "user");
     const q = query(userRef, orderBy("score", "desc"));
     const querySnapshot = await getDocs(q);

     return querySnapshot.docs.map(doc => doc.data());
  } catch (e) {
    console.log("Error while getting users", e);
  }
}