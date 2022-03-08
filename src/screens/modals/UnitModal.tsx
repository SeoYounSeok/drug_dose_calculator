import React from "react";
import { View, StyleSheet } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";

const UnitModal = () => {
  const tableHead = ["단위 환산", null];
  const tableData = [
    ["1kg", "1000g"],
    ["1g", "1000mg"],
    ["1mg", "1000mcg"],
    ["1mcg", "1000ng"],
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

export default UnitModal;
