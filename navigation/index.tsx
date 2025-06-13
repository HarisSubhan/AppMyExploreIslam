import React from 'react';
import AdminStack from './AdminStack';
import ChildStack from './ChildStack';
import AuthStack from './AuthStack';
import ParentStack from './ParentStack';

export default function Navigation({ userRole }: { userRole: string | null }) {
  if (userRole === 'admin') return <AdminStack />;
  if (userRole === 'child') return <ChildStack />;
  if (userRole === 'parent') return <ParentStack />;
  return <AuthStack />;
}


