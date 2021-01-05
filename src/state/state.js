import { atom } from "recoil";

export const cardArray = atom({
  key: "cardArray", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});
