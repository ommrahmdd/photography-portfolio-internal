export const aboutSlice = (set) => ({
  statsDrawerOpen: false,
  infoDrawerOpen: false,

  setStatsDrawerOpen: () =>
    set(() => ({
      statsDrawerOpen: true,
    })),
  setStatsDrawerClose: () =>
    set(() => ({
      statsDrawerOpen: false,
    })),

  setInfoDrawerOpen: () =>
    set(() => ({
      infoDrawerOpen: true,
    })),
  setInfoDrawerClose: () =>
    set(() => ({
      infoDrawerOpen: false,
    })),
});
