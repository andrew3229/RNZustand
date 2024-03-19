import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, StyleSheet } from 'react-native'
import { HomeScreen } from './presentation/screens/home/HomeScreen';
import { ProfileScreen } from './presentation/screens/profile/ProfileScreen';
import { SettingScreens } from './presentation/screens/settings/SettingScreens';
import { BottomTabsNavigator } from './presentation/navigators/BottomTabsNavigator';
export const Main = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <BottomTabsNavigator />
        </NavigationContainer>
    )
}