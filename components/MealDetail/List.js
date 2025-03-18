import { View, Text, StyleSheet } from "react-native";

const List = ({ data }) => {
  return data.map((i) => (
    <View style={styles.listItem} key={i}>
      <Text style={styles.itemText}>{i}</Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#2f54eb",
  },
  itemText: {
    color: "white",
    textAlign: "center",
  },
});
