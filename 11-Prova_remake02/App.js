//Biblioteca para cria biblioteca em react
import React from 'react';
//Gerenciado do estado de navegação (todas as funções de navegação estão envolto)
import { NavigationContainer } from '@react-navigation/native';
//Função que cria abas na parte inferior da tela
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//Biblioteca de componetente de intaface
import { PaperProvider } from 'react-native-paper';
// Biblioteca de icones usada para personalizar abas
import { Ionicons } from '@expo/vector-icons';

import Filmes from './screens/Filmes';
import Herois from './screens/Herois';
import Quadrinhos from './screens/Quadrinhos';

// Função que cria abas na parte inferior da tela
const Tab = createBottomTabNavigator();



export default function App() {
  return (
    <PaperProvider>
      {/* Componente que envolve todo conteúdo para usar o tema do Material Design (Botões, cartões etc...) */}
      <NavigationContainer>
        {/* Gerencia o estado de navegação (Qual tela está ativa) */}
        <Tab.Navigator>
          {/* Define as abas que irão aparecer na barra 
          name = (Nome interno da aba)
          componet = (Especifica qual tela (componente) sera renderizado)          
          options (Obj que personaliza a aparencia da aba) = (
          
          title = Define o texto que aparece abaixo do icone na barra de abas. 
          tabBarIcon  = Define o icone da aba, ele recebe uma função
          onde pode definir o icone a cor o tamanho, assim retonado o componente <Ionicons> 
        
        Ionicons: {
        name = nome do icone que sera mostrado (nesse caso o de filmes)
        color = define a cor do icone
        size = O tamnanho do icone 
        }
        
          )
        
          */}
          <Tab.Screen
            name="FILMES"
            component={Filmes}
            


            options={{
              title: 'Filme', //Texto da aba (na barra inferior head)
              //Head da parte de cima 
              headerTitle:"Filmes Herois",
              headerTitleAlign:"center",
              //Icone da barra de baixo
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="film" color={color} size={size} />
              ),
            }}
          />
          
          <Tab.Screen
          name="HEROIS"
          component={Herois}
          options={{
            title:"Heroi",
            headerTitle: "Hero",
            headerTitleAlign:"center",
            tabBarIcon: ({color, size}) => (
              <Ionicons name="glasses-outline" color={color} size={size}/>
            ),
          }}
          />
      
         <Tab.Screen
         name="Quadrinho"
         component={Quadrinhos}
         options={{
          headerTitle:"Historias em Quadrinho",
          headerTitleAlign:"center",
         
          title:"QH",
          tabBarIcon:({color, size}) => (
            <Ionicons name="book-outline" color={color} size={size}/>
          )
         }}
         />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}