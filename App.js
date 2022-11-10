/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {Button} from 'react-native-paper'
 import { Switch } from 'react-native-paper';
 import { Surface } from 'react-native-paper';
 import { Chip } from 'react-native-paper';
 
 import {
   TextInput,
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 import { white } from 'react-native-paper/lib/typescript/styles/colors';
 
 /* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
  * LTI update could not be added via codemod */
 const Section = ({ children, title }) => {
   const isDarkMode = useColorScheme() === 'dark';
   return (
     <View style={styles.sectionContainer}>
       <Text
         style={[
           styles.sectionTitle,
           {
             color: isDarkMode ? Colors.white : Colors.black,
           },
         ]}>
         {title}
       </Text>
       <Text
         style={[
           styles.sectionDescription,
           {
             color: isDarkMode ? Colors.light : Colors.dark,
           },
         ]}>
         {children}
       </Text>
     </View>
   );
 };
 
 const MySwitch = () => {
   const [isSwitchOn, setIsSwitchOn] = React.useState(false);
 
   const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
 
   return <Switch color='red'value={isSwitchOn} onValueChange={onToggleSwitch} />;
 };
 
 const MySurface = () => (
   <Surface style={styles.surface}>
      <Button icon="alien" mode="contained" onPress={() => console.log('Pressed')}>
           ALIEN
       </Button>
   </Surface>
 );
 
 const MyChip = () => (
 
   <Chip style={styles.chip1} icon="wifi" onPress={() => console.log('Pressed')}>Wifi</Chip>
   
 );
 
 const MyChip2 = () => (
   <Chip style={styles.chip2} icon="web" onPress={() => console.log('Pressed')}>Internet</Chip>
 )
 
 
 const App: () => Node = () => {
 
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
 
   return (
     <SafeAreaView style={backgroundStyle}>
       <StatusBar
         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
         backgroundColor={backgroundStyle.backgroundColor}
       />
       <ScrollView
         contentInsetAdjustmentBehavior="automatic"
         style={backgroundStyle}>
         <Header />
         
         <View
           style={{
             backgroundColor: isDarkMode ? Colors.black : Colors.white,
           }}>
           <Section title="IMPUT(EMAIL) :"></Section>
           <TextInput
           label="Email"
           placeholder="Escriu el teu email"
           />
           <Section title="BOTONS AMB ALIEN :"></Section>
           <Button icon="alien" mode="contained" onPress={() => console.log('Pressed')}>
           ALIEN
           </Button>
           <Button icon="alien" mode="outlined" onPress={() => console.log('Pressed')}>
           ALIEN
           </Button>
           <Button icon="alien" mode="text" onPress={() => console.log('Pressed')}>
           ALIEN
           </Button>
           <Section title="SWITCH :"></Section>
           <MySwitch></MySwitch>
           <Section title="BOTO DINS SURFACE :"></Section>
           <MySurface></MySurface>
           <Section title="CHIPS :"></Section>
           <View flexDirection="row">
           <MyChip2></MyChip2><MyChip></MyChip>
           </View>
           
           
           
           
 
           
           
         </View>
       </ScrollView>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
   chip1: {
     marginLeft: 20,
     width: 95,
     textAlign: 'center',
   },
   chip2: {
     width: 95,
     textAlign: 'center',
   }
 });
 
 export default App;