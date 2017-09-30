import type { ProfileType, UserDataType } from '../../../../src/services/firebase/types'

export const profileFixture: ProfileType = {
  name: 'duduzinho',
  contact: {
    kind: 'carta',
    value: 'Rua dos bobos, Numero zero',
    uid: 'uid'
  }
}

export const userDataFixture: UserDataType = {
  uid: 'userId',
  emailVerified: true,
  email: 'amor@da.saudade',
  phoneNumber: null
}
