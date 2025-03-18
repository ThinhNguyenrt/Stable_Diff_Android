import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

interface BottomBarProps {
  onSelectTool: (tool: string | null) => void; // Định nghĩa kiểu cho onSelectTool
}

const BottomBar: React.FC<BottomBarProps> = ({ onSelectTool }) => {
  const [selected, setSelected] = useState<string | null>(null);

  const buttons = [
    { id: "selection", label: "Selection", icon: <FontAwesome name="paint-brush" size={22} color="black" /> },
    { id: "segment", label: "Segment", custom: true },
    { id: "ai_images", label: "AI Images", icon: <Ionicons name="images" size={24} color="black" /> },
    { id: "adjust", label: "Adjust", icon: <MaterialCommunityIcons name="tune" size={24} color="black" /> },
  ];

  const handlePress = (id: string) => {
    setSelected(id);
    onSelectTool(id); // Cập nhật tool được chọn ở HomeScreen
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {/* Back Button */}
        <TouchableOpacity>
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>

        {buttons.map((btn, index) => (
          <React.Fragment key={btn.id}>
            {index > 0 && <View style={styles.separator} />}

            <TouchableOpacity
              style={[
                styles.button,
                selected === btn.id && styles.selectedButton,
              ]}
              onPress={() => handlePress(btn.id)}
            >
              {btn.custom ? (
                <View
                  style={[
                    styles.blackCircle,
                    selected === btn.id && { backgroundColor: "black" },
                  ]}
                />
              ) : btn.icon ? (
                <View style={styles.iconWrapper}>
                  {React.cloneElement(btn.icon, {
                    color: selected === btn.id ? "black" : "gray",
                  })}
                </View>
              ) : null}
              {selected === btn.id && (
                <Text style={styles.buttonText}>{btn.label}</Text>
              )}
            </TouchableOpacity>
          </React.Fragment>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    paddingBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 12,
    backgroundColor: "white",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderRadius: 5,
  },
  selectedButton: {
    backgroundColor: "#D9D9D9",
    borderRadius: 5,
  },
  blackCircle: {
    width: 24,
    height: 24,
    backgroundColor: "gray",
    borderRadius: 12,
  },
  separator: {
    width: 1,
    height: 24,
    backgroundColor: "#ddd",
  },
  iconWrapper: {
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
  },
});

export default BottomBar;
