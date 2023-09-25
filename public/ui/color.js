import { StyleSheet } from 'react-native';
import styled, { css } from 'styled-components/native';

// text colors
const common_colors = {
  base_w: css`
    color: #FFFFFF;
  `,
  base_w_trans: css`
    color: #F8F9FA;
  `,
  base_bkf: css`
    color: #000000;
  `,
  base_bk_trans: css`
    color: #263747;
  `,
  primary_gr: css`
    color: #26B388;
  `,
};

const base_wf = styled.Text`
  ${common_colors.base_w}
`;

const base_w40 = styled.Text`
  ${common_colors.base_w_trans}
  opacity: 0.4;
`;

const base_w32 = styled.Text`
  ${common_colors.base_w_trans}
  opacity: 0.32;
`;

const base_w24 = styled.Text`
  ${common_colors.base_w_trans}
  opacity: 0.24;
`;

const base_w16 = styled.Text`
  ${common_colors.base_w_trans}
  opacity: 0.16;
`;

const base_w8 = styled.Text`
  ${common_colors.base_w_trans}
  opacity: 0.08;
`;

const base_bk85 = styled.Text`
  ${common_colors.base_bk_trans}
  color: #1F262D;
  opacity: 0.85;
`;

const base_bk40 = styled.Text`
  ${common_colors.base_bk_trans}
  opacity: 0.4;
`;

const base_bk32 = styled.Text`
  ${common_colors.base_bk_trans}
  opacity: 0.32;
`;

const base_bk24 = styled.Text`
  ${common_colors.base_bk_trans}
  opacity: 0.24;
`;

const base_bk16 = styled.Text`
  ${common_colors.base_bk_trans}
  opacity: 0.16;
`;

const base_bk8 = styled.Text`
  ${common_colors.base_bk_trans}
  opacity: 0.08;
`;

const gray_scale = StyleSheet.create({
  gray950: {
    color: '#212529',
  },
  gray900: {
    color: '#343A40',
  },
  gray800: {
    color: '#495057',
  },
  gray700: {
    color: '#666E75',
  },
  gray600: {
    color: '#ADB5BD',
  },
  gray500: {
    color: '#CED4DA',
  },
  gray400: {
    color: '#DEE2E6',
  },
  gray300: {
    color: '#E9ECEF',
  },
  gray200: {
    color: '#212529',
  },
  gray100: {
    color: '#F8F9FA',
  },
});

const primary = StyleSheet.create({
  green700: {
    color: '#16684F',
  },
  green600: {
    color: '#1A7B5E',
  },
  green500: {
    color: '#219A75',
  },
  green400: {
    color: '#26B388',
  },
  green300: {
    color: '#5DD0AD',
  },
});

const primary_g88 = styled.Text`
  ${common_colors.primary_gr}
  opacity: 0.88;
`;

const primary_g80 = styled.Text`
  ${common_colors.primary_gr}
  opacity: 0.8;
`;

const primary_g72 = styled.Text`
  ${common_colors.primary_gr}
  opacity: 0.72;
`;

const primary_g64 = styled.Text`
  ${common_colors.primary_gr}
  opacity: 0.08;
`;

const primary_g56 = styled.Text`
  ${common_colors.primary_gr}
  opacity: 0.56;
`;

const primary_g48 = styled.Text`
  ${common_colors.primary_gr}
  opacity: 0.48;
`;

const primary_g40 = styled.Text`
  ${common_colors.primary_gr}
  opacity: 0.40;
`;

const primary_g32 = styled.Text`
  ${common_colors.primary_gr}
  opacity: 0.32;
`;

const primary_g24 = styled.Text`
  ${common_colors.primary_gr}
  opacity: 0.24;
`;

const primary_g16 = styled.Text`
  ${common_colors.primary_gr}
  opacity: 0.16;
`;

const primary_g8 = styled.Text`
  ${common_colors.primary_gr}
  opacity: 0.8;
`;

