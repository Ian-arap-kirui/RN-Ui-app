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
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
const RepositoryCard = ({ item }) => {
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
        <Text>Stars {item.forksCount}</Text>
        <Text>Forks {item.stargazersCount}</Text>
        <Text>Reviews {item.ratingAverage}</Text>
        <Text>Rating {item.reviewCount}</Text>
      </View>
    </View>
  );
};
export default RepositoryCard;
