import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  SafeAreaView,
} from "react-native";
import { windowHeight, windowWidth } from "../utils/Dimensions";
import RNPickerSelect from "react-native-picker-select";
import Modal from "react-native-modal";
import UnitModal from "./modals/UnitModal";
import MathModal from "./modals/MathModal";

const DrugCalculator = () => {
  const [milliliter, setMilliliter] = useState<number>(0);
  const [selectDoseUnit, setSelectDoseUnit] = useState<string>("");
  const [selectTimeUnit, setSelectTimeUnit] = useState<string>("");

  const [weight, setWeight] = useState<number>(0);
  const [selectWeight, setSelectWeight] = useState<string>("");

  const [numerator, setNumerator] = useState<number>(0);
  const [selectNumerator, setSelectNumerator] = useState<string>("");
  const [denominator, setDenominator] = useState<number>(0);
  const [selectDenominator, setSelectDenominator] = useState<string>("");

  const [dropPerMinute, setDropPerMinute] = useState<number>(0);
  const [dropPerMinuteUnit, setDropPerMinuteUnit] = useState<string>("");

  const [isUnitModalVisible, setUnitModalVisible] = useState(false);
  const [isMathModalVisible, setMathModalVisible] = useState(false);

  const toggleUnitModal = () => {
    setUnitModalVisible(!isUnitModalVisible);
  };

  const toggleMathModal = () => {
    setMathModalVisible(!isMathModalVisible);
  };
  useEffect(() => {
    let result: number =
      (milliliter * weight * 60) / ((numerator / denominator) * 1000);
    if (
      selectDoseUnit == "" ||
      selectTimeUnit == "" ||
      selectWeight == "" ||
      selectNumerator == "" ||
      selectDenominator == "" ||
      dropPerMinuteUnit == "" ||
      !result
    ) {
      setDropPerMinute(0);
      return;
    }
    {
      selectDoseUnit == "ng/kg"
        ? (result /= 1000)
        : selectDoseUnit == "mcg/kg"
        ? (result *= 1)
        : selectDoseUnit == "mg/kg"
        ? (result *= 1000)
        : selectDoseUnit == "grams/kg"
        ? (result *= 1000000)
        : null;
    }
    {
      selectTimeUnit == "min"
        ? (result *= 1)
        : selectTimeUnit == "hr"
        ? (result /= 60)
        : selectTimeUnit == "day"
        ? (result /= 1440)
        : null;
    }
    {
      selectWeight == "kg"
        ? (result *= 1)
        : selectWeight == "grams"
        ? (result /= 1000)
        : selectWeight == "lbs"
        ? (result *= 0.45359237)
        : null;
    }
    {
      selectNumerator == "mcg"
        ? (result *= 1000)
        : selectNumerator == "mg"
        ? (result *= 1)
        : selectNumerator == "grams"
        ? (result /= 1000)
        : selectNumerator == "units"
        ? (result *= 1)
        : selectNumerator == "nanograms"
        ? (result *= 1000000)
        : null;
    }
    {
      selectDenominator == "cc"
        ? (result *= 1)
        : selectDenominator == "liters"
        ? (result *= 1000)
        : null;
    }
    {
      dropPerMinuteUnit == "cc/hr"
        ? (result *= 1)
        : dropPerMinuteUnit == "cc/min"
        ? (result /= 60)
        : dropPerMinuteUnit == "cc/day"
        ? (result *= 24)
        : null;
    }
    setDropPerMinute(result);
  }, [
    milliliter,
    weight,
    denominator,
    numerator,
    selectDoseUnit,
    selectTimeUnit,
    selectWeight,
    selectNumerator,
    selectDenominator,
    dropPerMinuteUnit,
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MEDCALC : 약물 용량 계산기</Text>
      <View style={styles.btnRow}>
        <TouchableOpacity onPress={toggleUnitModal}>
          <Text style={styles.btnTitle}>단위 설명서</Text>
        </TouchableOpacity>
        <Modal isVisible={isUnitModalVisible}>
          <View style={{ backgroundColor: "#ffffff" }}>
            <UnitModal />
            <TouchableOpacity onPress={toggleUnitModal}>
              <Text style={styles.btnTitle}>닫기</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <TouchableOpacity onPress={toggleMathModal}>
          <Text style={styles.btnTitle}>수식 설명서</Text>
        </TouchableOpacity>
        <Modal isVisible={isMathModalVisible}>
          <SafeAreaView style={{ backgroundColor: "#ffffff" }}>
            <MathModal />
            <TouchableOpacity onPress={toggleMathModal}>
              <Text style={styles.btnTitle}>닫기</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </Modal>
      </View>
      <View style={styles.row}>
        <Text style={styles.subtitle}>Dose : </Text>
        <View>
          <View style={styles.row}>
            <TextInput
              style={styles.input}
              value={milliliter.toString()}
              onChangeText={(unit) => setMilliliter(Number(unit))}
              placeholder=""
              keyboardType="numeric"
            />
            <RNPickerSelect
              textInputProps={{ underlineColorAndroid: "transparent" }}
              onValueChange={(value) => {
                setSelectDoseUnit(value);
              }}
              value={selectDoseUnit}
              placeholder={{ label: "단위", value: "" }}
              items={[
                { label: "ng/kg", value: "ng/kg" },
                { label: "mcg/kg", value: "mcg/kg" },
                { label: "mg/kg", value: "mg/kg" },
                { label: "grams/kg", value: "grams/kg" },
              ]}
              style={pickerSelectStyles}
            />
          </View>
          <Text
            style={{
              width: windowWidth * 0.5,
              height: 0.5,
              borderWidth: 1,
            }}
          ></Text>
          <View style={styles.row}>
            <TextInput
              style={styles.input}
              value="1"
              editable={false}
              keyboardType="numeric"
            />
            <RNPickerSelect
              onValueChange={(value) => {
                setSelectTimeUnit(value);
              }}
              value={selectTimeUnit}
              placeholder={{ label: "단위", value: "" }}
              items={[
                { label: "min", value: "min" },
                { label: "hr", value: "hr" },
                { label: "day", value: "day" },
              ]}
              style={pickerSelectStyles}
            />
          </View>
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.subtitle}>Weight : </Text>
        <TextInput
          style={styles.input}
          value={weight.toString()}
          onChangeText={(unit) => setWeight(Number(unit))}
          keyboardType="numeric"
        />
        <RNPickerSelect
          onValueChange={(value) => {
            setSelectDenominator(value);
          }}
          value={selectDenominator}
          placeholder={{ label: "단위", value: "" }}
          items={[
            { label: "kg", value: "kg" },
            { label: "grams", value: "grams" },
            { label: "lbs", value: "lbs" },
          ]}
          style={pickerSelectStyles}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.subtitle}>Concentration : </Text>
        <View>
          <View style={styles.row}>
            <TextInput
              style={styles.input}
              value={numerator.toString()}
              onChangeText={(unit) => setNumerator(Number(unit))}
              keyboardType="numeric"
            />
            <RNPickerSelect
              onValueChange={(value) => {
                setSelectWeight(value);
              }}
              value={selectWeight}
              placeholder={{ label: "단위", value: "" }}
              items={[
                { label: "mcg", value: "mcg" },
                { label: "mg", value: "mg" },
                { label: "grams", value: "grams" },
                { label: "units", value: "units" },
                { label: "nanograms", value: "nanograms" },
              ]}
              style={pickerSelectStyles}
            />
          </View>
          <Text
            style={{
              width: windowWidth * 0.5,
              height: 1,
              borderWidth: 1,
            }}
          ></Text>
          <View style={styles.row}>
            <TextInput
              style={styles.input}
              value={denominator.toString()}
              onChangeText={(unit) => setDenominator(Number(unit))}
              keyboardType="numeric"
            />
            <RNPickerSelect
              onValueChange={(value) => {
                setSelectNumerator(value);
              }}
              value={selectNumerator}
              placeholder={{ label: "단위", value: "" }}
              items={[
                { label: "cc", value: "cc" },
                { label: "liters", value: "liters" },
              ]}
              style={pickerSelectStyles}
            />
          </View>
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.resultTitle}>IV Rate : </Text>
        <Text style={styles.input}>{dropPerMinute}</Text>
        <RNPickerSelect
          onValueChange={(value) => {
            setDropPerMinuteUnit(value);
          }}
          value={dropPerMinuteUnit}
          placeholder={{ label: "단위", value: "" }}
          items={[
            { label: "cc/hr", value: "cc/hr" },
            { label: "cc/min", value: "cc/min" },
            { label: "cc/day", value: "cc/day" },
          ]}
          style={pickerSelectStyles}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1.9,
    width: windowWidth,
    height: windowHeight,
    backgroundColor: "#f9f9f9",
    alignContent: "center",
    justifyContent: "space-evenly",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  btnRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    marginBottom: 30,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 20,
    width: windowWidth / 2.5,
  },
  btnTitle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    borderColor: "blue",
    borderWidth: 2,
    padding: 8,
    backgroundColor: "blue",
    color: "#ffffff",
  },
  resultTitle: {
    textAlign: "center",
    fontSize: 25,
    color: "blue",
    width: windowWidth / 2.5,
  },
  input: {
    height: 40,
    width: 70,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    margin: 12,
    fontSize: 16,
    height: 40,
    width: 80,
    color: "#000000",
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 12,
    padding: 10,
  },
  inputAndroid: {
    marginTop: 5,
    fontSize: 16,
    height: 40,
    width: 150,
    color: "#000000",
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 12,
    padding: 10,
  },
});
export default DrugCalculator;
