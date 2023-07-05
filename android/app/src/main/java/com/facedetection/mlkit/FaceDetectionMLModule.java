package com.facedetection;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.provider.MediaStore;
import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.google.mlkit.vision.face.FaceDetectorOptions;

import java.util.Map;
import java.util.HashMap;

public class FaceDetectionMLModule extends ReactContextBaseJavaModule {

    public FaceDetectionMLModule(ReactApplicationContext reactContext) {
        super(reactContext);

    }

    @Override
    public String getName() {
        return "FaceDetectionMLModule";
    }

    @ReactMethod
    public static void createFaceDetectionMLEvent() {

        Log.d("Msg", "Native Module OnPressed");
        FaceDetectorOptions options = new FaceDetectorOptions.Builder()
                .setPerformanceMode(FaceDetectorOptions.PERFORMANCE_MODE_ACCURATE)
                .setLandmarkMode(FaceDetectorOptions.LANDMARK_MODE_ALL)
                .setClassificationMode(FaceDetectorOptions.CLASSIFICATION_MODE_ALL)
                .build();

        detector = FaceDetection.getClient(options);
//        Intent camera_intent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
//        startActivity(camera_intent);

//        CameraManager cameraManager = (CameraManager) activity.getSystemService(CAMERA_SERVICE);
//        int sensorOrientation = cameraManager
//                .getCameraCharacteristics(cameraId)
//                .get(CameraCharacteristics.SENSOR_ORIENTATION);
//
//        if (isFrontFacing) {
//            rotationCompensation = (sensorOrientation + rotationCompensation) % 360;
//        } else { // back-facing
//            rotationCompensation = (sensorOrientation - rotationCompensation + 360) % 360;
//        }
//        return rotationCompensation;
        // Log.d("CalendarModule", "Create event called with name: " + name
        // + " and location: " + location);
    }
}
