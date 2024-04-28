export const questionsSlice = (set) => ({
  isFormDrawerOpen: false,
  dataForEdit: {},
  openDrawer: () =>
    set(() => ({
      isFormDrawerOpen: true,
    })),
  closeDrawer: () =>
    set(() => ({
      isFormDrawerOpen: false,
    })),

  setEditData: ({ isFormDrawerOpen, dataForEdit }) =>
    set(() => ({
      isFormDrawerOpen,
      dataForEdit,
    })),
});
