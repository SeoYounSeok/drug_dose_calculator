import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Switch,
} from "react-native";
import BasicCalculator from "./src/screens/BasicCalculator";
import DrugCalculator from "./src/screens/DrugCalculator";
import { windowHeight, windowWidth } from "./src/utils/Dimensions";

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <SafeAreaView
      style={isEnabled ? styles.basicContainer : styles.drugContainer}
    >
      <View style={styles.switchBox}>
        <Switch
          trackColor={{ false: "#767577", true: "#6fedb2" }}
          thumbColor={isEnabled ? "#d9964a" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      {isEnabled ? <BasicCalculator /> : <DrugCalculator />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  basicContainer: {
    flex: 2,
    width: windowWidth,
    height: windowHeight,
    backgroundColor: "#373ad4",
  },
  drugContainer: {
    flex: 2,
    width: windowWidth,
    height: windowHeight,
    backgroundColor: "#f9f9f9",
  },
  switchBox: {
    flex: 0.1,
    padding: 10,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});
export default App;
