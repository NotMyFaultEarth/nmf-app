import { StyleSheet } from "react-native";

import { Colors } from "style";

export default StyleSheet.create({
  default: {
    paddingHorizontal: 36,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  mainIcon: {
    marginRight: 8,
  },
  black: {
    backgroundColor: Colors.grey100,
  },
  red: {
    backgroundColor: Colors.red50,
  },
  fullWidth: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 0,
  },
});
