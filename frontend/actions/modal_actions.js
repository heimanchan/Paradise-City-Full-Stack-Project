export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = (modal, bookingId = null ) => ({
  type: OPEN_MODAL,
  modal,
  bookingId
})

export const closeModal = () => ({
  type: CLOSE_MODAL,
})