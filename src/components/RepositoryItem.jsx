import { Text, TouchableHighlight, View } from "react-native";

const RepositoryItem = ({ item, separators }) => (
  <TouchableHighlight
    key={item.key}
    onPress={() => this._onPress(item)}
    onShowUnderlay={separators.highlight}
    onHideUnderlay={separators.unhighlight}
  >
    <View style={{ backgroundColor: "white" }}>
      <Text>{item.fullName}</Text>
      <Text>{item.description}</Text>
      <Text>{item.language}</Text>
      <Text>{item.forksCount}</Text>
      <Text>{item.stargazersCount}</Text>
      <Text>{item.ratingAverage}</Text>
      <Text>{item.reviewCount}</Text>
    </View>
  </TouchableHighlight>
);
export default RepositoryItem;
