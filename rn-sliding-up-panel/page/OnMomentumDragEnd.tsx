import React, { createRef, useState } from 'react';
import { Text, View, Button } from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import styles from '../components/styles';
import PanelView, { height } from '../components/Variable';

export function OnMomentumDragEnd() {
  const panelRef = createRef<SlidingUpPanel>();
  const draggableRange = { top: height, bottom: 0 };

  const [eventBackText, setEventBackText] = useState({
    onBackButtonPress: 'onBackButtonPress',
    onDragStart: 'onDragStart',
    onDragEnd: 'onDragEnd',
    onMomentumDragStart: 'onMomentumDragStart',
    onMomentumDragEnd: 'onMomentumDragEnd',
    onBottomReached: 'onBottomReached',
  });

  return (
    <View style={styles.container}>
      <View style={styles.viewbox}>
        <Text>
          {`draggableRange=${JSON.stringify(draggableRange)}
        snappingPoints=[300]`}
        </Text>
        <Text>{eventBackText.onMomentumDragEnd}</Text>
        <Button
          title="Show panel btn"
          onPress={() => panelRef.current!.show()}
        />
      </View>

      <SlidingUpPanel
        ref={panelRef}
        draggableRange={draggableRange}
        snappingPoints={[300]}
        onMomentumDragEnd={() => {
          setEventBackText({ ...eventBackText, onMomentumDragEnd: 'momentumDragEnd change text' });
        }}>
        <View style={styles.panel}>
          <PanelView onPress={() => panelRef.current!.hide()} >
            <Text>{eventBackText.onMomentumDragEnd}</Text>
          </PanelView>
        </View>
      </SlidingUpPanel>
    </View>
  );
}
