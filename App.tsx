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

  const [result, setResult] = useState(0);
  const [calculation, setCalculation] = useState<any>("");
  const operations = ["+", "-", "×", "÷"];

  const updateCalc = (calc: string | number) => {
    if (calculation.split("").pop() == "%" && calc != "=") {
      return setCalculation((prevState: any) => prevState + "×" + calc);
    }
    calc == "="
      ? calculateResult()
      : setCalculation((prevState: any) => prevState + calc);
  };

  const formatCalc = () => {
    let formatCalculation: string = calculation;
    const isPercent = formatCalculation.indexOf("%");
    const isMultiple = formatCalculation.indexOf("×");
    const isDivision = formatCalculation.indexOf("÷");
    if (isPercent != -1) {
      formatCalculation = formatCalculation.replace(/%/gi, "/100");
    }
    if (isMultiple != -1) {
      formatCalculation = formatCalculation.replace(/×/gi, "*");
    }
    if (isDivision != -1) {
      formatCalculation = formatCalculation.replace(/÷/gi, "/");
    }
    return formatCalculation;
  };

  const calculateResult = () => {
    if (!calculation) {
      return;
    }
    if (operations.includes(calculation.split("").pop())) {
      return;
    }
    setResult(new Function("return " + formatCalc())());
  };

  const updateOperation = (operation: string) => {
    if (operation == "AC") {
      setResult(0);
      setCalculation("");
      return;
    }
    if (operation == "C") {
      return setCalculation(
        calculation.toString().substring(0, calculation.length - 1)
      );
    }
    if (!calculation) {
      return setCalculation((prevState: any) => prevState + "0" + operation);
    }

    if (operations.includes(calculation.split("").pop())) {
      setCalculation((prestate: any) =>
        prestate.substring(0, calculation.length - 1)
      );
    }
    setCalculation((prevState: any) => prevState + operation);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.switchBox}>
        <Switch
          trackColor={{ false: "#767577", true: "#fffff" }}
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
  container: {
    flex: 2,
    width: windowWidth,
    height: windowHeight,
    backgroundColor: "#373ad4",
  },
  switchBox: {
    flex: 0.1,
    padding: 10,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  body: {
    flex: 1.9,
  },
  calcularText: {
    alignSelf: "flex-end",
    fontSize: 30,
    color: "#f9f9f9",
  },
  resultText: {
    alignSelf: "flex-end",
    fontSize: 60,
    color: "#f9f9f9",
  },
  btn: {
    width: 75,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  wordText: {
    fontSize: 25,
    color: "#d9964a",
  },
  btnText: {
    fontSize: 25,
    color: "#f9f9f9",
  },
  btnRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  btnBox: {
    flex: 1.2,
    padding: 10,
    justifyContent: "space-evenly",
  },
  valueBox: {
    justifyContent: "flex-end",
    flex: 0.7,
    padding: 10,
  },
  customBtn: {
    width: 170,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    elevation: 25,
    borderRadius: 10,
    backgroundColor: "#d9964a",
  },
  customText: {
    fontSize: 25,
    color: "#f9f9f9",
  },
});
export default App;
