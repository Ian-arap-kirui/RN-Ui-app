import { StyleSheet, View } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "../components/AppBar";
import theme from "../theme";
import { Navigate, Route, Routes } from "react-router-native";
import SignIn from "./SignIn";
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackground,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/sign-in" element={<SignIn />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
