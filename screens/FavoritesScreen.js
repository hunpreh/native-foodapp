import React, { useContext } from "react";
import { MEALS } from "../data/dummy-data";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import MealsList from "../components/MealsList/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";
import { StyleSheet, View, Text } from "react-native";

const FavoritesScreen = () => {
  const ctx = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((meal) => ctx.ids.includes(meal.id));

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.root}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
        <MaterialCommunityIcons
          name="emoticon-sad-outline"
          size={32}
          color="#0050b3"
        />
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0050b3",
  },
});
