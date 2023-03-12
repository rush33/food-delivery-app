import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";

const RestaurantScreen = () => {
  

  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      shortDescription,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <BasketIcon />

      <ScrollView>
        <View className="relative">
          <Image
            source={{
              uri: imgUrl,
            }}
            className="h-60 w-full bg-gray-300 p-4"
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-14 left-5 bg-white p-2 rounded-full"
          >
            <ArrowLeftIcon size={25} color="#00CCBB" />
          </TouchableOpacity>
        </View>

        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row my-1 space-x-2">
              <StarIcon color="green" opacity={0.5} size={22} />
              <Text className="text-xs text-gray-500">
                <Text className="text-green-500">{rating}</Text> · {genre}
              </Text>
            </View>

            <View className="flex-row items-center space-x-1">
              <MapPinIcon color="gray" opacity={0.4} size={22} />
              <Text className="text-xs text-gray-500">Nearby · {address}</Text>
            </View>
          </View>

          <Text className="text-gray-500 mt-2 pb-4 px-5">
            {shortDescription}
          </Text>
        </View>

        <View className="pb-36">
          <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
          {/* Dishes */}
          <DishRow
            id={1}
            name="Dish 1"
            description="Hot spicy sauce"
            price={129}
            image="https://links.papareact.com/gn7"
          />
          <DishRow
            id={2}
            name="Dish 2"
            description="Hot spicy sauce"
            price={99}
            image="https://links.papareact.com/gn7"
          />
          <DishRow
            id={3}
            name="Dish 3"
            description="Hot spicy sauce"
            price={159}
            image="https://links.papareact.com/gn7"
          />
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
