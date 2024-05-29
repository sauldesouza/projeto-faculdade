import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function MainScreen() {
    const navigation = useNavigation();

    const choosePlan = (plan) => {
        if (plan === 'free') {
            alert('Você escolheu o plano FREE.');
            navigation.navigate('index');
            // Redirecionar ou executar lógica para plano FREE
        } else if (plan === 'mensal') {
            navigation.navigate('MensalPaymentScreen');
        } else if (plan === 'anual') {
            navigation.navigate('AnualPaymentScreen');
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Instaparaguai</Text>
            </View>
            <View style={styles.planContainer}>
                <View style={styles.plan}>
                    <Text style={styles.planTitle}>FREE</Text>
                    <Text style={styles.planDescription}>Uso do aplicativo normalmente.</Text>
                    <TouchableOpacity style={styles.button} onPress={() => choosePlan('free')}>
                        <Text style={styles.buttonText}>Escolher</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.plan}>
                    <Text style={styles.planTitle}>PREMIUM MENSAL</Text>
                    <Text style={styles.planDescription}>R$ 29,90 por mês.</Text>
                    <TouchableOpacity style={styles.button} onPress={() => choosePlan('mensal')}>
                        <Text style={styles.buttonText}>Escolher</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.plan}>
                    <Text style={styles.planTitle}>PREMIUM ANUAL</Text>
                    <Text style={styles.planDescription}>R$ 299,00 por ano.</Text>
                    <TouchableOpacity style={styles.button} onPress={() => choosePlan('anual')}>
                        <Text style={styles.buttonText}>Escolher</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        height: 60,
        backgroundColor: '#f3f6fa',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    planContainer: {
        padding: 16,
    },
    plan: {
        marginBottom: 24,
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#f9f9f9',
    },
    planTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    planDescription: {
        fontSize: 16,
        marginBottom: 16,
    },
    button: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
