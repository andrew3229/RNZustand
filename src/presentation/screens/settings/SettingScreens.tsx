import { Text, View, StyleSheet, Pressable } from 'react-native'
import { styles } from '../../../config/app-theme'
import { useCounterStore } from '../../store/counter-store';
export const SettingScreens = () => {
    const count = useCounterStore(state => state.count);
    const incrementar = useCounterStore(state => state.incrementBy);


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Count: {count}</Text>

            <Pressable
                onPress={() => incrementar(1)}
                style={styles.primaryButton}
            >
                <Text>+1</Text>
            </Pressable>

            <Pressable
                onPress={() => incrementar(-1)}
                style={styles.primaryButton}
            >
                <Text>-1</Text>
            </Pressable>
        </View>
    )
}