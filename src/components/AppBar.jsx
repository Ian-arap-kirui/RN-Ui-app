import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import Text from "./core/Text";
import Pressable from "./core/pressable";
import { Link } from "react-router-native";

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
        <Link to="/sign-in">
          <Text fontSize="heading" color="textPrimary">
            Sign in
          </Text>
        </Link>
      </Pressable>
      <Pressable style={styles.appbar} backgroundColor="appBar">
        <Link to="/">
          <Text fontSize="heading" color="textPrimary">
            Repositories
          </Text>
        </Link>
      </Pressable>
    </View>
  );
};

export default AppBar;
