export default function getTicketTextDate(dateStr) {
  const date = new Date(dateStr)

  const [weekday, day, time] = date
    .toLocaleDateString('ru', {
      day: '2-digit',
      month: 'short',
      weekday: 'short',
      hour: '2-digit',
      minute: '2-digit',
    })
    .split(', ')

  return [
    time,
    `${day} ${weekday}`
  ]
}