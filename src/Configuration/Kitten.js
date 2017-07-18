import {RkConfig} from 'react-native-ui-kitten'
import {Colors} from '../Modules/Shared/Themes'

const setup = () => {
  RkConfig.setType('text', 'primary', {
    color: Colors.primary
  })
  RkConfig.setType('text', 'cyan', {
    color: Colors.materialBg
  })
  RkConfig.setType('text', 'montserrat', {
    fontFamily: 'Montserrat-Regular'
  })
  RkConfig.setType('text', 'roboto', {
    fontFamily: 'roboto'
  })
  RkConfig.setType('text', 'transparentBg', {
    backgroundColor: 'transparent'
  })

  RkConfig.setType('button', 'iconButton', {
    container: {
      paddingHorizontal: 5,
      paddingVertical: 5
    },
    inner: {
      fontSize: 26
    }
  })

  RkConfig.setTheme('classic', {
    text: {
      defaultType: 'transparentBg primary'
    },
    card: {
      defaultType: 'classic'
    }
  })

  RkConfig.setType('input', 'classic', {
    input: {
      fontSize: 20,
      color: Colors.primary
    },
    container: {
      borderBottomColor: Colors.darkGray,
      marginTop: 40
    },
    label: {
      paddingBottom: 15
    }
  })

  RkConfig.setType('card', 'classic', {
    container: {
      borderRadius: 15,
      marginHorizontal: 10,
      marginTop: 0,
      marginBottom: 15,
      borderWidth: 0,
      backgroundColor: Colors.white
    },
    content: {
      padding: 0,
      backgroundColor: Colors.white
    },
    title: {
      fontSize: 16,
      color: Colors.primary
    },
    subTitle: {
      fontSize: 12,
      color: Colors.gray
    },
    avatarSmall: {
      width: 48,
      height: 48,
      borderRadius: 24
    },
    header: {
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      backgroundColor: Colors.white,
      paddingVertical: 10,
      paddingHorizontal: 15
    },
    footer: {
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      backgroundColor: Colors.white,
      paddingVertical: 10,
      paddingHorizontal: 15
    },
    friendItem: {
      marginHorizontal: 0,
      marginBottom: 0,
      borderRadius: 0,
      borderTopRightRadius: 0,
      borderTopLeftRadius: 0,
      shadowOpacity: 0
    },
    online: {
      width: 8,
      height: 8,
      borderRadius: 4,
      marginLeft: 10,
      alignSelf: 'center',
      backgroundColor: Colors.primary
    },
    icon: {
      fontSize: 27,
      color: Colors.primary
    }
  })

  RkConfig.setType('card', 'materialCard', {
    content: {
      paddingHorizontal: 10,
      paddingVertical: 5
    },
    container: {
      borderRadius: 5,
      borderWidth: 0
    },
    title: {
      color: Colors.materialBg
    },
    subTitle: {
      color: Colors.materialBg
    },
    icon: {
      color: Colors.materialBg
    },
    header: {
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      borderWidth: 0
    },
    footer: {
      borderTopColor: Colors.materialGray,
      borderTopWidth: 0.5,
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5
    },
    online: {
      backgroundColor: Colors.materialBg
    }
  })

  RkConfig.setType('button', 'materialButton', {
    container: {
      backgroundColor: Colors.materialBg
    },
    inner: {
      color: Colors.white
    }
  })

  RkConfig.setTheme('material', {
    text: {
      defaultType: 'transparentBg warning roboto cyan'
    },
    card: {
      defaultType: 'classic material materialCard'
    },
    button: {
      defaultType: 'material materialButton'
    }
  })

  RkConfig.setStyle('backgroundImage', {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'stretch'
  })

  RkConfig.theme = RkConfig.themes.classic
}

export default { setup }
