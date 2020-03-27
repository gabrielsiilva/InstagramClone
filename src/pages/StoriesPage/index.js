import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';

import {
  TakePhotoButton
} from './styles';

export default function StoriesPage() {

  const [cameraDetails, setCameraDetails] = useState({
    hasCameraPermission: null,
    type: Camera.Constants.Type.back
  });

  useEffect(() => {
    initCamera();
  }, []);

  const initCamera = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    setCameraDetails({ hasCameraPermission: status === 'granted' });
  }

  const { hasCameraPermission } = cameraDetails;
  if (hasCameraPermission === null) {
    return <View />;
  } else if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  } else {
    return (
      <View style={{ flex: 1 }}>
        <Camera style={{ flex: 1 }} type={cameraDetails.type}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              justifyContent: "flex-end",
              alignItems: "center"
            }}>
            <TakePhotoButton onPress={() => { }} />
          </View>
        </Camera>
      </View>
    );
  }

}