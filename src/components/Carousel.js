import React from 'react';
import { HStack, Image, Center, VStack, Pressable } from 'native-base';
import { Platform, ScrollView } from 'react-native';
export function Carousel({
  images,
  height,
  activeIndicatorBgColor,
  inactiveIndicatorBgColor
}) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [containerWidth, setContainerWidth] = React.useState(0);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (containerWidth) ref.current?.scrollTo({
      x: activeIndex * containerWidth
    });
  }, [activeIndex, containerWidth]);
  const timeout = React.useRef(null);

  const onScroll = e => {
    if (containerWidth) {
      if (timeout && timeout.current) {
        clearTimeout(timeout.current);
      }

      timeout.current = setTimeout(() => {
        const nextActiveIndex = Math.round(e.nativeEvent.contentOffset.x / containerWidth);

        if (nextActiveIndex !== activeIndex) {
          setActiveIndex(nextActiveIndex);
        } else {
          ref.current?.scrollTo({
            x: activeIndex * containerWidth
          });
        }
      }, 50);
    }
  };

  const onMomentumScrollEnd = e => {
    const nextActiveIndex = Math.round(e.nativeEvent.contentOffset.x / containerWidth);

    if (activeIndex !== nextActiveIndex) {
      setActiveIndex(nextActiveIndex);
      return nextActiveIndex;
    }
  };

  return <VStack space="2" flex={1} onLayout={e => setContainerWidth(e.nativeEvent.layout.width)}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{
      flex: 1
    }} ref={ref} // RN Web doesn't support onMomentumScrollEnd so use onScroll
    onScroll={Platform.OS === 'web' ? onScroll : undefined} onMomentumScrollEnd={onMomentumScrollEnd} scrollEventThrottle={16} // Paging enabled is only supported in native
    pagingEnabled={Platform.OS !== 'web'}>
        {images.map((image, idx) => {
        return <Image key={idx} rounded="lg" alt="advertisement" height={height} width={containerWidth} source={image} />;
      })}
      </ScrollView>
      <Center>
        <HStack space="1">
          {images.map((_image, index) => {
          return <Pressable onPress={() => setActiveIndex(index)} key={index}>
                <Center bg={index === activeIndex ? activeIndicatorBgColor : inactiveIndicatorBgColor} p="1" rounded="full" />
              </Pressable>;
        })}
        </HStack>
      </Center>
    </VStack>;
}