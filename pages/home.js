import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, SectionList, Dimensions } from 'react-native';
import Card from "../components/Card";

export default function HomeScreen() {

    const frutas = [
        { id: "1", name: "Banana" },
        { id: "2", name: "Morango" },
        { id: "3", name: "Uva" },
        { id: "4", name: "Pitaya" },
        { id: "5", name: "Maracuja" },
        { id: "6", name: "Coco" },
        { id: "7", name: "Abacaxi" },
        { id: "8", name: "Mexerica" },
        { id: "9", name: "Kiwi" },
        { id: "10", name: "Mamão" }
    ];

    const acompanhamentos = [
        { id: "1", name: "Leite Condensado" },
        { id: "2", name: "Leite em Pó" },
        { id: "3", name: "Sorvete" },
        { id: "4", name: "Iogurte Grego" },
        { id: "5", name: "Açaí" },
        { id: "6", name: "Nutella" },
        { id: "7", name: "Mel" },
        { id: "8", name: "Brigadeiro" },
        { id: "9", name: "Beijinho" },
        { id: "10", name: "Chocolate" },
    ];

    const screenWidth = Dimensions.get("window").width;
    const cardWidth = screenWidth / 2;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollContainer}>
                <Text style={styles.sectionTitle}>Frutas</Text>
                <FlatList
                    style={styles.horizontalList}
                    data={frutas}
                    horizontal
                    showsHorizontalScrollIndicator={true}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={[styles.cardContainer, { width: cardWidth }]}>
                            <Card fruit={item} onPress={() => navigation.navigate("Details", { fruit: item })} />
                        </View>
                    )}
                />
                <Text style={styles.sectionTitle}>Acompanhamentos</Text>

                <SectionList
                    style={styles.verticalList}
                    sections={[
                        { data: acompanhamentos }
                    ]}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={[styles.cardContainer, { width: cardWidth }]}>
                            <Card fruit={item} onPress={() => navigation.navigate("Details", { fruit: item })} />
                        </View>
                    )}
                />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(223, 12, 118)',
        flex: 1,
        paddingTop: 20,
    },
    scrollContainer: {
        paddingHorizontal: 10,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: "bold",
        marginVertical: 10,
        textAlign: "center",
    },
    cardContainer: {
        backgroundColor: 'rgb(183, 252, 99)',
        marginHorizontal: 10,
        marginBottom: 10,
    },
    horizontalList: {
        paddingBottom: 30,
    },
    verticalList: {
        padding: 100
    },
});
