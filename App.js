import React from 'react';
import Styled from 'styled-components/native';
import MapView, {Marker} from 'react-native-maps';
import {WebView} from 'react-native-webview';

const Container = Styled.View`
    flex: 1;
`;

const InitialLocation = () => {
  return (
    <Container>
      <MapView
        style={{flex: 1}}
        initialRegion={{
          latitude: 37.536513,
          longitude: 126.999938,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}>
        <MapView.Marker
          coordinate={{latitude: 37.536513, longitude: 126.999938}}
          title="theKARY"
          description="theKARY"
        />
      </MapView>
    </Container>
  );
};

export default InitialLocation;
