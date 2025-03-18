import { useContext, useLayoutEffect } from "react";
import { Image, View, Text, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";

import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";

const MealDetailScreen = ({ route, navigation }) => {
  const ctx = useContext(FavoritesContext);
  const mealId = route.params.mealId;
  const meal = MEALS.find((m) => m.id === mealId);
  const isFavorite = ctx.ids.includes(mealId);

  function favoriteHandler() {
    if (isFavorite) ctx.removeFavorite(mealId);
    else ctx.addFavorite(mealId);
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={isFavorite ? "star" : "star-outline"}
            color={"white"}
            onPress={favoriteHandler}
          />
        );
      },
    });
  }, [navigation, favoriteHandler]);

  return (
    <ScrollView style={styles.root}>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{meal.title}</Text>
      <MealDetails
        duration={meal.duration}
        complexity={meal.complexity}
        affordability={meal.affordability}
      />

      <View style={styles.outer}>
        <View style={styles.inner}>
          <Subtitle>Ingredients</Subtitle>
          <List data={meal.ingredients} />

          <Subtitle>Steps</Subtitle>
          <List data={meal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
  },
  inner: {
    width: "80%",
  },
  outer: {
    alignItems: "center",
  },
  root: {
    marginBottom: 30,
  },
});
