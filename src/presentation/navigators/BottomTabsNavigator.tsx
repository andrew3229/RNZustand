import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { SettingScreens } from '../screens/settings/SettingScreens';
import { useCounterStore } from '../store/counter-store';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {

    const count = useCounterStore(state => state.count);


    return (
        <Tab.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                tabBarStyle: {
                    width: "auto",
                },
                
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen
                name="Contador"
                component={SettingScreens}
                options={{
                    title: `Contador: ${count.toString()}`,

                }}
            />
        </Tab.Navigator>
    );
}