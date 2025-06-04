import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export default function useAuth() {
  return useSelector((state: RootState) => state.auth);
}