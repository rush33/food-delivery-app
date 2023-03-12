import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <ArrowRightIcon size={25} color="#00CCBB" />
      </View>

      <Text style={styles.description}>{description}</Text>

      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.scrollViewContent}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        {/* Restaurant Cards */}
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Atmosphere"
          rating={4.6}
          genre="Fine Dining"
          address="Ranghar Plaza"
          shortDescription="This is a description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant4.jpeg"
          title="Food Infinty"
          rating={4.2}
          genre="Fast Food"
          address="KC Road, Khalihamari"
          shortDescription="This is a description"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  description: {
    fontSize: 12,
    color: "#888",
    paddingHorizontal: 15,
    marginBottom: 5,
  },
  scrollView: {
    paddingTop: 4,
    paddingBottom: 12,
  },
  scrollViewContent: {
    paddingHorizontal: 15,
  },
});

export default FeaturedRow;
