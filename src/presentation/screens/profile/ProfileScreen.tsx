import { Text, View, StyleSheet, Pressable } from 'react-native'
import { styles } from '../../../config/app-theme'
import { useProfileStore } from '../../store/profile-store'
export const ProfileScreen = () => {

    const name = useProfileStore(state => state.name);
    const email = useProfileStore(state => state.email);
    const changeProfile = useProfileStore(state => state.changeProfile);

    return (
        <View style={styles.container}>
            <Text style={styles.title}> {name}</Text>
            <Text style={styles.title}> {email}</Text>

            <Pressable
                onPress={() => useProfileStore.setState({ name: 'Dennys' })}
                style={styles.primaryButton}
            >
                <Text>Cambiar Nombre</Text>
            </Pressable>


            <Pressable
                onPress={() => useProfileStore.setState({ email: 'correo@correo.com' })}
                style={styles.primaryButton}
            >
                <Text>Cambiar Correo</Text>
            </Pressable>


            <Pressable
                onPress={() => changeProfile('Andres', 'andres@correo.com')}
                style={styles.primaryButton}
            >
                <Text>Regresar a informacion orginal</Text>
            </Pressable>
        </View>
    )
}