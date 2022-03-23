/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { fonts } from './src/utils/fonts';

const Section: React.FC<{
  title: string;
}> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
       <Text style={{fontFamily: fonts.notoSansBold,marginTop: 10}}>Noto is a global font collection for writing in all modern and ancient languages. Noto Sans Lao is an unmodulated (“sans serif”) design in the more modern, loopless variant of the Southeast Asian Lao script, mainly suitable for headlines, packaging and advertising. It has multiple weights and widths, and 116 glyphs.</Text>
       <Text style={{fontFamily: fonts.notoSansRegular,marginTop: 10}}>Noto is a global font collection for writing in all modern and ancient languages. Noto Sans Lao is an unmodulated (“sans serif”) design in the more modern, loopless variant of the Southeast Asian Lao script, mainly suitable for headlines, packaging and advertising. It has multiple weights and widths, and 116 glyphs.</Text>
       <Text style={{fontFamily: fonts.notoSansMedium,marginTop: 10}}>Noto is a global font collection for writing in all modern and ancient languages. Noto Sans Lao is an unmodulated (“sans serif”) design in the more modern, loopless variant of the Southeast Asian Lao script, mainly suitable for headlines, packaging and advertising. It has multiple weights and widths, and 116 glyphs.</Text>
       <Text style={{fontFamily: fonts.notoSansBold,marginTop: 20}}>ດ້ວຍເຫດວ່າ: ການຮັບຮູ້ກຽດຕິສັກອັນມີປະຈຳຢູ່ຕົວບຸກຄົນໃນວົງສະກຸນຂອງມະນຸດທຸກໆຄົນ ແລະ ການຮັບຮູ້ສິດສະເໝີພາບ ແລະ ສະເຖຍລະພາບຂອງບຸກຄົນເຫຼົ່ານັ້ນ ປະກອບເປັນຮາກຖານຂອງສິດເສລີພາບ ຍຸດຕິທຳ ແລະ ສັນຕິພາບຂອງໂລກ. ດ້ວຍເຫດວ່າ: ການບໍ່ຮັບຮູ້ ແລະ ໜີ່ນປະໝາດຕໍ່ສິດຂອງມະນຸດນັ້ນໄດ້ເປັນຕົ້ນເຫດໃຫ້ເກີດການກະທຳຢ່າງປ່າເຖື່ອນຊື່ງຈະເຮັດໃຫ້ແຄ້ນໃຈຕໍ່ມະໂນທຳຂອງມະນຸດ ແລະ ເຫັນວ່າການນຳຊື່ງໂລກມະນຸດທີ່ຈະມີອິດສະຫຼະໃນການສະແດງຄວາມເວົ້າ ແລະ ຄວາມເຊື່ອຖືຊື່ງຈະພົ້ນຈາກຄວາມຫວາດຫວັ່ນ ຢ້ານກົວ ແລະ ຍາກຈົນຂົ້ນແຄ້ນນັ້ນໄດ້ຖືກປະກາດວ່າ: ເປັນຄວາມປາຖະໜາອັນຍອດຍີ່ງຂອງມະນຸດ.</Text>
       <Text style={{fontFamily: fonts.notoSansRegular,marginTop: 10}}>ດ້ວຍເຫດວ່າ: ການຮັບຮູ້ກຽດຕິສັກອັນມີປະຈຳຢູ່ຕົວບຸກຄົນໃນວົງສະກຸນຂອງມະນຸດທຸກໆຄົນ ແລະ ການຮັບຮູ້ສິດສະເໝີພາບ ແລະ ສະເຖຍລະພາບຂອງບຸກຄົນເຫຼົ່ານັ້ນ ປະກອບເປັນຮາກຖານຂອງສິດເສລີພາບ ຍຸດຕິທຳ ແລະ ສັນຕິພາບຂອງໂລກ. ດ້ວຍເຫດວ່າ: ການບໍ່ຮັບຮູ້ ແລະ ໜີ່ນປະໝາດຕໍ່ສິດຂອງມະນຸດນັ້ນໄດ້ເປັນຕົ້ນເຫດໃຫ້ເກີດການກະທຳຢ່າງປ່າເຖື່ອນຊື່ງຈະເຮັດໃຫ້ແຄ້ນໃຈຕໍ່ມະໂນທຳຂອງມະນຸດ ແລະ ເຫັນວ່າການນຳຊື່ງໂລກມະນຸດທີ່ຈະມີອິດສະຫຼະໃນການສະແດງຄວາມເວົ້າ ແລະ ຄວາມເຊື່ອຖືຊື່ງຈະພົ້ນຈາກຄວາມຫວາດຫວັ່ນ ຢ້ານກົວ ແລະ ຍາກຈົນຂົ້ນແຄ້ນນັ້ນໄດ້ຖືກປະກາດວ່າ: ເປັນຄວາມປາຖະໜາອັນຍອດຍີ່ງຂອງມະນຸດ.</Text>
       <Text style={{fontFamily: fonts.notoSansMedium,marginTop: 10}}>ດ້ວຍເຫດວ່າ: ການຮັບຮູ້ກຽດຕິສັກອັນມີປະຈຳຢູ່ຕົວບຸກຄົນໃນວົງສະກຸນຂອງມະນຸດທຸກໆຄົນ ແລະ ການຮັບຮູ້ສິດສະເໝີພາບ ແລະ ສະເຖຍລະພາບຂອງບຸກຄົນເຫຼົ່ານັ້ນ ປະກອບເປັນຮາກຖານຂອງສິດເສລີພາບ ຍຸດຕິທຳ ແລະ ສັນຕິພາບຂອງໂລກ. ດ້ວຍເຫດວ່າ: ການບໍ່ຮັບຮູ້ ແລະ ໜີ່ນປະໝາດຕໍ່ສິດຂອງມະນຸດນັ້ນໄດ້ເປັນຕົ້ນເຫດໃຫ້ເກີດການກະທຳຢ່າງປ່າເຖື່ອນຊື່ງຈະເຮັດໃຫ້ແຄ້ນໃຈຕໍ່ມະໂນທຳຂອງມະນຸດ ແລະ ເຫັນວ່າການນຳຊື່ງໂລກມະນຸດທີ່ຈະມີອິດສະຫຼະໃນການສະແດງຄວາມເວົ້າ ແລະ ຄວາມເຊື່ອຖືຊື່ງຈະພົ້ນຈາກຄວາມຫວາດຫວັ່ນ ຢ້ານກົວ ແລະ ຍາກຈົນຂົ້ນແຄ້ນນັ້ນໄດ້ຖືກປະກາດວ່າ: ເປັນຄວາມປາຖະໜາອັນຍອດຍີ່ງຂອງມະນຸດ.</Text>
       <Text style={{fontFamily: fonts.notoSerifBold,marginTop: 10}}>ດ້ວຍເຫດວ່າ: ການຮັບຮູ້ກຽດຕິສັກອັນມີປະຈຳຢູ່ຕົວບຸກຄົນໃນວົງສະກຸນຂອງມະນຸດທຸກໆຄົນ ແລະ ການຮັບຮູ້ສິດສະເໝີພາບ ແລະ ສະເຖຍລະພາບຂອງບຸກຄົນເຫຼົ່ານັ້ນ ປະກອບເປັນຮາກຖານຂອງສິດເສລີພາບ ຍຸດຕິທຳ ແລະ ສັນຕິພາບຂອງໂລກ. ດ້ວຍເຫດວ່າ: ການບໍ່ຮັບຮູ້ ແລະ ໜີ່ນປະໝາດຕໍ່ສິດຂອງມະນຸດນັ້ນໄດ້ເປັນຕົ້ນເຫດໃຫ້ເກີດການກະທຳຢ່າງປ່າເຖື່ອນຊື່ງຈະເຮັດໃຫ້ແຄ້ນໃຈຕໍ່ມະໂນທຳຂອງມະນຸດ ແລະ ເຫັນວ່າການນຳຊື່ງໂລກມະນຸດທີ່ຈະມີອິດສະຫຼະໃນການສະແດງຄວາມເວົ້າ ແລະ ຄວາມເຊື່ອຖືຊື່ງຈະພົ້ນຈາກຄວາມຫວາດຫວັ່ນ ຢ້ານກົວ ແລະ ຍາກຈົນຂົ້ນແຄ້ນນັ້ນໄດ້ຖືກປະກາດວ່າ: ເປັນຄວາມປາຖະໜາອັນຍອດຍີ່ງຂອງມະນຸດ.</Text>
       <Text style={{fontFamily: fonts.notoSerifMedium,marginTop: 10}}>ດ້ວຍເຫດວ່າ: ການຮັບຮູ້ກຽດຕິສັກອັນມີປະຈຳຢູ່ຕົວບຸກຄົນໃນວົງສະກຸນຂອງມະນຸດທຸກໆຄົນ ແລະ ການຮັບຮູ້ສິດສະເໝີພາບ ແລະ ສະເຖຍລະພາບຂອງບຸກຄົນເຫຼົ່ານັ້ນ ປະກອບເປັນຮາກຖານຂອງສິດເສລີພາບ ຍຸດຕິທຳ ແລະ ສັນຕິພາບຂອງໂລກ. ດ້ວຍເຫດວ່າ: ການບໍ່ຮັບຮູ້ ແລະ ໜີ່ນປະໝາດຕໍ່ສິດຂອງມະນຸດນັ້ນໄດ້ເປັນຕົ້ນເຫດໃຫ້ເກີດການກະທຳຢ່າງປ່າເຖື່ອນຊື່ງຈະເຮັດໃຫ້ແຄ້ນໃຈຕໍ່ມະໂນທຳຂອງມະນຸດ ແລະ ເຫັນວ່າການນຳຊື່ງໂລກມະນຸດທີ່ຈະມີອິດສະຫຼະໃນການສະແດງຄວາມເວົ້າ ແລະ ຄວາມເຊື່ອຖືຊື່ງຈະພົ້ນຈາກຄວາມຫວາດຫວັ່ນ ຢ້ານກົວ ແລະ ຍາກຈົນຂົ້ນແຄ້ນນັ້ນໄດ້ຖືກປະກາດວ່າ: ເປັນຄວາມປາຖະໜາອັນຍອດຍີ່ງຂອງມະນຸດ.</Text>
       <Text style={{fontFamily: fonts.notoSerifRegular,marginTop: 10}}>ດ້ວຍເຫດວ່າ: ການຮັບຮູ້ກຽດຕິສັກອັນມີປະຈຳຢູ່ຕົວບຸກຄົນໃນວົງສະກຸນຂອງມະນຸດທຸກໆຄົນ ແລະ ການຮັບຮູ້ສິດສະເໝີພາບ ແລະ ສະເຖຍລະພາບຂອງບຸກຄົນເຫຼົ່ານັ້ນ ປະກອບເປັນຮາກຖານຂອງສິດເສລີພາບ ຍຸດຕິທຳ ແລະ ສັນຕິພາບຂອງໂລກ. ດ້ວຍເຫດວ່າ: ການບໍ່ຮັບຮູ້ ແລະ ໜີ່ນປະໝາດຕໍ່ສິດຂອງມະນຸດນັ້ນໄດ້ເປັນຕົ້ນເຫດໃຫ້ເກີດການກະທຳຢ່າງປ່າເຖື່ອນຊື່ງຈະເຮັດໃຫ້ແຄ້ນໃຈຕໍ່ມະໂນທຳຂອງມະນຸດ ແລະ ເຫັນວ່າການນຳຊື່ງໂລກມະນຸດທີ່ຈະມີອິດສະຫຼະໃນການສະແດງຄວາມເວົ້າ ແລະ ຄວາມເຊື່ອຖືຊື່ງຈະພົ້ນຈາກຄວາມຫວາດຫວັ່ນ ຢ້ານກົວ ແລະ ຍາກຈົນຂົ້ນແຄ້ນນັ້ນໄດ້ຖືກປະກາດວ່າ: ເປັນຄວາມປາຖະໜາອັນຍອດຍີ່ງຂອງມະນຸດ.</Text>
       <Text style={{fontFamily: fonts.notoSerifBold,marginTop: 10}}>Noto is a global font collection for writing in all modern and ancient languages. Noto Sans Lao is an unmodulated (“sans serif”) design in the more modern, loopless variant of the Southeast Asian Lao script, mainly suitable for headlines, packaging and advertising. It has multiple weights and widths, and 116 glyphs.</Text>
       <Text style={{fontFamily: fonts.notoSerifRegular,marginTop: 10}}>Noto is a global font collection for writing in all modern and ancient languages. Noto Sans Lao is an unmodulated (“sans serif”) design in the more modern, loopless variant of the Southeast Asian Lao script, mainly suitable for headlines, packaging and advertising. It has multiple weights and widths, and 116 glyphs.</Text>
       <Text style={{fontFamily: fonts.notoSerifMedium,marginTop: 10}}>Noto is a global font collection for writing in all modern and ancient languages. Noto Sans Lao is an unmodulated (“sans serif”) design in the more modern, loopless variant of the Southeast Asian Lao script, mainly suitable for headlines, packaging and advertising. It has multiple weights and widths, and 116 glyphs.</Text>
       <Text style={{fontFamily: fonts.peaceSansBold,marginTop: 20}}>ດ້ວຍເຫດວ່າ: ການຮັບຮູ້ກຽດຕິສັກອັນມີປະຈຳຢູ່ຕົວບຸກຄົນໃນວົງສະກຸນຂອງມະນຸດທຸກໆຄົນ ແລະ ການຮັບຮູ້ສິດສະເໝີພາບ ແລະ ສະເຖຍລະພາບຂອງບຸກຄົນເຫຼົ່ານັ້ນ ປະກອບເປັນຮາກຖານຂອງສິດເສລີພາບ ຍຸດຕິທຳ ແລະ ສັນຕິພາບຂອງໂລກ. ດ້ວຍເຫດວ່າ: ການບໍ່ຮັບຮູ້ ແລະ ໜີ່ນປະໝາດຕໍ່ສິດຂອງມະນຸດນັ້ນໄດ້ເປັນຕົ້ນເຫດໃຫ້ເກີດການກະທຳຢ່າງປ່າເຖື່ອນຊື່ງຈະເຮັດໃຫ້ແຄ້ນໃຈຕໍ່ມະໂນທຳຂອງມະນຸດ ແລະ ເຫັນວ່າການນຳຊື່ງໂລກມະນຸດທີ່ຈະມີອິດສະຫຼະໃນການສະແດງຄວາມເວົ້າ ແລະ ຄວາມເຊື່ອຖືຊື່ງຈະພົ້ນຈາກຄວາມຫວາດຫວັ່ນ ຢ້ານກົວ ແລະ ຍາກຈົນຂົ້ນແຄ້ນນັ້ນໄດ້ຖືກປະກາດວ່າ: ເປັນຄວາມປາຖະໜາອັນຍອດຍີ່ງຂອງມະນຸດ.</Text>
       <Text style={{fontFamily: fonts.peaceSansRegular,marginTop: 10}}>ດ້ວຍເຫດວ່າ: ການຮັບຮູ້ກຽດຕິສັກອັນມີປະຈຳຢູ່ຕົວບຸກຄົນໃນວົງສະກຸນຂອງມະນຸດທຸກໆຄົນ ແລະ ການຮັບຮູ້ສິດສະເໝີພາບ ແລະ ສະເຖຍລະພາບຂອງບຸກຄົນເຫຼົ່ານັ້ນ ປະກອບເປັນຮາກຖານຂອງສິດເສລີພາບ ຍຸດຕິທຳ ແລະ ສັນຕິພາບຂອງໂລກ. ດ້ວຍເຫດວ່າ: ການບໍ່ຮັບຮູ້ ແລະ ໜີ່ນປະໝາດຕໍ່ສິດຂອງມະນຸດນັ້ນໄດ້ເປັນຕົ້ນເຫດໃຫ້ເກີດການກະທຳຢ່າງປ່າເຖື່ອນຊື່ງຈະເຮັດໃຫ້ແຄ້ນໃຈຕໍ່ມະໂນທຳຂອງມະນຸດ ແລະ ເຫັນວ່າການນຳຊື່ງໂລກມະນຸດທີ່ຈະມີອິດສະຫຼະໃນການສະແດງຄວາມເວົ້າ ແລະ ຄວາມເຊື່ອຖືຊື່ງຈະພົ້ນຈາກຄວາມຫວາດຫວັ່ນ ຢ້ານກົວ ແລະ ຍາກຈົນຂົ້ນແຄ້ນນັ້ນໄດ້ຖືກປະກາດວ່າ: ເປັນຄວາມປາຖະໜາອັນຍອດຍີ່ງຂອງມະນຸດ.</Text>
       <Text style={{fontFamily: fonts.peaceSansBold,marginTop: 10}}>Noto is a global font collection for writing in all modern and ancient languages. Noto Sans Lao is an unmodulated (“sans serif”) design in the more modern, loopless variant of the Southeast Asian Lao script, mainly suitable for headlines, packaging and advertising. It has multiple weights and widths, and 116 glyphs.</Text>
       <Text style={{fontFamily: fonts.peaceSansRegular,marginTop: 10}}>Noto is a global font collection for writing in all modern and ancient languages. Noto Sans Lao is an unmodulated (“sans serif”) design in the more modern, loopless variant of the Southeast Asian Lao script, mainly suitable for headlines, packaging and advertising. It has multiple weights and widths, and 116 glyphs.</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
