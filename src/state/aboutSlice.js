export const aboutSlice = (set) => ({
  statsDrawerOpen: false,

  setStatsDrawerOpen: () =>
    set(() => ({
      statsDrawerOpen: true,
    })),
});