// background colors
const bg_base_w = StyleSheet.create({
  base_wf: {
    backgroundColor: common_colors.base_w,
  },
  base_w40: {
    backgroundColor: common_colors.base_w_trans,
    opacity: 0.4,
  },
  base_w32: {
    backgroundColor: common_colors.base_w_trans,
    opacity: 0.32,
  },
  base_w24: {
    backgroundColor: common_colors.base_w_trans,
    opacity: 0.24,
  },
  base_w16: {
    backgroundColor: common_colors.base_w_trans,
    opacity: 0.16,
  },
  base_w8: {
    backgroundColor: common_colors.base_w_trans,
    opacity: 0.08,
  },
});

const bg_base_bk = StyleSheet.create({
  base_bkf: {
    backgroundColor: common_colors.base_bkf,
  },
  base_bk85: {
    backgroundColor: #1F262D,
  },
  base_bk40: {
    backgroundColor: common_colors.base_bk_trans,
    opacity: 0.4,
  },
  base_bk32: {
    backgroundColor: common_colors.base_bk_trans,
    opacity: 0.32,
  },
  base_bk24: {
    backgroundColor: common_colors.base_bk_trans,
    opacity: 0.24,
  },
  base_bk16: {
    backgroundColor: common_colors.base_bk_trans,
    opacity: 0.16,
  },
  base_bk8: {
    backgroundColor: common_colors.base_bk_trans,
    opacity: 0.08,
  },
});

const bg_gray_scale = StyleSheet.create({
  gray950: {
    backgroundColor: '#212529',
  },
  gray900: {
    backgroundColor: '#343A40',
  },
  gray800: {
    backgroundColor: '#495057',
  },
  gray700: {
    backgroundColor: '#666E75',
  },
  gray600: {
    backgroundColor: '#ADB5BD',
  },
  gray500: {
    backgroundColor: '#CED4DA',
  },
  gray400: {
    backgroundColor: '#DEE2E6',
  },
  gray300: {
    backgroundColor: '#E9ECEF',
  },
  gray200: {
    backgroundColor: '#212529',
  },
  gray100: {
    backgroundColor: '#F8F9FA',
  },
});

const bg_primary = StyleSheet.create({
  green700: {
    backgroundColor: '#16684F',
  },
  green600: {
    backgroundColor: '#1A7B5E',
  },
  green500: {
    backgroundColor: '#219A75',
  },
  green400: {
    backgroundColor: '#26B388',
  },
  green300: {
    backgroundColor: '#5DD0AD',
  },
  green88: {
    backgroundColor: common_colors.primary_gr,
    opacity: 0.88;
  },
  green80: {
    backgroundColor: common_colors.primary_gr,
    opacity: 0.80;
  },
  green72: {
    backgroundColor: common_colors.primary_gr,
    opacity: 0.72;
  },
  green64: {
    backgroundColor: common_colors.primary_gr,
    opacity: 0.64;
  },
  green56: {
    backgroundColor: common_colors.primary_gr,
    opacity: 0.56;
  },
  green48: {
    backgroundColor: common_colors.primary_gr,
    opacity: 0.48;
  },
  green40: {
    backgroundColor: common_colors.primary_gr,
    opacity: 0.40;
  },
  green32: {
    backgroundColor: common_colors.primary_gr,
    opacity: 0.32;
  },
  green24: {
    backgroundColor: common_colors.primary_gr,
    opacity: 0.24;
  },
  green16: {
    backgroundColor: common_colors.primary_gr,
    opacity: 0.16;
  },
  green8: {
    backgroundColor: common_colors.primary_gr,
    opacity: 0.08;
  },
});

export const styles = {
  base_wf,
  base_w40,
  base_w32,
  base_w24,
  base_w16,
  base_w8,
  base_bkf,
  base_bk85,
  base_bk40,
  base_bk32,
  base_bk24,
  base_bk16,
  base_bk8,
  gray_scale,
  primary,
  primary_g88,
  primary_g80,
  primary_g72,
  primary_g64,
  primary_g56,
  primary_g48,
  primary_g40,
  primary_g32,
  primary_g24,
  primary_g16,
  primary_g8,
};

