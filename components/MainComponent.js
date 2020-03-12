import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishDetailComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

const MenuNavigator = createStackNavigator( { 
    Menu : { screen : Menu },
    DishDetail : { screen : DishDetail }
 }, {
     initialRoutName : 'Menu',
     navigationOptions :
      { 
         headerStyle :
        {
             backgroundColor : '#512DA8'
        },

         headerTintColor : '#FFF',

         headerTitleStyle :
        {
            color : '#FFF'
        }
      },
      
 } );

class Main extends Component
{

    render()
    {
        return(
            <View style={ { flex : 1, paddingTop : Platform.OS === 'ios' ? 0: Expo.Constants.statusBarHeight } }>

                <MenuNavigator />

            </View>
        );
    }

}

export default Main;