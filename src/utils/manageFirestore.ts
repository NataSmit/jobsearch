import {
  getDocs,
  addDoc,
  collection,
  query,
  where,
  doc,
  deleteDoc,
  setDoc,
} from "firebase/firestore";
import { signOut } from "firebase/auth";

import { auth } from "../firebaseConfig";

import { db } from "../firebaseConfig";
import { JobAd } from "../types/types";

export const jobAdsCollectionRef = collection(db, "jobAds");

export async function getFavoriteJobAdsFromDB(userId: string) {
  const queryJobAdsByUserId = query(
    jobAdsCollectionRef,
    where("userID", "==", userId)
  );
  try {
    const data = await getDocs(queryJobAdsByUserId);
    const jobAds = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    console.log(jobAds);
    return jobAds;
  } catch (err) {
    console.log(err);
  }
}

// using add() function, it means that docID is created automatically
//export async function addToFavoritesDB(
//  userId: string,
//  jobAdId: string,
//  publicationTime: string,
//  title: string,
//  companyName: string,
//  location: string
//) {
//
//  console.log("i am working");
//  try {
//    await addDoc(jobAdsCollectionRef, {
//      userID: userId,
//      favoriteJobAdId: jobAdId,
//      publicationTime,
//      title,
//      companyName,
//      location,
//    });
//  } catch (err) {
//    console.log(err);
//  }
//}

export async function deleteJobAd(docId: string) {
  const jobAdDoc = doc(db, "jobAds", docId);
  await deleteDoc(jobAdDoc);
}

//using setDoc() function where I must provide docID
export async function addToFavoritesDB(userId: string, jobAdId: string) {
  try {
    await setDoc(doc(db, "jobAds", jobAdId), {
      userID: userId,
      id: jobAdId,
    });
  } catch (err) {
    console.log(err);
  }
}

export async function handleSignOut() {
  await signOut(auth);
}
