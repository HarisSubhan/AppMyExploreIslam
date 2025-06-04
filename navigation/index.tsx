import React from 'react';
import { useSelector } from 'react-redux';
import AuthStack from './AuthStack';
import ChildStack from './ChildStack';
import ParentStack from './ParentStack';
import AdminStack from './AdminStack';
import { RootState } from '../store/store';

export default function AppNavigator() {
  const user = useSelector((state: RootState) => state.auth.user);

  if (!user) {
    return <AuthStack />; // not logged in
  }

  // Show stack based on role
  switch (user.role) {
    case 'child':
      return <ChildStack />;
    case 'parent':
      return <ParentStack />;
    case 'admin':
      return <AdminStack />;
    default:
      return <AuthStack />; // fallback
  }
}
