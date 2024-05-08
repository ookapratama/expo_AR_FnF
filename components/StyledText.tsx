import { Text, TextProps } from './Themed';
import { useFonts } from 'expo-font';

export function MonoText(props: TextProps) {
  
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });
  return <Text {...props} style={[props.style]} />;
}
