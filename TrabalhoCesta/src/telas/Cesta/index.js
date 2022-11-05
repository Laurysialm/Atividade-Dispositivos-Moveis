import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Texto from '../../componentes/Texto';
import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';
import Item from './componentes/Item';
import Footer from './componentes/Footer';
import { Button, Icon } from '@rneui/themed';

{/* como objeto foi descontruido, agente pode pegar ele diretamente como se fossem props*/}
export default function Cesta({ topo, detalhes, itens }) {
  return <>
    <FlatList
      data={itens.lista}
      renderItem={Item}
      keyExtractor={({ nome }) => nome }
      ListHeaderComponent={() => {
        return <>
          <Topo {...topo} />
          <View style={estilos.cesta}>
            <Detalhes {...detalhes} />
            <Texto style={estilos.titulo}>{ itens.titulo }</Texto>
          </View>
        </>
      }}
    />
    <View style={{display:"flex", alignItems:"center"}}>
    <Button
          icon={
            <Icon
              name="cart"
              type="ionicon"
              color="#ffffff"
              iconStyle={{ marginRight: 10 }}
            />
          }
          buttonStyle={{
            width:240,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 10,
            marginTop:10
          }}
          title="Comprar"
          color={'#28bf3f'}
        />
        </View>
    <Footer/>
  </>
}
const estilos = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});