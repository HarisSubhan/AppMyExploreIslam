import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChildDashboard from '@/app/child/ChildDashboard';
import { ChildStackParamList } from '../types/navigation';


// Import screens

// import ChildBookpage from '../pages/ChildPortal/pages/ChildBookpage';
// import BookDetail from '../components/child/BookDetail';
// import ChildVideopage from '../pages/ChildPortal/pages/ChildVideopage';
// import VideoDetail from '../components/child/VideoDetail';
// import QuizPage from '../pages/ChildPortal/pages/QuizPage';
// import AssignmentsPage from '../pages/ChildPortal/pages/AssignmentsPage';
// import QuizStart from '../components/child/QuizStart';



const Stack = createNativeStackNavigator<ChildStackParamList>();

export default function ChildStack() {
  return (
    <Stack.Navigator initialRouteName="ChildDashboard">
      <Stack.Screen name="ChildDashboard" component={ChildDashboard} />
      {/* <Stack.Screen name="ChildBookpage" component={ChildBookpage} />
      <Stack.Screen name="BookDetail" component={BookDetail} />
      <Stack.Screen name="ChildVideopage" component={ChildVideopage} />
      <Stack.Screen name="VideoDetail" component={VideoDetail} />
      <Stack.Screen name="QuizPage" component={QuizPage} />
      <Stack.Screen name="QuizStart" component={QuizStart} />
      <Stack.Screen name="AssignmentsPage" component={AssignmentsPage} /> */}
    </Stack.Navigator>
  );
}
