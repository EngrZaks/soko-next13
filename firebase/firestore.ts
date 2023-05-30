import {
  query,
  collection,
  where,
  orderBy,
  limit,
  getDocs,
  getDoc,
  doc,
  addDoc,
  serverTimestamp,
  deleteDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { db } from "./firebase.config";

type favoriteAction = "add" | "remove";

export const productQuery = (
  category: string,
  sort: string = "createdAt",
  order: any = "desc"
) =>
  query(
    collection(db, "items"),
    where("category", "==", category),
    orderBy(sort, order)
  );
export const limProductQuery = (category: string) =>
  query(
    collection(db, "items"),
    where("category", "==", category),
    orderBy("createdAt", "desc"),
    limit(6)
  );
const allQuery = query(collection(db, "items"), orderBy("createdAt", "desc"));

export const getItems = async (category: string) => {
  try {
    let arr: any[] = [];
    await getDocs(productQuery(category)).then((data) => {
      arr.push(
        data.docs.map((item) => {
          return {
            ...item.data(),
            id: item.id,
          };
        })
      );
    });
    return arr;
  } catch (err) {
    console.log("Error: couldn't fetch Items at the moment", err);
    throw new Error("couldn't fetch Items at the moment");
  }
};

export const getSingleProduct = async (id: any) => {
  try {
    const docSnap = await getDoc(doc(db, "items", id));
    if (docSnap.exists()) {
      return { ...docSnap.data(), id: docSnap.id };
    } else {
      console.log("No document found with the id" + id);
      throw new Error("No document found with the id" + id);
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const getLimitedItems = async (category: string) => {
  try {
    let arr: any[] = [];
    await getDocs(limProductQuery(category)).then((data) => {
      arr.push(
        data.docs.map((item) => {
          return {
            ...item.data(),
            id: item.id,
          };
        })
      );
    });
    return arr;
  } catch (err) {
    console.log("Error: couldn't fetch Items at the moment", err);
    throw new Error("couldn't fetch Items at the moment");
  }
};

export const getAllItems = async () => {
  try {
    let arr: any[] = [];
    await getDocs(allQuery).then((data) => {
      arr.push(
        data.docs.map((item) => {
          return {
            ...item.data(),
            id: item.id,
          };
        })
      );
    });
    return arr;
  } catch (err) {
    console.log("Error: couldn't fetch Items at the moment", err);
    throw new Error("couldn't fetch Items at the moment");
  }
};

export const addItem = async (values: {}, collectionName: string) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), {
      ...values,
      createdAt: serverTimestamp(),
      favorites: [],
    });
    return docRef.id;
  } catch (error) {
    return error;
  }
};

export const deleteProduct = async (id: string, collection: string) => {
  await deleteDoc(doc(db, collection, id))
    .then(() => {
      console.log("document deleted successfully");
    })
    .catch((error) => console.log("failed to delete document", error));
};

export const updateFavorite = async (
  action: favoriteAction,
  productId: string,
  userId: string
) => {
  const docRef = doc(db, "items", productId);
  await updateDoc(docRef, {
    favorites: action == "add" ? arrayUnion(userId) : arrayRemove(userId),
  });
};

export const getFavorites = async (userId: string) => {
  const favRef = collection(db, "items");
  const favorQuery = query(
    favRef,
    where("favorites", "array-contains", userId)
  );
  try {
    const arr: any = [];
    const snapshot = await getDocs(favorQuery).then((snapshot) => {
      arr.push(
        snapshot.docs.map((item) => {
          return {
            ...item.data(),
            id: item.id,
          };
        })
      );
    });
    return arr;
  } catch (e) {
    console.log("Error: couldn't fetch favorite Items at the moment", e);
    throw new Error("couldn't fetch favorite Items at the moment");
  }
};
