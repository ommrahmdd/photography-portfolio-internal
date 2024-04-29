export const aboutSlice = (set) => ({
  statsDrawerOpen: false,

  setStatsDrawerOpen: () =>
    set(() => ({
      statsDrawerOpen: true,
    })),
  setStatsDrawerClose: () =>
    set(() => ({
      statsDrawerOpen: false,
    })),
});
