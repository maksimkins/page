

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import DropDown from '../assets/icons/arrowdown';
import Add from '../assets/icons/add';
import Minus from '../assets/icons/minus';
import ArrowLeft from '../assets/icons/arrowleft';
import Heart from '../assets/icons/heart';



export function App(): React.JSX.Element {
  
  const [count, setCount] = useState(1);
  const price = 148

  return (
    <SafeAreaView style={styles.pageView}>

      <View style={styles.upperButtonsHolder}>
        <Pressable style={({pressed}) => [
            styles.roundButton,
            {backgroundColor: pressed ? '#8E6CEF' : '#F4F4F4'}
          ]}><ArrowLeft/></Pressable>
        <Pressable style={({pressed}) => [
            styles.roundButton,
            {backgroundColor: pressed ? '#8E6CEF' : '#F4F4F4'}
          ]}><Heart/></Pressable>
      </View>

      <ScrollView horizontal  showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
        <Image source={{ uri: 'https://s3-alpha-sig.figma.com/img/f0be/0cb1/d7e6b11c7121967f9dae4cd2af210c30?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OoeyUH02i0cxusShQf-ircZuf9wWoJF6fZEPyImwl54U9hHFtGHqaIU9vqFB~xFOmF30dS1l2RPLygASN6MEueBPxUUO49VDV~6grc3AMZgDYlgmmArshS3L0gt6kfiXJwviqJD~zAvvl2SzpYngUncH9vxi~np01PvInVUWSCdZgzHfLNbED1qK1hSv136xin0lcx4qKVCknA~Gikr2OIsnW98iLEQRYCksAjlSVdx-bN30YCSa~0LOiOl9gChQgQcPC0WB~~DlX9HuikTOAtGVhxC6kYZCiCMHmSET9ksfG0PIhyZR1YjrN~dGzJ~Pj3-ptH27n52~c28ploc2bw__' }} 
        style={styles.image}/>
        <Image source={{ uri: 'https://s3-alpha-sig.figma.com/img/8dbe/29ef/7cc2cda6d7d7db4c7eee982642d6f9a7?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eGOdv-GkpDV2tOOMq3JIV3tEt~7ooGJNagwEdnq8OHmgHcZhM9rT-NljefaKNcA8d8NTsYXPTD5kYZd9EPOM0S3MTffPL8HaQPFLxKsQSev44SC8eDvxNkUuQw5mjiA0fsLlndNQ4h5j20pH7HIQrVQ14GcbZWdSWgjHjkKQcnECIvPgWtzcORvEnsi0hbN8Mf33LSGhpQEO7ypteRoMih4DbFqoP4qV5eqArDjhXKnPcATF9ecqrP8u24m54WR4A92Y-zIiWvKScVAhvC3DHoQx3YYosU~L2fP4VxZker~-8s04qteVBKegM8PN0o6~301kVfex72xWTQkOkrTJIA__' }} 
        style={styles.image}/>
        <Image source={{ uri: 'https://s3-alpha-sig.figma.com/img/44ba/888c/fb4ba715388632c08bcead8fe7d7cbb8?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kYyMj-lHBRubRLNV4BymMGJvxJhp5r3sPYI~68ATTJFlBhGkGbG1dlaFF7YNuIC-vqMbUox2hTM42DCza4mBCqFPNYOJywH9KpbVRSoTME0F45hpFJuvYvE5RryxlcmhbkmG9mH0FJf~emDOHmnVDqcM-kOiTvL1BPUmKDMsm1ctBYQWeC-Ubp3CJz122kLC~KyqOcjV~uRae6-Z0WNPxirftoDVjXEdfLP9O0UQ6ZWWRp1khRVrZub4X4G5Kx0wHLF63AN1SeM4s94rdlX4l5ylpzJZbsRvAaKmK6MYgc~RIWC2RhmXkKywRRKoyCIyRKkztffFLpYCU2frLmdUFw__' }} 
        style={styles.image}/>
      </ScrollView>

      <View style={styles.goodInfo}>
        <Text style={styles.fontBold}>Men's Harrington Jacket</Text>
        <Text style={{...styles.fontBold, color: '#8E6CEF', marginTop:15}}>${price}</Text>
      </View>

      <View>

        <Pressable style={
          ({pressed}) => [
            styles.actionButton,
            {backgroundColor: pressed ? '#8E6CEF' : '#F4F4F4'}
          ]
          }>
          <Text style= {styles.fontRegular}>Size</Text>

          <View style={styles.optionsButton}>
            <Text style={styles.fontBold}>S</Text>
            <DropDown/>
          </View>
        </Pressable>


        <Pressable style={
          ({pressed}) => [
            styles.actionButton,
            {backgroundColor: pressed ? '#8E6CEF' : '#F4F4F4'}
          ]
          }>
          <Text style= {styles.fontRegular}>Color</Text>

          <View style={styles.optionsButton}>
            <View style={styles.circle}></View>
            <DropDown/>
          </View>
        </Pressable>

        <Pressable style={styles.actionButton}>
          <Text style={styles.fontRegular} >Quantity</Text>

          <View style={styles.optionsButton}>
            <Pressable style={styles.roundButton} onPress={() => {if(count < 100) setCount(count + 1)}}>
              <Add/>
            </Pressable>
            <Text>{count}</Text>
            <Pressable style={styles.roundButton} onPress={() => {if(count > 1) setCount(count - 1)}}>
              <Minus/>
            </Pressable>
          </View>
        </Pressable>

        <View style={{marginTop:14}}>
          <Text style={{color: '#27272780', fontFamily: 'Gabarito-Regular'}}>
            Built for life and made to last, 
            this full-zip corduroy jacket is part of our Nike Life collection. The spacious fit gives you plenty of room to layer underneath, 
            while the soft corduroy keeps it casual and timeless.
          </Text>
        </View>

        <Pressable style={{...styles.actionButton, backgroundColor: '#8E6CEF'}}>
          <Text style={{fontFamily: 'Gabarito-Bold', color: 'white'}} >${price * count}</Text>

          <Text style={{fontFamily: 'Gabarito-Regular', color: 'white'}}>Add to Bag</Text>
        </Pressable>

      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  pageView: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
    // alignItems: 'center',
  },

  scrollContainer: {
    flexDirection: 'row', 
  },
  image: {
    width: 161,
    height: 248,
    marginRight: 10, 
  },

  actionButton: {
    width: '100%',
    borderRadius: 100,
    height: 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#F4F4F4',

    fontFamily: 'Circular Std',
    fontSize: 16,
    marginBottom: 12,
  },

  optionsButton: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },

  upperButtonsHolder: {
    flexDirection: 'row',
    //alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom:24,
  },

  fontRegular: {fontFamily: 'Gabarito-Regular'},
  fontBold: {fontFamily: 'Gabarito-Bold'},

  circle: {
    width: 16,
    height: 16,
    backgroundColor: '#B3B68B',
    borderRadius: 8,
  },

  roundButton: {
    backgroundColor: '#8E6CEF',
    width: 40,
    height: 40,
    borderRadius: 20, // Half of width and height to make it round
    justifyContent: 'center',
    alignItems: 'center',
  },

  goodInfo: {
    marginBottom: 33,
    marginTop: 24,
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'center',
  }


});


