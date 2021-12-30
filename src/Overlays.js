import React, { useContext } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Context as OverlayContext } from './context/OverlayContext'

export default Overlays = ({ state, descriptors, navigation }) => {
  const { state: { showSheetFlag, showDialogFlag }, hideDialog, hideSheet, showDialog } = useContext(OverlayContext)
  console.log('   -->>> RENDER OVERLAY')
  return (
    <View style={styles.container}>
      {showSheetFlag ?
        <View style={styles.sheet}>
          <TouchableOpacity
            style={{ height: 40, width: 100, alignItems: 'center', justifyContent: 'center', backgroundColor: 'gray', alignSelf: 'center' }}
            onPress={() => hideSheet()}>
            <Text>Close</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => showDialog()}
          style={{ marginTop: 100, height: 60, width: 150, alignItems: 'center', justifyContent: 'center', backgroundColor: 'bisque', alignSelf: 'center' }}>
            <Text style={{ textAlign: 'center' }}>Open fullscreen dialog</Text>
          </TouchableOpacity>
        </View>
        : (null)}
      {showDialogFlag ? <View style={styles.dialogContainer}>
        <View style={styles.dialog}>
          <TouchableOpacity
            onPress={() => hideDialog()}
            style={{ height: 40, width: 150,  backgroundColor: 'brown', justifyContent: 'center' }}>
            <Text style={{ textAlign: 'center', color: 'white' }}>Close this dialog</Text>
          </TouchableOpacity>
        </View>
      </View> : (null)}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  sheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '70%',
    backgroundColor: 'white'
  },
  dialogContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  dialog: {
    width: 300,
    height: 300,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  }
})