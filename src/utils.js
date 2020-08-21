export const formatDate = string => {
  const d = new Date(string)

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  const monthName = months[d.getMonth()]
  const date = d.getDate()
  const year = d.getFullYear()
  return `${monthName} ${date}, ${year}`
}
