import { create } from "zustand";

import { questionsSlice } from "./questionsSlice";
import { aboutSlice } from "./aboutSlice";

export const useStore = create((...props) => ({
  ...questionsSlice(...props),
  ...aboutSlice(...props),
}));
