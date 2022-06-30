import React, { useEffect, useState } from 'react';
import {
  Animated,
  Easing,
  StyleSheet,


  Text, TouchableOpacity,
  View
} from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
// import { useColorSchemeCustom } from '../hooks/useColorSchema';
import { clamp } from '../utils/animations/index';
import { systemColor, UIColor } from '../utils/colors';
import { FontSize } from '../utils/fontSize';

const { Value, timing } = Animated;
const SLIDE_TEXT_SIZE = FontSize.h5;

type PickerProps = {
  background: string;
  items: Array<any>;
  selection?: number;
  onSelect: (n: number) => void;
};

type SegmentedPickerProps = PickerProps & {
  pickerStyle?: 'segmented',
  activeBackground?: string,
  activeLabelColor?: string,
  unActiveLabelColor?: string,
  rounded?: boolean,
  paddingVertical?: number,
  width?: number | string,
  labelTextSize?: number 
};

export const SegmentedPicker = ({
  items,
  selection,
  onSelect,
  background,
  paddingVertical = 5,
  activeBackground,
  activeLabelColor = systemColor(UIColor.black),
  unActiveLabelColor = systemColor(UIColor.black),
  rounded = false,
  width = '100%',
  labelTextSize = SLIDE_TEXT_SIZE
}: SegmentedPickerProps) => {
  const [dimensions, setDimensions] = useState({});
  const translateX = useState(new Value(0))[0];
  const opacities = items.map(() => new Value(0));

  useEffect(() => {
    if (dimensions) {
      let to = (dimensions?.width / items.length) * selection;
      if (selection === 0) to += 2;
      if (selection === items.length - 1) to -= 2;
      slide(to);
      setOpacities();
    }

    return () => {};
  }, [dimensions, selection]);

  const setOpacities = () => {
    items.forEach((_, i) => {
      if (i === selection || i === selection - 1 || i === items.length - 1)
        opacities[i].setValue(0);
      else opacities[i].setValue(1);
    });
  };

  const slide = (slideValue: number) => {
    timing(translateX, {
      toValue: slideValue || 0,
      duration: 200,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start();
  };

  let lastIndex = selection;
  const panGestureHandler = (e) => {
    const currentXPos = e.nativeEvent.x;
    const itemWidth = dimensions.width / items.length;
    const slideTo = clamp(
      Math.round((currentXPos - itemWidth / 2) / itemWidth) * itemWidth,
      0,
      (items.length - 1) * itemWidth
    );
    const selectedIndex = slideTo / itemWidth;
    if (selectedIndex !== lastIndex) {
      lastIndex = selectedIndex;
      onSelect(selectedIndex);
    }
  };

  // const { SchemeState } = useColorSchemeCustom();
  // const sliderBackgroundColor =
  // SchemeState.colorScheme === 'light' ? UIColor.white : UIColor.black5;

  return (
    <PanGestureHandler onGestureEvent={panGestureHandler}>
      <View
        style={[
          styles.container,
          { width: width, backgroundColor: background || systemColor(UIColor.black3), borderRadius: rounded ? 100 : 6, },
        ]}
        onLayout={(e) => setDimensions(e.nativeEvent.layout)}
      >
        {items.length &&
          items.map((item, i) => (
            <React.Fragment key={i}>
              <TouchableOpacity
                style={[
                  styles.item,
                  {
                    flexBasis: `${100 / items.length}%`,
                    paddingVertical: paddingVertical,
                    flexDirection: 'row',
                  },
                ]}
                onPress={() => onSelect(i)}
                key={i}
              >
                <Text
                  allowFontScaling={false}
                  style={{
                    fontSize:  labelTextSize,
                    fontWeight: selection === i ? 'bold' : 'normal',
                    color: selection === i ? activeLabelColor : unActiveLabelColor
                  }}
                >
                  {item}
                </Text>
              </TouchableOpacity>
              <Animated.View
                style={[
                  styles.divider,
                  {
                    opacity: opacities[i],
                    borderRightColor: systemColor(
                      UIColor.black3
                    ),
                  },
                ]}
              />
            </React.Fragment>
          ))}

        <Animated.View
          style={[
            styles.slider,
            {
              backgroundColor: activeBackground || 'white',
              width: dimensions ? (dimensions?.width || 0)/ (items?.length || 1) : 0,
              height: dimensions ? (dimensions?.height || 5)- 5 : 0,
              borderRadius: rounded ? 100 : 6,
              transform: [
                {
                  translateX: translateX,
                },
              ],
            },
          ]}
        />
      </View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 6,
    flexDirection: 'row',
    padding: 3,
    shadowColor: systemColor(UIColor.black),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1234,
    shadowRadius: 3,
    elevation: 5
  },
  slider: {
    position: 'absolute',
    top: 2,
    zIndex: -1,
    borderRadius: 6,
    shadowColor: systemColor(UIColor.black),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  divider: {
    top: 5,
    height: 15,
    borderRightWidth: 0,
    width: 0,
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 6,
  },
});
