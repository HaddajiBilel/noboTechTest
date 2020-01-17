
import React from 'react';
import {
  PermissionsAndroid,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  ToolbarAndroid,
  Button,
} from 'react-native';


export default class App extends React.Component {

  
// this is the method to request permission on press
  requestCameraPermission= async () => {
    try {
      const granted = PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.NFC,
        {
          title: 'NFC Permission',
          message:
            'This app require NFC permission',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the NFC');
      } else {
        console.log('NFC permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }



  render() {
    return (
      <View style={styles.container}>
        <View style={styles.Button}>
        <Button
          title="Permission"
          onPress={this.requestCameraPermission}
        />
        </View>
      </View>
    )}
}
const styles = StyleSheet.create({
  Button:{

    alignItems: "center",
  },

  container:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  }
});

