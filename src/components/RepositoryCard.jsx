import { Image, StyleSheet, View } from "react-native";
import Text from "./core/Text";
const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    // height: 250,
    padding: 20,
  },
  top: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  topTxt: {
    marginLeft: 20,
    display: "flex",
    height: 100,
    alignItems: "flex-start",
    justifyContent: "space-around",
  },
  language: {
    backgroundColor: "#0366d6",

    padding: 5,
    borderRadius: 4,
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  img: { width: 70, height: 70, borderRadius: 8, alignSelf: "flex-start" },
  bottom: {
    paddingTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  countContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});
const RepositoryCard = ({ item }) => {
  const kFormatter = (num) => {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
      : Math.sign(num) * Math.abs(num);
  };
  return (
    <View style={styles.card}>
      <View style={styles.top}>
        <Image
          resizeMode={"cover"}
          source={{ uri: item.ownerAvatarUrl }}
          style={styles.img}
        />
        <View style={styles.topTxt}>
          <Text fontWeight="bold"> {item.fullName}</Text>
          <Text> {item.description}</Text>
          <Text style={styles.language}>{item.language}</Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.countContainer}>
          <Text fontWeight="bold">{kFormatter(item.forksCount)}</Text>
          <Text>Stars </Text>
        </View>
        <View style={styles.countContainer}>
          <Text fontWeight="bold"> {kFormatter(item.stargazersCount)}</Text>
          <Text>Forks </Text>
        </View>
        <View style={styles.countContainer}>
          <Text fontWeight="bold"> {kFormatter(item.ratingAverage)}</Text>
          <Text>Reviews</Text>
        </View>
        <View style={styles.countContainer}>
          <Text fontWeight="bold"> {kFormatter(item.reviewCount)}</Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
  );
};
export default RepositoryCard;
