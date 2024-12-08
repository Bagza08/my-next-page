import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import app from "./init";
import bcyrp from "bcrypt";

const firestore = getFirestore(app);

export const retrieveData = async (collectionName: string) => {
  const snapshot = await getDocs(collection(firestore, collectionName));

  const data = snapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  return data;
};

export const retrieveDataById = async (collectionName: string, id: string) => {
  const snapshot = await getDoc(doc(firestore, collectionName, id));
  const data = snapshot.data();

  return data;
};

export const signUp = async (
  userdata: {
    email: string;
    fullname: string;
    password: string;
    role?: string;
  },
  callback: (arg0: boolean, arg1: string) => void
) => {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", userdata.email)
  );

  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (data.length > 0) {
    callback(false, "Email already exist");
  } else {
    userdata.password = await bcyrp.hash(userdata.password, 10);
    userdata.role = "member";
    await addDoc(collection(firestore, "users"), userdata).then(() => {
      callback(true, "register success");
    }).catch((err) => callback(false, err.message));
  }
};
