import React, { useState, useEffect } from 'react';
import { View, Dimensions, TouchableWithoutFeedback, PanResponder } from 'react-native';

interface ProgressBarProps {
  progress: number;
  onSeek: (progress: number) => void;
}

const ProgressBar: React.FunctionComponent<ProgressBarProps> = ({ progress, onSeek }) => {
  const [width, setWidth] = useState(Dimensions.get('window').width);
  const [panResponder] = useState(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        return Math.abs(gestureState.dx) > 5;
      },
      onPanResponderMove: (evt, gestureState) => {
        const newProgress = progress + gestureState.dx / width;
        onSeek(newProgress);
      },
    })
  );
  console.log(progress)

  useEffect(() => {
    const updateWidth = () => {
        setWidth(Dimensions.get('window').width);
    }
    Dimensions.addEventListener('change', updateWidth);
    
  }, []);

  return (
    <View style={{ width: '100%', height: 10, backgroundColor: 'gray' }}>
      {/* <TouchableWithoutFeedback {...panResponder.panHandlers}>
        <View
          style={{
            width: progress * width,
            height: '100%',
            backgroundColor: 'blue',
          }}
        />
      </TouchableWithoutFeedback> */}
    </View>
  );
};

export default ProgressBar;
