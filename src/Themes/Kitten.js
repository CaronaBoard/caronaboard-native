import {RkConfig} from 'react-native-ui-kitten'

const setup = () => {
  RkConfig.setColor('lightGray', RkConfig.colors.grey300)
  RkConfig.setColor('gray', RkConfig.colors.grey500)
  RkConfig.setColor('darkGray', RkConfig.colors.grey700)
  RkConfig.setColor('primary', RkConfig.colors.blue500)

  RkConfig.setColor('blurText', 'rgba(255,255,255,0.7)')
  RkConfig.setColor('blurTextStrong', 'rgba(255,255,255,0.9)')
  RkConfig.setColor('blurBg', 'rgba(0,0,0,0.1)')
  RkConfig.setColor('blurBgWhite', 'rgba(255,255,255,0.1)')
  RkConfig.setColor('blurBg', 'rgba(11,18,38,0.3)')
  RkConfig.setColor('blurBgLight', 'rgba(11,18,38,0.1)')
  RkConfig.setColor('blurBgStrong', 'rgba(11,18,38,0.5)')
  RkConfig.setColor('blurPrimary', '#00e5bf')
  RkConfig.setColor('blurDark', '#15213b')
  RkConfig.setColor('blurExtraDark', '#0b162a')
  RkConfig.setColor('materialGray', '#ECECEC')
  RkConfig.setColor('materialWarning', '#FFC65E')
  RkConfig.setColor('materialBg', '#009688')

  RkConfig.setType('text', 'blurText', {
    color: RkConfig.colors.blurTextStrong
  })
  RkConfig.setType('text', 'primary', {
    color: RkConfig.colors.primary
  })
  RkConfig.setType('text', 'cyan', {
    color: RkConfig.colors.materialBg
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

  RkConfig.setType('separator', 'blur', {
    backgroundColor: RkConfig.colors.blurBgStrong,
    height: 0.5
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

  RkConfig.setType('input', 'classic', {
    input: {
      fontSize: 20,
      color: RkConfig.colors.primary
    },
    container: {
      borderBottomColor: RkConfig.colors.darkGray,
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
      backgroundColor: RkConfig.colors.white
    },
    content: {
      padding: 0,
      backgroundColor: RkConfig.colors.white
    },
    title: {
      fontSize: 16,
      color: RkConfig.colors.primary
    },
    subTitle: {
      fontSize: 12,
      color: RkConfig.colors.gray
    },
    avatarSmall: {
      width: 48,
      height: 48,
      borderRadius: 24
    },
    header: {
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      backgroundColor: RkConfig.colors.white,
      paddingVertical: 10,
      paddingHorizontal: 15
    },
    footer: {
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      backgroundColor: RkConfig.colors.white,
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
      backgroundColor: RkConfig.colors.primary
    },
    icon: {
      fontSize: 27,
      color: RkConfig.colors.primary
    }
  })

  RkConfig.setType('card', 'blur', {
    container: {
      borderRadius: 0,
      marginHorizontal: 0,
      backgroundColor: RkConfig.colors.blurBg,
      shadowOpacity: 0,
      shadowRadius: 0,
      shadowOffset: {
        height: 0,
        width: 0
      }
    },
    content: {
      backgroundColor: RkConfig.colors.blurBg
    },
    title: {
      marginBottom: 3,
      color: RkConfig.colors.blurTextStrong
    },
    subTitle: {
      color: RkConfig.colors.blurText
    },
    header: {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      backgroundColor: RkConfig.colors.blurBg
    },
    footer: {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      backgroundColor: RkConfig.colors.blurBg
    },
    icon: {
      color: 'white'
    },
    sideColor: {
      width: 5,
      marginRight: 10,
      alignSelf: 'stretch',
      borderRadius: 2
    },
    friendItem: {
      paddingLeft: 0
    },
    online: {
      backgroundColor: RkConfig.colors.blurPrimary,
      shadowColor: RkConfig.colors.blurPrimary,
      shadowOpacity: 0.5,
      shadowRadius: 5,
      shadowOffset: {
        height: 0,
        width: 0
      }
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
      color: RkConfig.colors.materialBg
    },
    subTitle: {
      color: RkConfig.colors.materialBg
    },
    icon: {
      color: RkConfig.colors.materialBg
    },
    header: {
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      borderWidth: 0
    },
    footer: {
      borderTopColor: RkConfig.colors.materialGray,
      borderTopWidth: 0.5,
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5
    },
    online: {
      backgroundColor: RkConfig.colors.materialBg
    }
  })

  RkConfig.setType('button', 'materialButton', {
    container: {
      backgroundColor: RkConfig.colors.materialBg
    },
    inner: {
      color: RkConfig.colors.white
    }
  })

  RkConfig.setTheme('blur', {
    text: {
      defaultType: 'montserrat transparentBg blurText'
    },
    card: {
      defaultType: 'classic blur'
    },
    separator: {
      defaultType: 'blur'
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
