export function abbrNum (number) {
  const addr = [
    { simbol: 'M', value: 1000000 },
    { simbol: 'mil', value: 1000 }
  ]

  for (let i = 0; i < addr.length; i++) {
    if (number >= addr[i].value) {
      return (number / addr[i].value).toFixed(1) + ` ${addr[i].simbol}`
    }
  }

  return number
}
