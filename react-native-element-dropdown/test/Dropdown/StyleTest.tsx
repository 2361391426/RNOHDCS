import React, {useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

const imageSource = require('../assets/react-native-logo.png');
const data = [
  {label: 'Item 1', value: '1', image: imageSource},
  {label: 'Item 2', value: '2', image: imageSource},
  {label: 'Item 3', value: '3', image: imageSource},
  {label: 'Item 4', value: '4', image: imageSource},
  {label: 'Item 5', value: '5', image: imageSource},
];

export const StyleTest = () => {
  const [value, setValue] = useState<string>('');
  const [color, setColor] = useState('red');
  const [height, setHeight] = useState(50);
  return (
    <Tester>
      <TestSuite name="style">
        <TestCase itShould="样式">
          <Dropdown
            style={{height: height, backgroundColor: color}}
            mode="default"
            labelField="label"
            valueField="value"
            data={data}
            search
            maxHeight={300}
            placeholder="请选择....."
            value={value}
            onChange={(item: any) => {
              setValue(item.value);
            }}
          />
          <View style={styles.actionBtn}>
            <Button
              title="changeColor"
              onPress={() => {
                setColor(v => (v === 'red' ? 'blue' : 'red'));
              }}
            />
            <Button
              title="changeHeight"
              onPress={() => {
                setHeight(v => (v === 50 ? 150 : 50));
              }}
            />
          </View>
        </TestCase>
      </TestSuite>
    </Tester>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  actionBtn: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: '#000',
    padding: 10,
    gap: 10,
  },
});
