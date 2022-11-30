import { TouchableHighlight, View } from "react-native";
import Text from "../components/core/Text";
const RepositoryItem = ({ item, separators }) => (
  <TouchableHighlight
    key={item.key}
    onPress={() => this._onPress(item)}
    onShowUnderlay={separators.highlight}
    onHideUnderlay={separators.unhighlight}
  >
    <View style={{ backgroundColor: "white" }}>
      <Text>Full name: {item.fullName}</Text>
      <Text>Description: {item.description}</Text>
      <Text>Language: {item.language}</Text>
      <Text>Stars: {item.forksCount}</Text>
      <Text>Forks: {item.stargazersCount}</Text>
      <Text>Reviews: {item.ratingAverage}</Text>
      <Text>Rating: {item.reviewCount}</Text>
    </View>
  </TouchableHighlight>
);
export default RepositoryItem;
