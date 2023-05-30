import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase.config";

type SetProgress = (progress: number) => void;

export async function uploadImages(
  image: File,
  setProgress: SetProgress
): Promise<string> {
  const storageRef = ref(storage, `soko/${image.name}`);
  const uploadTask = uploadBytesResumable(storageRef, image);
  let downloadUrl: string | undefined = undefined;
  await new Promise<void>((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.error(error);
        reject(error);
      },
      async () => {
        downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
        resolve();
      }
    );
  });
  if (downloadUrl === undefined) throw new Error("download url not found");
  return downloadUrl;
}
