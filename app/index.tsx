// app/index.tsx
import { Redirect, usePathname } from 'expo-router';

export default function RootRedirect() {
  const pathname = usePathname();

  if (pathname === '/') {
    return <Redirect href="/auth/login" />;
  }

  if (pathname === '/login') {
    return <Redirect href="/auth/login" />;
  }

  if (pathname === '/register') {
    return <Redirect href="/auth/RegisterScreen" />;
  }

  // If none of the above, render nothing (or you could redirect to a 404)
  return null;
}