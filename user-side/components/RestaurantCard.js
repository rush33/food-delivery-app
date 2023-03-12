import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { MapPinIcon, StarIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({
  imgUrl,
  title,
  rating,
  genre,
  address,
  shortDescription,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Restaurant", {
          imgUrl,
          title,
          rating,
          genre,
          address,
          shortDescription,
        });
      }}
      style={{
        borderRadius: 4,
        backgroundColor: "#FFF",
        marginRight: 15,
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowOffset: { width: 2, height: 0 },
        shadowRadius: 4,
        elevation: 2,
      }}
    >
      <Image
        source={{ uri: imgUrl }}
        style={{ height: 144, width: 240, borderRadius: 4 }}
      />

      <View style={{ paddingHorizontal: 12, paddingBottom: 16 }}>
        <Text style={{ fontWeight: "bold", fontSize: 18, paddingTop: 8 }}>
          {title}
        </Text>
        <View
          style={{ flexDirection: "row", alignItems: "center", paddingTop: 4 }}
        >
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text style={{ fontSize: 12, color: "#7B8794" }}>
            <Text style={{ color: "#0F9D58" }}> {rating}</Text> · {genre}
          </Text>
        </View>

        <View
          style={{ flexDirection: "row", alignItems: "center", paddingTop: 4 }}
        >
          <MapPinIcon color="grey" opacity={0.4} size={22} />
          <Text style={{ fontSize: 12, color: "#7B8794" }}>{address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
