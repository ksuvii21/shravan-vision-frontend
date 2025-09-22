import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulate fetching user data from an API or local storage
    const fetchUser = async () => {
      // Example user data - set to null initially
      const userData = null;
      setUser(userData);
    };

    fetchUser();
  }, []);

  const logout = async () => {
    try {
      // Simulate logout API call
      setUser(null);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const isAdmin = () => {
    return user && user.isAdmin;
  };

  return (
    <AuthContext.Provider value={{
      user,
      setUser,
      logout,
      isAdmin,
      ADMIN_CREDENTIALS: { email: 'admin@example.com', password: 'adminpass' },
      USER_CREDENTIALS: { email: 'user@example.com', password: 'userpass' }
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
