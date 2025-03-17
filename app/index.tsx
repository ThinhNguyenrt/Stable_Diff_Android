import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Header from "../components/reuseComponents/Header";
import BottomBar from "../components/reuseComponents/BottomBar";
import { useState } from "react";
import SelectionPanel from '../components/panels/SelectionPanel';
import SegmentPanel from '../components/panels/SegmentPanel';
export default function HomeScreen() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* Hiển thị nội dung dựa vào tool đã chọn */}
        {selectedTool === "selection" && <SelectionPanel />}
        {selectedTool === "segment" && <SegmentPanel />}
      </View>
      <BottomBar onSelectTool={setSelectedTool} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
