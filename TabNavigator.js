import {CreateBottomTabNavigator} from "react-navigation/bottomTabs";
import Feed from "../screens/Feed";
import Profile from "../screens/Profile"

<TabNavigator>
Tab.Navigator
screenOptions={({ route }) => ({
tabBarIcon: ({ focused, color, size }) => {
let iconName;
}})}
tabBarOptions={{ activeTintColor: 'tomato', inactiveTintColor: 'gray', }}
<Tab.Screen name="Feed" component={Feed} />
<Tab.Screen name="CreatePost" component={CreatePost} />
</TabNavigator>