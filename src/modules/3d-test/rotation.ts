export const rp = (n: number) => Math.ceil((((n * 100) % 630) / 630) * 100)

export type Direction = 'DL' | 'UL' | 'UR' | 'DR' | 'D'

const UL = 49.2
const DL_UR = 74.6
const UR_DL = 25.4

export function dir(n: number): Direction {
  const p = rp(n)

  if (p > DL_UR) return 'DL'
  if (p > UL) return 'UL'
  if (p > UR_DL) return 'UR'
  if (p > 0) return 'DR'
  if (p === 0 || p === -0) return 'D'
  console.log(n, p)
  if (p > -UR_DL) return 'DL'
  if (p > -UL) return 'UL'
  if (p > -DL_UR) return 'UR'
  if (p >= -100) return 'DR'

  return 'DL'
}
