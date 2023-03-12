import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: imgUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginRight: 2,
    position: "relative",
  },
  image: {
    height: 90,
    width: 90,
    borderRadius: 10,
  },
  title: {
    position: "absolute",
    bottom: 1,
    left: 1,
    color: "white",
    fontWeight: "bold",
  },
});

export default CategoryCard;
