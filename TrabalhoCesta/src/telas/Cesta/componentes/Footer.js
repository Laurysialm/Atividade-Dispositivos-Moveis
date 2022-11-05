import React from 'react';
import { View, Image, StyleSheet, FlatList } from 'react-native';

import Texto from '../../../componentes/Texto';

export default function Footer() {
  return <View style={estilos.item}>
    <Texto style={estilos.nome}>FEIRA DO TOPO LOCO</Texto>
    <Texto style={estilos.nome}>Lauriane da Silva Almeida©</Texto>
  </View>
}

const estilos = StyleSheet.create({
  item: {
    flexDirection: "column",
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
     backgroundColor:"#18a32b",
    alignItems: "center",
    color: "#fff"
  },
  imagem: {
    width: 46,
    height: 46,
   
  },
  nome: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: "#fff"
  },
});