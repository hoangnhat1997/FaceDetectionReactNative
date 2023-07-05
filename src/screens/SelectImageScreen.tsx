/**
 * Created by Dima Portenko on 30.06.2021
 */
import React from 'react';
import {
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  useWindowDimensions,
  NativeModule,
  NativeModules,
} from 'react-native';
import {
  CameraOptions,
  ImageLibraryOptions,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';

import {ImagePickerResponse} from 'react-native-image-picker/src/types';
import {SelectScreenNavigationProps} from '../navigation/Navigator';

import * as routes from '../navigation/routes';
import DemoButton from '../components/ui/DemoButton';
import DemoResponse from '../components/ui/DemoResponse';

type SelectImageScreenProps = {
  navigation: SelectScreenNavigationProps;
};

const SelectImageScreen = ({navigation}: SelectImageScreenProps) => {
  const {width} = useWindowDimensions();
  const [response, setResponse] = React.useState<ImagePickerResponse | null>(
    null,
  );

  const onButtonPress = React.useCallback(
    (type: string, options: CameraOptions | ImageLibraryOptions) => {
      if (type === 'capture') {
        launchCamera(options, setResponse);
      } else {
        launchImageLibrary(options, setResponse);
      }
    },
    [],
  );

  const onProcessImage = () => {
    if (response) {
      navigation.navigate(routes.PROCESS_IMAGE_SCREEN, {
        uri: response?.assets?.[0]?.uri!!,
      });
    }
  };
  const {FaceDetectionMLModule} = NativeModules;
  const onOpenFace = () => {
    console.log(' open camera');
    FaceDetectionMLModule.createFaceDetectionMLEvent();
  };

  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={{flex: 1, flexDirection: 'column-reverse'}}>
        <View style={{flexDirection: 'row', paddingBottom: 8}}>
          <DemoButton key="Process Image" onPress={onProcessImage}>
            {'Process Image'}
          </DemoButton>
        </View>
        <View style={{flexDirection: 'row', paddingVertical: 8}}>
          <DemoButton key="Take Image" onPress={onOpenFace}>
            {'Open Camera'}
          </DemoButton>
          {/* <DemoButton
            key="Take Image"
            onPress={() =>
              onButtonPress('capture', {
                saveToPhotos: true,
                mediaType: 'photo',
                includeBase64: false,
              })
            }>
            {'Take Image'}
          </DemoButton> */}
          <DemoButton
            key="Select Image"
            onPress={() =>
              onButtonPress('library', {
                selectionLimit: 0,
                mediaType: 'photo',
                includeBase64: false,
              })
            }>
            {'Select Image'}
          </DemoButton>
        </View>
        <View style={{paddingHorizontal: 8}}>
          <DemoResponse>{!response}</DemoResponse>
        </View>
        {response?.assets &&
          response?.assets.map(({uri}) => (
            <View key={uri} style={styles.image}>
              <Image
                resizeMode="cover"
                resizeMethod="scale"
                style={{width, height: width}}
                source={{uri: uri}}
              />
            </View>
          ))}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    marginVertical: 24,
    alignItems: 'center',
  },
});
export default SelectImageScreen;
