import { Pressable as NativePressable, StyleSheet } from "react-native";
import theme from "../../theme";
const styles = StyleSheet.create({
  bgColorAppBar: {
    backgroundColor: theme.bgColors.appBar,
  },
});
const Pressable = ({ backgroundColor, style, ...props }) => {
  const pressableStyle = [
    styles.bgColorAppBar,
    backgroundColor === "appbar" && styles.bgColorAppBar,
    style,
  ];
  return <NativePressable style={pressableStyle} {...props} />;
};

export default Pressable;
