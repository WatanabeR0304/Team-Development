import { useSelector } from "react-redux";
import { LayoutState } from "./slice";

export const useLayoutState = () => {
  return useSelector((state: { layout: LayoutState }) => state);
};
