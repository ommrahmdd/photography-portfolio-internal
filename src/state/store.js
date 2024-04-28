import { create } from "zustand";

import { questionsSlice } from "./questionsSlice";

export const useStore = create((...props) => ({
  ...questionsSlice(...props),
}));
