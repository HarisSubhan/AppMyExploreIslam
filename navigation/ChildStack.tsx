import { createDrawerNavigator } from '@react-navigation/drawer';
import ChildDashboard from '@/app/child/ChildDashboard';
import AssignmentPage from '@/app/child/screens/AssignmentPage';
import BookPage from '@/app/child/screens/BookPage';
import QuizPage from '@/app/child/screens/QuizPage';
import VideoPage from '@/app/child/screens/VideoPage';

import { Ionicons } from '@expo/vector-icons';
import CustomDrawer from '@/components/child/CustomDrawer';

const Drawer = createDrawerNavigator();

export default function ChildStack() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#2c7873',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          fontFamily: 'ScheherazadeNew-Regular',
          fontSize: 16,
        },
      }}
    >
      <Drawer.Screen 
        name="Dashboard" 
        component={ChildDashboard}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home" size={20} color={color} />
          )
        }}
      />
      <Drawer.Screen 
        name="Books" 
        component={BookPage}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="book" size={20} color={color} />
          )
        }} 
      />
      <Drawer.Screen 
        name="Videos" 
        component={VideoPage}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="play-circle" size={20} color={color} />
          )
        }}
      />
      <Drawer.Screen 
        name="Assignments" 
        component={AssignmentPage}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="document-text" size={20} color={color} />
          )
        }}
      />
      <Drawer.Screen 
        name="Quizzes" 
        component={QuizPage}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="help-circle" size={20} color={color} />
          )
        }}
      />
    </Drawer.Navigator>
  );
}