import React from "react";
import { View, StyleSheet } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";

const MathModal = () => {
  const tableHead = ["약물계산 공식", null];
  const tableData = [
    ["시간딩 주입량(ml/hr)", "총 주입량(ml)/주입시간(hr)"],
    ["1분당 방울 수(gtt/min)", "시간당 주입량(ml/hr)* 20gtt/60min"],
    ["1방울 점적 시 소요시간(sec/gtt)", "60sec/1분당 방울 수(gtt/min)"],
  ];

  return (
    <View>
      <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
        <Row data={tableHead} style={styles.head} textStyle={styles.text} />
        <Rows data={tableData} textStyle={styles.text} />
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { padding: 10, fontSize: 15 },
});

export default MathModal;
