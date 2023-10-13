import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Icon } from 'react-native';
import { Colors } from './color';

// Button
const Button = ({ title, onPress, icon, size, type, iconPosition }) => {
  const BtnStyle = (type) => {
    switch (type) {
      case 'Primary':
        return {
          btnType: [ButtonStyle.Primary],
          btnTxt: [ButtonStyle.PrimaryTxt],
          btnIcon: [ButtonStyle.PrimaryIcon],
        };
      case 'Primary_r':
        return {
          btnType: [ButtonStyle.Primary, ButtonStyle.roundBtn],
          btnTxt: [ButtonStyle.PrimaryTxt],
          btnIcon: [ButtonStyle.PrimaryIcon],
        };
      case 'Secondary':
        return {
          btnType: [ButtonStyle.Secondary],
          btnTxt: [ButtonStyle.SecondaryTxt],
          btnIcon: [ButtonStyle.SecondaryIcon],
        };
      case 'Secondary_r':
        return {
          btnType: [ButtonStyle.Secondary, ButtonStyle.roundBtn,],
          btnTxt: [ButtonStyle.SecondaryTxt],
          btnIcon: [ButtonStyle.SecondaryIcon],
        };
      case 'Glass':
        return {
          btnType: [ButtonStyle.Glass],
          btnTxt: [ButtonStyle.GlassTxt],
          btnIcon: [ButtonStyle.PrimaryIcon],
        };
      case 'Glass_r':
        return {
          btnType: [ButtonStyle.Glass, ButtonStyle.roundBtn],
          btnTxt: [ButtonStyle.GlassTxt],
          btnIcon: [ButtonStyle.GlassIcon],
        };
      default:
        return {
          btnType: [ButtonStyle.Primary],
          btnTxt: [ButtonStyle.PrimaryTxt],
          btnIcon: [ButtonStyle.PrimaryIcon],
        };
    }
  };
  const { btnType, btnTxt, btnIcon } = BtnStyle(type);

  const BtnSize = () => {
    switch (size){
      case 'L':
        return ButtonStyle.L;
      case 'M':
        return ButtonStyle.M;
      case 'S':
        return ButtonStyle.S;
      default:
        return ButtonStyle.L;
    }
  };

  return (
    <TouchableOpacity style={[ButtonStyle.btnCommon, BtnSize(), BtnStyle(), ...btnType]} onPress={onPress}>
      {iconPosition === 'left' && icon && (
        <View>{icon}</View>
      )}
      <Text style={[ButtonStyle.btnTxt, ...btnTxt]}>{title}</Text>
      {iconPosition === 'right' && icon && (
        <View>{icon}</View>
      )}
    </TouchableOpacity>
  );
}

const ButtonStyle = StyleSheet.create({
  // common
  btnCommon: {
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    alignSelf: 'flex-start',
  },
  roundBtn: {
    borderRadius: 90,

  },
  btnIcon: {
    width: 16,
  },
  btnTxt: {
    fontSize: 14,
  },

  // size
  L: {
    height: 48,
    paddingHorizontal: 24,
  },
  M: {
    height: 40,
    paddingHorizontal: 20,
  },
  S: {
    height: 32,
    paddingHorizontal: 16,
  },

  // type
  Primary: {
    backgroundColor: Colors.Primary500,
    borderColor: Colors.Primary500,
  },
  PrimaryTxt: {
    color: Colors.Gray100,
  },
  PrimaryIcon: {
    color: Colors.Gray100,
  },

  Secondary: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: Colors.Gray400,
    color: Colors.Gray900,
  },
  SecondaryTxt: {
    color: Colors.Gray900,
  },
  SecondaryIcon: {
    color: Colors.Gray900,
  },

  Glass: {
    backgroundColor: Colors.Base_w16,
  },
  GlassTxt: {
    color: Colors.Gray100,
  },
  GlassIcon: {
    color: Colors.Gray100,
  },
});

