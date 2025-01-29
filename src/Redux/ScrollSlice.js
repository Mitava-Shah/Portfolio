import { createSlice } from "@reduxjs/toolkit";

const scrollSlice = createSlice({
  name: "scroll",
  initialState: {
    sections: {},
  },
  reducers: {
    setSectionRef: (state, action) => {
      const { name, ref } = action.payload;
      state.sections[name] = ref;
    },
    scrollToSection: (state, action) => {
      const section = state.sections[action.payload];
      if (section && section.current) {
        section.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }
});

export const { setSectionRef, scrollToSection } = scrollSlice.actions;
export default scrollSlice.reducer;
