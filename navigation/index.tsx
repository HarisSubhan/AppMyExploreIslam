import { useAuth } from '@/context/AuthContext';
import AuthStack from './AuthStack';
import ChildStack from './ChildStack';
import ParentStack from './ParentStack';
import AdminStack from './AdminStack';

export default function Navigation() {
  const { userRole } = useAuth();

  if (!userRole) {
    return <AuthStack />;
  }

  switch (userRole) {
    case 'admin':
      return <AdminStack />;
    case 'child':
      return <ChildStack />;
    case 'parent':
      return <ParentStack />;
    default:
      return <AuthStack />;
  }
}