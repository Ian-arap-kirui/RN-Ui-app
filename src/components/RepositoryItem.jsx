import { Image, TouchableHighlight, View } from "react-native";
import Text from "../components/core/Text";
import RepositoryCard from "./RepositoryCard";
const RepositoryItem = ({ item, separators }) => (
  <TouchableHighlight
    key={item.key}
    // onPress={() => this._onPress(item)}
    onShowUnderlay={separators.highlight}
    onHideUnderlay={separators.unhighlight}
  >
    <RepositoryCard item={item} />
  </TouchableHighlight>
);
export default RepositoryItem;
