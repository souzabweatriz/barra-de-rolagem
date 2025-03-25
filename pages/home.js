import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, SectionList, Dimensions } from 'react-native';

export default function HomeScreen() {
    const saladafruta = [
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
        {id: "1", name: "Leite Condensado"},
        {id: "2", name: "Leite em Pó"},
        {id: "3", name: "Sorvete"},
        {id: "4", name: "Iogurte Grego"},
        {id: "5", name: "Açaí"},
        {id: "6", name: "Nutella"},
        {id: "7", name: "Mel"},
        {id: "8", name: "Brigadeiro"},
        {id: "9", name: "Beijinho"},
        {id: "10", name: "Chocolate"},
    ];

    const screenWidth = Dimensions.get("window").width;
    const cardWidth = screenWidth / 2;

    return (
        <SafeAreaView>
            <Text style={styles.title}>Salada de Frutas</Text>
            <FlatList
                style={styles.horizontalList}
                data={saladafruta}
                horizontal
                showsHorizontalScrollIndicator={true}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={[styles.container, { width: cardWidth }]}>
                        <Card fruit={item} onPress={() => navigation.navigator("Details", {
                            fruit: item
                        })} />
                    </View>
                )}
            />
            <Text style={styles.title}>Acompanhamentos</Text>
            <FlatList>
            style={styles.verticalList}
            data={acompanhamentos}
            vertical
            showsVerticalScrollIndicator={true}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) =>(
                <View style={[styles.container,{width: cardWidth}]}>
                    <Card fruit={item} onPress={() => navigation.navigator("Details",{
                        fruit: item })} />
                </View>
            )}
            </FlatList>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 22,
        fontWeight: "bold",
        marginVertical: 10,
        textAlign: "center",
    },
    cardContainer:{
        marginHorizontal: 10,
        marginBottom: 0,
    },
    horizontalList:{
        paddingBottom: 30,
    },
    verticalList:{
        marginLeft: 95,
    }

});