// Text Button
const TextButton = ({ title, onPress, icon, size, type, iconPosition }) => {
  const BtnStyle = (type) => {
    switch (type) {
      case 'Tertiary':
        return {
          btnTxt: [TextButtonStyle.Tertiary],
        };
      case 'Quaternary':
        return {
          btnTxt: [TextButtonStyle.Quaternary],
        };
      case 'Gray':
        return {
          btnTxt: [TextButtonStyle.Gray],
        };
      default:
        return {
          btnTxt: [TextButtonStyle.Tertiary],
        };
    }
  }
  const { btnTxt } = BtnStyle(type);

  const BtnSize = () => {
    switch (size){
      case 'L':
        return TextButtonStyle.L;
      case 'M':
        return TextButtonStyle.M;
      case 'S':
        return TextButtonStyle.S;
      case 'XS':
        return [TextButtonStyle.S, TextButtonStyle.txtBtnXS];
      default:
        return TextButtonStyle.L;
    }
  };

   return (
      <TouchableOpacity style={[TextButtonStyle.txtBtnCommon, BtnStyle()]} onPress={onPress} >
        {iconPosition === 'left' && icon && (
          <View>{icon}</View>
        )}
        <Text style={[TextButtonStyle.txtBtnTxt, BtnSize(), ...btnTxt]}>{title}</Text>
        {iconPosition === 'right' && icon && (
          <View>{icon}</View>
        )}
      </TouchableOpacity>
   );
}

const TextButtonStyle = StyleSheet.create({
  // common
  txtBtnCommon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    alignSelf: 'flex-start',
  },
  txtBtnTxt: {
    fontSize: 14,
  },
  txtBtnXS: {
    fontSize: 12,
  },

  // size
  L:{
    height: 48,
    paddingHorizontal: 16,
  },
  M:{
    height: 32,
    paddingHorizontal: 16,
  },
  S:{
    height: 24,
    paddingHorizontal: 4,
  },

  // type
  Tertiary: {
    color: Colors.Primary500,
  },
  Quaternary: {
    color: Colors.Gray900,
  },
  Gray: {
    color: Colors.Gray600,
  },
});

const IconButton = ({ title, onPress, icon, size, type }) => {
  const BtnStyle = (type) => {
      switch (type) {
        case 'Primary':
          return {
            btnType: [IconButtonStyle.Primary],
            btnIcon: [IconButtonStyle.PrimaryIcon],
          };
        case 'Secondary':
          return {
            btnType: [IconButtonStyle.Secondary],
            btnIcon: [IconButtonStyle.SecondaryIcon],
          };
        case 'Tertiary':
          return {
            btnType: [IconButtonStyle.Tertiary],
            btnIcon: [IconButtonStyle.TertiaryIcon],
          };
        case 'Quaternary':
            return {
              btnType: [IconButtonStyle.Quaternary],
              btnIcon: [IconButtonStyle.QuaternaryIcon],
            };
        default:
          return {
            btnType: [IconButtonStyle.Primary],
            btnIcon: [IconButtonStyle.PrimaryIcon],
          };
      }
    };
    const { btnType, btnIcon } = BtnStyle(type);

    const BtnSize = () => {
      switch (size){
        case 'L':
          return IconButtonStyle.L;
        case 'M':
          return IconButtonStyle.M;
        case 'S':
          return IconButtonStyle.S;
        default:
          return IconButtonStyle.L;
      }
    };

    return (
      <TouchableOpacity style={[IconButtonStyle.iconBtnCommon, BtnSize(), BtnStyle(), ...btnType]} onPress={onPress}>
        <View>{icon}</View>
      </TouchableOpacity>
    );
}

const IconButtonStyle = StyleSheet.create({
  // common
  iconBtnCommon: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    borderRadius: '50%',
  },

  // size
  L:{
    width: 48,
    height: 48,
  },
  M:{
    width: 32,
    height: 32,
  },
  S:{
    width: 24,
    height: 24,
  },

  // type
  Primary: {
    backgroundColor: Colors.Primary500,
  },
  PrimaryIcon: {
    color: Colors.Primary500,
  },
  Secondary: {
    borderColor: Colors.Gray400,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  SecondaryIcon: {
    color: Colors.Primary500,
  },
  Tertiary: {
    color: Colors.Primary500,
  },
  TertiaryIcon: {
    color: Colors.Primary500,
  },
  Quaternary: {
    color: Colors.Gray900,
  },
  QuaternaryIcon: {
    color: Colors.Gray900,
  },
});

export {
  Button,
  TextButton,
  IconButton,
};
