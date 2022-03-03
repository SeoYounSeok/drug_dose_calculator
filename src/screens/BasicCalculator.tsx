import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { windowHeight, windowWidth } from "../utils/Dimensions";

const BasicCalculator = ({ navigation }: any) => {
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
    <View style={styles.container}>
      <View style={styles.valueBox}>
        <Text style={styles.calcularText}>{calculation}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.btnBox}>
        <View style={styles.btnRow}>
          <TouchableOpacity
            onPress={() => updateOperation("AC")}
            style={styles.btn}
          >
            <Text style={styles.wordText}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => updateOperation("C")}
            style={styles.btn}
          >
            <Text style={styles.wordText}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => updateOperation("%")}
            style={styles.btn}
          >
            <Text style={styles.wordText}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => updateOperation("÷")}
            style={styles.btn}
          >
            <Text style={styles.wordText}>÷</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnRow}>
          <TouchableOpacity onPress={() => updateCalc(7)} style={styles.btn}>
            <Text style={styles.btnText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => updateCalc(8)} style={styles.btn}>
            <Text style={styles.btnText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => updateCalc(9)} style={styles.btn}>
            <Text style={styles.btnText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => updateOperation("×")}
            style={styles.btn}
          >
            <Text style={styles.wordText}>×</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnRow}>
          <TouchableOpacity onPress={() => updateCalc(4)} style={styles.btn}>
            <Text style={styles.btnText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => updateCalc(5)} style={styles.btn}>
            <Text style={styles.btnText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => updateCalc(6)} style={styles.btn}>
            <Text style={styles.btnText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => updateOperation("-")}
            style={styles.btn}
          >
            <Text style={styles.wordText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnRow}>
          <TouchableOpacity onPress={() => updateCalc(1)} style={styles.btn}>
            <Text style={styles.btnText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => updateCalc(2)} style={styles.btn}>
            <Text style={styles.btnText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => updateCalc(3)} style={styles.btn}>
            <Text style={styles.btnText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => updateOperation("+")}
            style={styles.btn}
          >
            <Text style={styles.wordText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnRow}>
          <TouchableOpacity onPress={() => updateCalc("0")} style={styles.btn}>
            <Text style={styles.btnText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => updateOperation(".")}
            style={styles.btn}
          >
            <Text style={styles.btnText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => updateCalc("=")}
            style={styles.customBtn}
          >
            <Text style={styles.customText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1.9,
    width: windowWidth,
    height: windowHeight,
    backgroundColor: "#373ad4",
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

export default BasicCalculator;
