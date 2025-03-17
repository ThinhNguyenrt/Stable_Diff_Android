import React from "react";
import { View } from "react-native";
import CategoryItem from "./CategoryItem";
import { Category } from "@/constants/types";

interface CategoryListProps {
    categories: Category[];
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  return (
    <View>
      {categories.map((category, index) => (
        <CategoryItem key={index} category={category} />
      ))}
    </View>
  );
};

export default CategoryList;
