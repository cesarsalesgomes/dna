export interface TagMeRestaurantReservation {
  reservationDay: string,
  available: boolean
}

export interface TagMeRestaurantInfo {
  availabilities: TagMeRestaurantReservation[]
}
