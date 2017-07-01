import { getAllRides, signIn } from '../../src/Services/Firebase'

describe('Firebase Service', () => {
  it('Should provide all rides as an array of rides', async () => {
    const rides = await getAllRides()
    expect(rides).toHaveLength(3)
    expect(rides[0].destination).toBe('Bomfim')
    expect(rides[1].destination).toBe('Centro')
    expect(rides[2].destination).toBe('Viamao')
  })

  it('Should sign in user', async () => {
    const user = await signIn()
    expect(user.uid).toBe('101')
  })
})
