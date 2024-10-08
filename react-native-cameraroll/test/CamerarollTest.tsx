import React, { useState } from "react";
import { View, Text, ScrollView, Button, StyleSheet} from "react-native";
import {
  CameraRoll,
} from "@react-native-camera-roll/camera-roll";
import RNFS from 'react-native-fs';
import { Tester, TestCase } from '@rnoh/testerino';

export default function CameraRollTest() {
const [saveUri, setSaveUri] = useState('');
  const SaveAssetInternetImage = (props: {
    setState: React.Dispatch<React.SetStateAction<string>>;
  }) => {
    return (
      <View style={{ height: 50 }}>
        <Button
          title="SaveAsset"
          onPress={() => {
            CameraRoll.saveAsset("https://res.vmallres.com/uomcdn/CN/cms/202408/5442d69d916d4bcf9ee740d595a164fb.jpg").then((res) => {
              setSaveUri(JSON.stringify(res));
              props.setState(JSON.stringify(res));
            });
          }}
        />
      </View>
    );
  };

  const SaveAssetLocalImage = (props: {
    setState: React.Dispatch<React.SetStateAction<string>>;
  }) => {
    return (
      <View style={{ height: 50 }}>
        <Button
          title="SaveAsset"
          onPress={() => {
            RNFS.downloadFile({
              fromUrl:
                'https://res.vmallres.com/uomcdn/CN/cms/202408/5442d69d916d4bcf9ee740d595a164fb.jpg', // URL to download file from
              toFile: RNFS.DocumentDirectoryPath + '/5442d69d916d4bcf9ee740d595a164fb.jpg',
            }).promise.then((res)=>{
              if(res.statusCode === 200){
                CameraRoll.saveAsset(`${RNFS.DocumentDirectoryPath}/5442d69d916d4bcf9ee740d595a164fb.jpg`).then((res) => {
                  setSaveUri(JSON.stringify(res));
                  props.setState(JSON.stringify(res));
                });
              }
            })
          }}
        />
      </View>
    );
  };

  const SaveAssetInternetVideo = (props: {
    setState: React.Dispatch<React.SetStateAction<string>>;
  }) => {
    return (
      <View style={{ height: 50 }}>
        <Button
          title="SaveAsset"
          onPress={() => {
            CameraRoll.saveAsset("https://vod.vmall.com/asset/d42cd405b6c0093a28a49a094d803e1c/play_video/5f1a9a9494ce32411cf679db98ac777a_2.mp4").then((res) => {
              setSaveUri(JSON.stringify(res));
              props.setState(JSON.stringify(res));
            });
          }}
        />
      </View>
    );
  };

  const SaveAssetLocalVideo = (props: {
    setState: React.Dispatch<React.SetStateAction<string>>;
  }) => {
    return (
      <View style={{ height: 50 }}>
        <Button
          title="SaveAsset"
          onPress={() => {
            RNFS.downloadFile({
              fromUrl:
                'https://vod.vmall.com/asset/d42cd405b6c0093a28a49a094d803e1c/play_video/5f1a9a9494ce32411cf679db98ac777a_2.mp4', // URL to download file from
              toFile: RNFS.DocumentDirectoryPath + '/5f1a9a9494ce32411cf679db98ac777a_2.mp4',
            }).promise.then((res)=>{
              if(res.statusCode === 200){
                CameraRoll.saveAsset(`${RNFS.DocumentDirectoryPath}/5f1a9a9494ce32411cf679db98ac777a_2.mp4`).then((res) => {
                  setSaveUri(JSON.stringify(res));
                  props.setState(JSON.stringify(res));
                });
              }
            })
          }}
        />
      </View>
    );
  };

  const SaveToCamerarollInternetImage = (props: {
    setState: React.Dispatch<React.SetStateAction<string>>;
  }) => {
    return (
      <View style={{ height: 50 }}>
        <Button
          title="SaveToCameraroll"
          onPress={() => {
            CameraRoll.saveToCameraRoll("https://res.vmallres.com/uomcdn/CN/cms/202408/5442d69d916d4bcf9ee740d595a164fb.jpg").then((res) => {
              setSaveUri(JSON.stringify(res));
              props.setState(JSON.stringify(res));
            });
          }}
        />
      </View>
    );
  };

  const SaveToCamerarollLocalImage = (props: {
    setState: React.Dispatch<React.SetStateAction<string>>;
  }) => {
    return (
      <View style={{ height: 50 }}>
        <Button
          title="SaveToCameraroll"
          onPress={() => {
            RNFS.downloadFile({
              fromUrl:
                'https://res.vmallres.com/uomcdn/CN/cms/202408/5442d69d916d4bcf9ee740d595a164fb.jpg', // URL to download file from
              toFile: RNFS.DocumentDirectoryPath + '/5442d69d916d4bcf9ee740d595a164fb.jpg',
            }).promise.then((res)=>{
              if(res.statusCode === 200){
                CameraRoll.saveToCameraRoll(`${RNFS.DocumentDirectoryPath}/5442d69d916d4bcf9ee740d595a164fb.jpg`).then((res) => {
                  setSaveUri(JSON.stringify(res));
                  props.setState(JSON.stringify(res));
                });
              }
            })
          }}
        />
      </View>
    );
  };

  const SaveToCamerarollInternetVideo = (props: {
    setState: React.Dispatch<React.SetStateAction<string>>;
  }) => {
    return (
      <View style={{ height: 50 }}>
        <Button
          title="SaveToCameraroll"
          onPress={() => {
            CameraRoll.saveToCameraRoll("https://vod.vmall.com/asset/d42cd405b6c0093a28a49a094d803e1c/play_video/5f1a9a9494ce32411cf679db98ac777a_2.mp4").then((res) => {
              setSaveUri(JSON.stringify(res));
              props.setState(JSON.stringify(res));
            });
          }}
        />
      </View>
    );
  };

  const SaveToCamerarollLocalVideo = (props: {
    setState: React.Dispatch<React.SetStateAction<string>>;
  }) => {
    return (
      <View style={{ height: 50 }}>
        <Button
          title="SaveToCameraroll"
          onPress={() => {
            RNFS.downloadFile({
              fromUrl:
                'https://vod.vmall.com/asset/d42cd405b6c0093a28a49a094d803e1c/play_video/5f1a9a9494ce32411cf679db98ac777a_2.mp4', // URL to download file from
              toFile: RNFS.DocumentDirectoryPath + '/5f1a9a9494ce32411cf679db98ac777a_2.mp4',
            }).promise.then((res)=>{
              if(res.statusCode === 200){
                CameraRoll.saveToCameraRoll(`${RNFS.DocumentDirectoryPath}/5f1a9a9494ce32411cf679db98ac777a_2.mp4`).then((res) => {
                  setSaveUri(JSON.stringify(res));
                  props.setState(JSON.stringify(res));
                });
              }
            })
          }}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputArea}>
          <Text style={styles.baseText}>{saveUri}</Text>
      </View>
      <ScrollView>
        <Tester>
          <TestCase
            itShould="saveAsset接口，保存网络图片到相册"
            initialState={''}
            arrange={({ setState }) => <SaveAssetInternetImage setState={setState} />}
            assert={({ expect, state }) => {
              expect(state).to.be.string;
            }}
          />
           <TestCase
            itShould="saveAsset接口，保存沙箱图片到相册"
            initialState={''}
            arrange={({ setState }) => <SaveAssetLocalImage setState={setState} />}
            assert={({ expect, state }) => {
              expect(state).to.be.string;
            }}
          />
           <TestCase
            itShould="saveAsset接口，保存网络视频到相册"
            initialState={''}
            arrange={({ setState }) => <SaveAssetInternetVideo setState={setState} />}
            assert={({ expect, state }) => {
              expect(state).to.be.string;
            }}
          />
           <TestCase
            itShould="saveAsset接口，保存沙箱视频到相册"
            initialState={''}
            arrange={({ setState }) => <SaveAssetLocalVideo setState={setState} />}
            assert={({ expect, state }) => {
              expect(state).to.be.string;
            }}
          />
          <TestCase
            itShould="saveToCameraRoll接口，保存网络图片到相册"
            initialState={''}
            arrange={({ setState }) => <SaveToCamerarollInternetImage setState={setState} />}
            assert={({ expect, state }) => {
              expect(state).to.be.string;
            }}
          />
           <TestCase
            itShould="saveToCameraRoll接口，保存沙箱图片到相册"
            initialState={''}
            arrange={({ setState }) => <SaveToCamerarollLocalImage setState={setState} />}
            assert={({ expect, state }) => {
              expect(state).to.be.string;
            }}
          />
           <TestCase
            itShould="saveToCameraRoll接口，保存网络视频到相册"
            initialState={''}
            arrange={({ setState }) => <SaveToCamerarollInternetVideo setState={setState} />}
            assert={({ expect, state }) => {
              expect(state).to.be.string;
            }}
          />
           <TestCase
            itShould="saveToCameraRoll接口，保存沙箱视频到相册"
            initialState={''}
            arrange={({ setState }) => <SaveToCamerarollLocalVideo setState={setState} />}
            assert={({ expect, state }) => {
              expect(state).to.be.string;
            }}
          />
        </Tester>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#F1F3F5",
  },
  baseText: {
    width: "100%",
    height: "100%",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  inputArea: {
    width: "100%",
    height: 260,
    borderWidth: 2,
    borderColor: "#000000",
    marginTop: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});