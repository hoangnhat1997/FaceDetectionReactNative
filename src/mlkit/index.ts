import {NativeModules} from 'react-native';

const {TextRecognitionModule, FaceDetectionMLModule} = NativeModules;

const recognizeImage = (url: string) => {
  // return TextRecognitionModule.recognizeImage(url);
  FaceDetectionMLModule.createFaceDetectionMLEvent();
};

export default recognizeImage;
