export default function flightDurationFromDates(departureDate, arrivalDate) {
  const durationMs = new Date(arrivalDate) - new Date(departureDate)

  const durationHours = durationMs / (1000 * 60 * 60)

  const fullHours = Math.floor(durationHours)

  const minutes = Math.floor(((+durationHours - +fullHours) * 100).toFixed() / 100 * 60)


  return `${fullHours} ч ${minutes} мин`
}