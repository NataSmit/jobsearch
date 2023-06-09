import {
  getDocs,
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
    return jobAds;
  } catch (err) {
    console.log(err);
  }
}

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
