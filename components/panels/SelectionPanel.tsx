import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from "react-native";
import SlideBar from "../reuseComponents/SlideBar";
import BrushPlus from "../../assets/images/brushPlus.jpg";
import BrushMinus from "../../assets/images/brushMinus.jpg";

const SelectionPanel = () => {
  const [selectedMode, setSelectedMode] = useState("plus"); // "plus" hoặc "minus"
  const [size, setSize] = useState(40); // Giá trị size

  return (
    <View style={styles.container}>
      <View style={styles.modeRow}>
        <Text style={styles.label}>Mode</Text>
        <View style={styles.modeContainer}>
          {/* Brush Plus Button */}
          <TouchableOpacity
            style={[
              styles.modeButton,
              selectedMode === "plus" && styles.selectedButton,
            ]}
            onPress={() => setSelectedMode("plus")}
          >
            <Image source={BrushPlus} style={styles.icon} />
          </TouchableOpacity>

          {/* Brush Minus Button */}
          <TouchableOpacity
            style={[
              styles.modeButton,
              selectedMode === "minus" && styles.selectedButton,
            ]}
            onPress={() => setSelectedMode("minus")}
          >
            <Image source={BrushMinus} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Size Slider */}
      <View style={styles.sliderContainer}>
        <SlideBar
          label="Size"
          minimumValue={10}
          maximumValue={100}
          initialValue={size}
          fixedPoint={0}
          step={1}
          isPercent={false} // nếu không cần hiển thị dạng phần trăm, đặt false
          onValueChange={(value) => setSize(value)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute", // Định vị tuyệt đối
    bottom: 90, // Đưa xuống gần bottom bar
    backgroundColor: "white",
    padding: 16,
    borderRadius: 10,
    width: '85%', // Điều chỉnh chiều rộng phù hợp
    elevation: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  modeRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  modeContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F7F7F7",
    padding: 4, // Giảm padding để sát với thiết kế
    borderRadius: 10, // Bo tròn nhẹ giống thiết kế
    width: "80%",
  },
  modeButton: {
    width: "50%", // Điều chỉnh chiều rộng để tạo hình chữ nhật
    aspectRatio:2, // Chiều cao vừa phải để nút không quá to
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6, // Bo tròn nhẹ

  },
  selectedButton: {
    backgroundColor: "white", // Màu nền khi được chọn
  },
  icon: {
    width: 24,
    height: 24,
  },
  sizeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  sizeInput: {
    width: 50,
    height: 32,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginRight: 10,
    fontSize: 16,
  }  ,
  sliderContainer: {
    alignItems: "center",
  },
});

export default SelectionPanel;
