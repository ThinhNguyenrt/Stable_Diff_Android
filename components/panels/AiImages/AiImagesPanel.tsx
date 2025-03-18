import SearchBar from "@/components/panels/AiImages/components/SearchBar";
import { StyleSheet, Text, View } from "react-native";
import ReferenceImageUploader from "./components/ReferenceImageUploader";
import CategoryList from "./components/CategoryList";

const AiImagesPanel = () => {
    const categories = [
        { name: "Tables", size: "94 Kb", image: "/images/table.png" },
        { name: "Chairs", size: "674 Kb", image: "/images/chair.png" },
        { name: "Beds", size: "315 Kb", image: "/images/bed.png" },
        { name: "Wardrobes", size: "6.6 Kb", image: "/images/wardrobe.png" },
        { name: "Lighting", size: "62.4 Kb", image: "/images/lamp.png" },
      ];
    
      return (
        <View style={styles.container}>
          <SearchBar />
          <ReferenceImageUploader />
          <CategoryList categories={categories} />
        </View>
      );
}



const styles = StyleSheet.create({
    container: {
        position: "absolute", // Định vị tuyệt đối
        bottom: 90, // Đưa xuống gần bottom bar
        backgroundColor: "white",
        padding: 16,
        borderRadius: 10,
        width: '60%', // Điều chỉnh chiều rộng phù hợp
        elevation: 5,
        right: 20, // Đưa sang phải
    },
});

export default AiImagesPanel;