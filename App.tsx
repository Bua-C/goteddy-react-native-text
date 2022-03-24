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
  useColorScheme,
} from 'react-native';

import { fonts, Text } from './src';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white',
    paddingHorizontal: 10
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Text textType='bold' style={{marginTop: 10}}>
          Noto is a global font collection for writing in all modern and ancient
          languages. Noto Sans Lao is an unmodulated (“sans serif”) design in
          the more modern, loopless variant of the Southeast Asian Lao script,
          mainly suitable for headlines, packaging and advertising. It has
          multiple weights and widths, and 116 glyphs.
        </Text>
        <Text  style={{marginTop: 10}}>
          Noto is a global font collection for writing in all modern and ancient
          languages. Noto Sans Lao is an unmodulated (“sans serif”) design in
          the more modern, loopless variant of the Southeast Asian Lao script,
          mainly suitable for headlines, packaging and advertising. It has
          multiple weights and widths, and 116 glyphs.
        </Text>
        <Text style={{marginTop: 10,fontFamily:fonts.notoSerifBold}}>
          Noto is a global font collection for writing in all modern and ancient
          languages. Noto Sans Lao is an unmodulated (“sans serif”) design in
          the more modern, loopless variant of the Southeast Asian Lao script,
          mainly suitable for headlines, packaging and advertising. It has
          multiple weights and widths, and 116 glyphs.
        </Text>
        <Text style={{marginTop: 20}}>
          ດ້ວຍເຫດວ່າ:
          ການຮັບຮູ້ກຽດຕິສັກອັນມີປະຈຳຢູ່ຕົວບຸກຄົນໃນວົງສະກຸນຂອງມະນຸດທຸກໆຄົນ ແລະ
          ການຮັບຮູ້ສິດສະເໝີພາບ ແລະ ສະເຖຍລະພາບຂອງບຸກຄົນເຫຼົ່ານັ້ນ
          ປະກອບເປັນຮາກຖານຂອງສິດເສລີພາບ ຍຸດຕິທຳ ແລະ ສັນຕິພາບຂອງໂລກ. ດ້ວຍເຫດວ່າ:
          ການບໍ່ຮັບຮູ້ ແລະ
          ໜີ່ນປະໝາດຕໍ່ສິດຂອງມະນຸດນັ້ນໄດ້ເປັນຕົ້ນເຫດໃຫ້ເກີດການກະທຳຢ່າງປ່າເຖື່ອນຊື່ງຈະເຮັດໃຫ້ແຄ້ນໃຈຕໍ່ມະໂນທຳຂອງມະນຸດ
          ແລະ ເຫັນວ່າການນຳຊື່ງໂລກມະນຸດທີ່ຈະມີອິດສະຫຼະໃນການສະແດງຄວາມເວົ້າ ແລະ
          ຄວາມເຊື່ອຖືຊື່ງຈະພົ້ນຈາກຄວາມຫວາດຫວັ່ນ ຢ້ານກົວ ແລະ
          ຍາກຈົນຂົ້ນແຄ້ນນັ້ນໄດ້ຖືກປະກາດວ່າ: ເປັນຄວາມປາຖະໜາອັນຍອດຍີ່ງຂອງມະນຸດ.
        </Text>
        <Text style={{marginTop: 10}}>
          ດ້ວຍເຫດວ່າ:
          ການຮັບຮູ້ກຽດຕິສັກອັນມີປະຈຳຢູ່ຕົວບຸກຄົນໃນວົງສະກຸນຂອງມະນຸດທຸກໆຄົນ ແລະ
          ການຮັບຮູ້ສິດສະເໝີພາບ ແລະ ສະເຖຍລະພາບຂອງບຸກຄົນເຫຼົ່ານັ້ນ
          ປະກອບເປັນຮາກຖານຂອງສິດເສລີພາບ ຍຸດຕິທຳ ແລະ ສັນຕິພາບຂອງໂລກ. ດ້ວຍເຫດວ່າ:
          ການບໍ່ຮັບຮູ້ ແລະ
          ໜີ່ນປະໝາດຕໍ່ສິດຂອງມະນຸດນັ້ນໄດ້ເປັນຕົ້ນເຫດໃຫ້ເກີດການກະທຳຢ່າງປ່າເຖື່ອນຊື່ງຈະເຮັດໃຫ້ແຄ້ນໃຈຕໍ່ມະໂນທຳຂອງມະນຸດ
          ແລະ ເຫັນວ່າການນຳຊື່ງໂລກມະນຸດທີ່ຈະມີອິດສະຫຼະໃນການສະແດງຄວາມເວົ້າ ແລະ
          ຄວາມເຊື່ອຖືຊື່ງຈະພົ້ນຈາກຄວາມຫວາດຫວັ່ນ ຢ້ານກົວ ແລະ
          ຍາກຈົນຂົ້ນແຄ້ນນັ້ນໄດ້ຖືກປະກາດວ່າ: ເປັນຄວາມປາຖະໜາອັນຍອດຍີ່ງຂອງມະນຸດ.
        </Text>
        <Text style={{marginTop: 10}}>
          ດ້ວຍເຫດວ່າ:
          ການຮັບຮູ້ກຽດຕິສັກອັນມີປະຈຳຢູ່ຕົວບຸກຄົນໃນວົງສະກຸນຂອງມະນຸດທຸກໆຄົນ ແລະ
          ການຮັບຮູ້ສິດສະເໝີພາບ ແລະ ສະເຖຍລະພາບຂອງບຸກຄົນເຫຼົ່ານັ້ນ
          ປະກອບເປັນຮາກຖານຂອງສິດເສລີພາບ ຍຸດຕິທຳ ແລະ ສັນຕິພາບຂອງໂລກ. ດ້ວຍເຫດວ່າ:
          ການບໍ່ຮັບຮູ້ ແລະ
          ໜີ່ນປະໝາດຕໍ່ສິດຂອງມະນຸດນັ້ນໄດ້ເປັນຕົ້ນເຫດໃຫ້ເກີດການກະທຳຢ່າງປ່າເຖື່ອນຊື່ງຈະເຮັດໃຫ້ແຄ້ນໃຈຕໍ່ມະໂນທຳຂອງມະນຸດ
          ແລະ ເຫັນວ່າການນຳຊື່ງໂລກມະນຸດທີ່ຈະມີອິດສະຫຼະໃນການສະແດງຄວາມເວົ້າ ແລະ
          ຄວາມເຊື່ອຖືຊື່ງຈະພົ້ນຈາກຄວາມຫວາດຫວັ່ນ ຢ້ານກົວ ແລະ
          ຍາກຈົນຂົ້ນແຄ້ນນັ້ນໄດ້ຖືກປະກາດວ່າ: ເປັນຄວາມປາຖະໜາອັນຍອດຍີ່ງຂອງມະນຸດ.
        </Text>
        <Text style={{marginTop: 10}}>
          ດ້ວຍເຫດວ່າ:
          ການຮັບຮູ້ກຽດຕິສັກອັນມີປະຈຳຢູ່ຕົວບຸກຄົນໃນວົງສະກຸນຂອງມະນຸດທຸກໆຄົນ ແລະ
          ການຮັບຮູ້ສິດສະເໝີພາບ ແລະ ສະເຖຍລະພາບຂອງບຸກຄົນເຫຼົ່ານັ້ນ
          ປະກອບເປັນຮາກຖານຂອງສິດເສລີພາບ ຍຸດຕິທຳ ແລະ ສັນຕິພາບຂອງໂລກ. ດ້ວຍເຫດວ່າ:
          ການບໍ່ຮັບຮູ້ ແລະ
          ໜີ່ນປະໝາດຕໍ່ສິດຂອງມະນຸດນັ້ນໄດ້ເປັນຕົ້ນເຫດໃຫ້ເກີດການກະທຳຢ່າງປ່າເຖື່ອນຊື່ງຈະເຮັດໃຫ້ແຄ້ນໃຈຕໍ່ມະໂນທຳຂອງມະນຸດ
          ແລະ ເຫັນວ່າການນຳຊື່ງໂລກມະນຸດທີ່ຈະມີອິດສະຫຼະໃນການສະແດງຄວາມເວົ້າ ແລະ
          ຄວາມເຊື່ອຖືຊື່ງຈະພົ້ນຈາກຄວາມຫວາດຫວັ່ນ ຢ້ານກົວ ແລະ
          ຍາກຈົນຂົ້ນແຄ້ນນັ້ນໄດ້ຖືກປະກາດວ່າ: ເປັນຄວາມປາຖະໜາອັນຍອດຍີ່ງຂອງມະນຸດ.
        </Text>
        <Text style={{marginTop: 10}}>
          ດ້ວຍເຫດວ່າ:
          ການຮັບຮູ້ກຽດຕິສັກອັນມີປະຈຳຢູ່ຕົວບຸກຄົນໃນວົງສະກຸນຂອງມະນຸດທຸກໆຄົນ ແລະ
          ການຮັບຮູ້ສິດສະເໝີພາບ ແລະ ສະເຖຍລະພາບຂອງບຸກຄົນເຫຼົ່ານັ້ນ
          ປະກອບເປັນຮາກຖານຂອງສິດເສລີພາບ ຍຸດຕິທຳ ແລະ ສັນຕິພາບຂອງໂລກ. ດ້ວຍເຫດວ່າ:
          ການບໍ່ຮັບຮູ້ ແລະ
          ໜີ່ນປະໝາດຕໍ່ສິດຂອງມະນຸດນັ້ນໄດ້ເປັນຕົ້ນເຫດໃຫ້ເກີດການກະທຳຢ່າງປ່າເຖື່ອນຊື່ງຈະເຮັດໃຫ້ແຄ້ນໃຈຕໍ່ມະໂນທຳຂອງມະນຸດ
          ແລະ ເຫັນວ່າການນຳຊື່ງໂລກມະນຸດທີ່ຈະມີອິດສະຫຼະໃນການສະແດງຄວາມເວົ້າ ແລະ
          ຄວາມເຊື່ອຖືຊື່ງຈະພົ້ນຈາກຄວາມຫວາດຫວັ່ນ ຢ້ານກົວ ແລະ
          ຍາກຈົນຂົ້ນແຄ້ນນັ້ນໄດ້ຖືກປະກາດວ່າ: ເປັນຄວາມປາຖະໜາອັນຍອດຍີ່ງຂອງມະນຸດ.
        </Text>
        <Text style={{marginTop: 10}}>
          ດ້ວຍເຫດວ່າ:
          ການຮັບຮູ້ກຽດຕິສັກອັນມີປະຈຳຢູ່ຕົວບຸກຄົນໃນວົງສະກຸນຂອງມະນຸດທຸກໆຄົນ ແລະ
          ການຮັບຮູ້ສິດສະເໝີພາບ ແລະ ສະເຖຍລະພາບຂອງບຸກຄົນເຫຼົ່ານັ້ນ
          ປະກອບເປັນຮາກຖານຂອງສິດເສລີພາບ ຍຸດຕິທຳ ແລະ ສັນຕິພາບຂອງໂລກ. ດ້ວຍເຫດວ່າ:
          ການບໍ່ຮັບຮູ້ ແລະ
          ໜີ່ນປະໝາດຕໍ່ສິດຂອງມະນຸດນັ້ນໄດ້ເປັນຕົ້ນເຫດໃຫ້ເກີດການກະທຳຢ່າງປ່າເຖື່ອນຊື່ງຈະເຮັດໃຫ້ແຄ້ນໃຈຕໍ່ມະໂນທຳຂອງມະນຸດ
          ແລະ ເຫັນວ່າການນຳຊື່ງໂລກມະນຸດທີ່ຈະມີອິດສະຫຼະໃນການສະແດງຄວາມເວົ້າ ແລະ
          ຄວາມເຊື່ອຖືຊື່ງຈະພົ້ນຈາກຄວາມຫວາດຫວັ່ນ ຢ້ານກົວ ແລະ
          ຍາກຈົນຂົ້ນແຄ້ນນັ້ນໄດ້ຖືກປະກາດວ່າ: ເປັນຄວາມປາຖະໜາອັນຍອດຍີ່ງຂອງມະນຸດ.
        </Text>
        <Text style={{marginTop: 10}}>
          Noto is a global font collection for writing in all modern and ancient
          languages. Noto Sans Lao is an unmodulated (“sans serif”) design in
          the more modern, loopless variant of the Southeast Asian Lao script,
          mainly suitable for headlines, packaging and advertising. It has
          multiple weights and widths, and 116 glyphs.
        </Text>
        <Text style={{marginTop: 10}}>
          Noto is a global font collection for writing in all modern and ancient
          languages. Noto Sans Lao is an unmodulated (“sans serif”) design in
          the more modern, loopless variant of the Southeast Asian Lao script,
          mainly suitable for headlines, packaging and advertising. It has
          multiple weights and widths, and 116 glyphs.
        </Text>
        <Text style={{marginTop: 10}}>
          Noto is a global font collection for writing in all modern and ancient
          languages. Noto Sans Lao is an unmodulated (“sans serif”) design in
          the more modern, loopless variant of the Southeast Asian Lao script,
          mainly suitable for headlines, packaging and advertising. It has
          multiple weights and widths, and 116 glyphs.
        </Text>
        <Text style={{marginTop: 20}}>
          ດ້ວຍເຫດວ່າ:
          ການຮັບຮູ້ກຽດຕິສັກອັນມີປະຈຳຢູ່ຕົວບຸກຄົນໃນວົງສະກຸນຂອງມະນຸດທຸກໆຄົນ ແລະ
          ການຮັບຮູ້ສິດສະເໝີພາບ ແລະ ສະເຖຍລະພາບຂອງບຸກຄົນເຫຼົ່ານັ້ນ
          ປະກອບເປັນຮາກຖານຂອງສິດເສລີພາບ ຍຸດຕິທຳ ແລະ ສັນຕິພາບຂອງໂລກ. ດ້ວຍເຫດວ່າ:
          ການບໍ່ຮັບຮູ້ ແລະ
          ໜີ່ນປະໝາດຕໍ່ສິດຂອງມະນຸດນັ້ນໄດ້ເປັນຕົ້ນເຫດໃຫ້ເກີດການກະທຳຢ່າງປ່າເຖື່ອນຊື່ງຈະເຮັດໃຫ້ແຄ້ນໃຈຕໍ່ມະໂນທຳຂອງມະນຸດ
          ແລະ ເຫັນວ່າການນຳຊື່ງໂລກມະນຸດທີ່ຈະມີອິດສະຫຼະໃນການສະແດງຄວາມເວົ້າ ແລະ
          ຄວາມເຊື່ອຖືຊື່ງຈະພົ້ນຈາກຄວາມຫວາດຫວັ່ນ ຢ້ານກົວ ແລະ
          ຍາກຈົນຂົ້ນແຄ້ນນັ້ນໄດ້ຖືກປະກາດວ່າ: ເປັນຄວາມປາຖະໜາອັນຍອດຍີ່ງຂອງມະນຸດ.
        </Text>
        <Text style={{marginTop: 10}}>
          ດ້ວຍເຫດວ່າ:
          ການຮັບຮູ້ກຽດຕິສັກອັນມີປະຈຳຢູ່ຕົວບຸກຄົນໃນວົງສະກຸນຂອງມະນຸດທຸກໆຄົນ ແລະ
          ການຮັບຮູ້ສິດສະເໝີພາບ ແລະ ສະເຖຍລະພາບຂອງບຸກຄົນເຫຼົ່ານັ້ນ
          ປະກອບເປັນຮາກຖານຂອງສິດເສລີພາບ ຍຸດຕິທຳ ແລະ ສັນຕິພາບຂອງໂລກ. ດ້ວຍເຫດວ່າ:
          ການບໍ່ຮັບຮູ້ ແລະ
          ໜີ່ນປະໝາດຕໍ່ສິດຂອງມະນຸດນັ້ນໄດ້ເປັນຕົ້ນເຫດໃຫ້ເກີດການກະທຳຢ່າງປ່າເຖື່ອນຊື່ງຈະເຮັດໃຫ້ແຄ້ນໃຈຕໍ່ມະໂນທຳຂອງມະນຸດ
          ແລະ ເຫັນວ່າການນຳຊື່ງໂລກມະນຸດທີ່ຈະມີອິດສະຫຼະໃນການສະແດງຄວາມເວົ້າ ແລະ
          ຄວາມເຊື່ອຖືຊື່ງຈະພົ້ນຈາກຄວາມຫວາດຫວັ່ນ ຢ້ານກົວ ແລະ
          ຍາກຈົນຂົ້ນແຄ້ນນັ້ນໄດ້ຖືກປະກາດວ່າ: ເປັນຄວາມປາຖະໜາອັນຍອດຍີ່ງຂອງມະນຸດ.
        </Text>
        <Text style={{marginTop: 10}}>
          Noto is a global font collection for writing in all modern and ancient
          languages. Noto Sans Lao is an unmodulated (“sans serif”) design in
          the more modern, loopless variant of the Southeast Asian Lao script,
          mainly suitable for headlines, packaging and advertising. It has
          multiple weights and widths, and 116 glyphs.
        </Text>
        <Text style={{marginTop: 10}}>
          Noto is a global font collection for writing in all modern and ancient
          languages. Noto Sans Lao is an unmodulated (“sans serif”) design in
          the more modern, loopless variant of the Southeast Asian Lao script,
          mainly suitable for headlines, packaging and advertising. It has
          multiple weights and widths, and 116 glyphs.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
