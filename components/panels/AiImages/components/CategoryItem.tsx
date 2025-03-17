import React, { useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { List, Text } from "react-native-paper";
import { Category } from "@/constants/types";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View>
      <TouchableOpacity onPress={() => setExpanded(!expanded)}>
        <View
          style={{ flexDirection: "row", alignItems: "center", padding: 8 }}
        >
          <Image
            source={category.image}
            style={{ width: 40, height: 40, marginRight: 10 }}
            resizeMode="contain"
          />
          <Text>{category.name}</Text>
          <Text style={{ marginLeft: "auto", color: "gray" }}>
            {category.size}
          </Text>
        </View>
      </TouchableOpacity>
      {expanded && (
        <List.Accordion
          title="More Details"
          expanded={expanded}
          onPress={() => setExpanded(!expanded)}
        >
          <List.Item title="Category Information" />
        </List.Accordion>
      )}
    </View>
  );
};

export default CategoryItem;
