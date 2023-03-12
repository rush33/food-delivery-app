import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableHighlightBase,
  TouchableWithoutFeedbackBase,
  TouchableOpacityBase,
} from "react-native";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import React, { useState } from "react";
import Currency from "react-currency-formatter";
import {
  addToBasket,
  selectBasketItemsWithId,
  removeFromBasket,
} from "../features/basketSlice";
import { useDispatch, useSelector } from "react-redux";

const DishRow = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state) => selectBasketItemsWithId(state, id));

  const addItems = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };
const removeItemFromBasket = () => {
  if (!items.length > 0) return;

  dispatch(removeFromBasket({ id }));
};
  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2 justify-center">
            <Text className="text-xl mb-1 font-medium">{name}</Text>
            <Text className="text-gray-400 ">{description}</Text>
            <Text className="text-gray-600 mt-2 text-base">
              <Currency quantity={price} currency="INR" />
            </Text>
          </View>

          <View>
            <Image
              style={{
                borderWidth: 1,
                borderColor: "#F3F3F4",
              }}
              source={{
                uri: image,
              }}
              className="w-28 h-28 bg-gray-300 p-4 rounded-xl"
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity onPress={removeItemFromBasket}>
              <MinusCircleIcon
                disabled={!items.length}
                color={items.length > 0 ? "#00CCBB" : "lightgray"} size={42} />
            </TouchableOpacity>

            <Text>{items.length}</Text>

            <TouchableOpacity onPress={addItems}>
              <PlusCircleIcon color="#00CCBB" size={42} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
