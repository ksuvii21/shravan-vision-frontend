import { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '../firebaseConfig';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  // Predefined credentials for demo purposes
  const ADMIN_CREDENTIALS = {
    email: 'admin@shravanvision.com',
    password: 'admin123',
    role: 'admin'
  };

  const USER_CREDENTIALS = {
    email: 'user@shravanvision.com',
    password: 'user123',
    role: 'user'
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);

        // Get user role from Firestore
        try {
          const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
          if (userDoc.exists()) {
            setUserRole(userDoc.data().role);
          } else {
            // If user document doesn't exist, create it with default role
            await setDoc(doc(db, 'users', firebaseUser.uid), {
              email: firebaseUser.email,
              role: 'user',
              createdAt: new Date()
            });
            setUserRole('user');
          }
        } catch (error) {
          console.error('Error fetching user role:', error);
          setUserRole('user'); // Default to user role
        }
      } else {
        setUser(null);
        setUserRole(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const login = async (email, password) => {
    // Mock login for demo purposes
    if ((email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) ||
        (email === USER_CREDENTIALS.email && password === USER_CREDENTIALS.password)) {
      let role = 'user';
      if (email === ADMIN_CREDENTIALS.email) {
        role = 'admin';
      }
      setUser({ email, uid: 'mock-uid' });
      setUserRole(role);
      return { success: true };
    } else {
      return { success: false, error: 'Invalid credentials' };
    }
  };

  const logout = async () => {
    // Mock logout for demo purposes
    setUser(null);
    setUserRole(null);
    return { success: true };
  };

  const isAdmin = () => userRole === 'admin';
  const isUser = () => userRole === 'user';

  const value = {
    user,
    userRole,
    loading,
    login,
    logout,
    isAdmin,
    isUser,
    ADMIN_CREDENTIALS,
    USER_CREDENTIALS
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
