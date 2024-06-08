"use server";
// getLessons.js
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/app/lib/firebase';

export const getLessons = async () => {
  try {
    const lessonsCol = collection(db, 'lessons');
    const lessonSnapshot = await getDocs(lessonsCol);
    return lessonSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching lessons: ", error);
    throw new Error("Failed to fetch lessons");
  }
};