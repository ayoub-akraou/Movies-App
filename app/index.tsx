import { FlatList, Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
	return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
	  <FlatList data={[{id: "1", name: "Item 1"}, {id: "2", name: "Item 2"}, {id: "3", name: "Item 3"}]}
	  keyExtractor={(item) => item.id}
	  renderItem={({item}) => <Text>{item.name}</Text>}
	  />
    </View>
  );
}
