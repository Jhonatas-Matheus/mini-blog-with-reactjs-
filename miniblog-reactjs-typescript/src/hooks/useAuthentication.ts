import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { useState, useEffect } from "react";
interface iRegisterUserData {
  displayName: string;
  email: string;
  password: string;
}
export const useAuthentication = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth();

  const checkIfIsCancelled = () => {
    if (cancelled) {
      return;
    }
  };

  const createUser = async (data: iRegisterUserData) => {
    checkIfIsCancelled();

    setLoading(true);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await updateProfile(user, {
        displayName: data.displayName,
      });
      return user;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
        console.log(typeof error.message);

        if (error.message.includes("Password")) {
          setError("A senha precisa conter pelo menos 6 caracteres.");
        } else if (error.message.includes("email-already")) {
          setError("E-mail já cadastrado.");
        } else {
          setError("Ocorreu um erro, por favor tenta mais tarde.");
        }
      }
    }
    setLoading(false);
  };
  useEffect(() => {
    return () => setCancelled(true);
  }, []);
  return {
    auth,
    createUser,
    error,
    loading,
  };
};
