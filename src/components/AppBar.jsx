import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import Text from "./core/Text";
import Pressable from "./core/pressable";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    // ...
  },
  appbar: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: Constants.statusBarHeight,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.appbar} backgroundColor="appBar">
        <Text fontSize="heading" color="textPrimary">
          Repositories
        </Text>
      </Pressable>
    </View>
  );
};

export default AppBar;
