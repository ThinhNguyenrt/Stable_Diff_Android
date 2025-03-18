import React, { useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { Icon, List, Text } from "react-native-paper";
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
          style={{
            flexDirection: "row",
            flex: 1,
            alignItems: "center",
            padding: 8,
            backgroundColor: "#f0f0f0",
            borderRadius: 10,
            marginTop: 10,
          }}
        >
          <Image
            source={category.image}
            style={{ width: 40, height: 40, marginRight: 10, flex: 1/4 }}
            resizeMode="contain"
          />
          <View style={{ rowGap: 10, flexDirection: "row", flex: 3/4 }}>
            <View style={{ flex: 3/4 }}>
              <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 5, }}>
                {category.name}
              </Text>
              <Text style={{ color: "gray" }}>{category.size}</Text>
            </View>
            <View style={{ flex: 1/4 }}>
              <Icon source="chevron-down" size={40} color="gray" />
            </View>
          </View>
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
