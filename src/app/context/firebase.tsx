// import { Firestore } from "firebase/firestore";
// import React, { createContext, useContext, ReactNode } from 'react';
// import { db } from "../lib/firebase/";
//
// interface FirebaseContextProps {
//   db: Firestore
// }
//
// const FirebaseContext = createContext<FirebaseContextProps | undefined>(undefined);
//
// interface FirebaseProviderProps {
//   children: ReactNode;
// }
//
// export const FirebaseProvider: React.FC<FirebaseProviderProps> = ({ children }) => {
//   return (
//     <FirebaseContext.Provider value={{ db }}>
//       {children}
//     </FirebaseContext.Provider>
//   );
// };
//
// export const useFirebase = (): FirebaseContextProps => {
//   const context = useContext(FirebaseContext);
//   if (!context) {
//     throw new Error("useFirebase must be used within a FirebaseProvider");
//   }
//   return context;
// };
