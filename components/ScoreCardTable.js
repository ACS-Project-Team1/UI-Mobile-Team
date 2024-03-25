import React from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from './styles';
import KeyboardAvoidingWrapper from './KeyboardAvoidingWrapper';

const Table = ({ tableData }) => {

  const totals = {
    'Total':{
        'PAR':70,
        'user1':50,
        'user2':60
    },
    'Handicap':{
        'PAR':70,
        'user1':50,
        'user2':60
    }

  }

  return (
    
        <View style={styles.table}>

            {/*First Column */}
            <View style={[styles.row]}>
                <View style={styles.column}>
                    <View style={[styles.cell, styles.firstColumnCell]}>
                        <MaterialIcons name="golf-course" size={18} color="black" />
                    </View>

                    {
                        Object.entries(tableData).map(([user,rowData],id) => (
                            <View key={id} style={[styles.cell,styles.firstColumnCell, user=='PAR'?null:styles.darkCell]}>
                                <Text style={user=='PAR'?null:styles.darkCellText}>{user}</Text>
                            </View>
                        ))
                    }
                </View>
                
                {/*Scrollable Portion */}
                <ScrollView 
                    horizontal 
                    contentContainerStyle={{backgroundColor:'white'}} 
                    scrollIndicatorInsets={{ right: 1 }} // Change color only on iOS
                    indicatorStyle="white" // Change color only on Android
                >
                    <View>
                        <View style={styles.table}>
                        <View style={[styles.row, styles.header]}>
                            
                            {[...Array(18)].map((_, index) => (
                            <View key={index} style={[styles.cell, styles.headerCell]}><Text>{index + 1}</Text></View>
                            ))}
                        </View>

                        {Object.entries(tableData).map(([user, rowData], rowIndex) => (
                            <View key={rowIndex} style={styles.row}>
                            
                                {rowData.map((data, colIndex) => (
                                    <View key={colIndex} style={[styles.cell, user=='PAR'?null:styles.darkCell]}>
                                        {
                                            user=='PAR'
                                            ?<Text>{data}</Text>
                                            :<TextInput
                                            style={{color:'white'}}
                                            placeholder={data+' ●'}
                                            placeholderTextColor={'white'}
                                            />
                                        }
                                        
                                    </View>
                                ))}

                            </View>
                        ))}

                        </View>
                    </View>
                </ScrollView>
                
                {/*Last two columns */}
                {
                    Object.entries(totals).map(([colname,colvalues], key) => (
                        <View key={key} style={styles.column}>
                            <View style={[styles.cell, styles.lastColumnCell, colname=='Handicap'?{width:85}:{width:55}]}>
                                <Text>{colname}</Text>
                            </View>
        
                            {
                                Object.entries(colvalues).map(([user,score], key) => (
                                    <View key={key} style={[styles.cell, styles.lastColumnCell, colname=='Handicap'?{width:85}:{width:55}, user=='PAR'?null:styles.darkCell ]}>
                                        <Text style={user=='PAR'?null:styles.darkCellText}>{score}</Text>
                                    </View>
                                ))
                            }
                        </View>    
                    ))
                }
            </View>

            <View style={[styles.row,styles.lastrow, styles.darkCell]}>
                <View style={styles.teamTotalCell}>
                    <Text style={[styles.teamTotalText, styles.darkCellText]}>Team Total</Text>
                </View>
                <View>

                </View>
                <View style={[styles.cell, styles.lastColumnCell, {width:55}]}>
                    <Text style={[styles.darkCellText]}> 50 </Text>
                </View>
                <View style={[styles.cell, styles.lastColumnCell, {width:80}]}>
                    <Text style={[styles.darkCellText]}> 80 </Text>
                </View>
            </View>

        </View>
    
    
  );
};

const styles = StyleSheet.create({
  table: {
    backgroundColor:'white',
    borderColor: '#000',
   
  },
  column:{
    flexDirection:'column'
  },
  topRow:{
    borderTopWidth:1,
    borderColor:'gray',
    backgroundColor:'white'
  },
  row: {
    flexDirection: 'row',
  },
  header: {
    backgroundColor: '#white',
  },
  cell: {
    fontSize:12,
    padding: 10,
    width:50,
    height:45,
    borderTopWidth:1,
    
    borderColor:'gray',
    alignItems:'center',
    justifyContent:'center'
  },
  firstColumnCell :{
    borderRightWidth:1,
    width:70,
  },
  lastColumnCell :{
    borderLeftWidth:1,
    width:70,
  },
  darkCell:{
    backgroundColor:Colors.darkBlack,
  },
  darkCellText:{
    color:'white',
  },
  teamTotalText:{
    fontSize:30,
    margin:'3%'
  },
  lastrow:{
    borderTopWidth:1,
    borderColor:'gray',
    paddingHorizontal: '1%'
  },
  teamTotalCell:{
    width:206
  }
});

// Usage example

const tableData = {
    'PAR': Array.from({ length: 18 }, (_, index) => `${index + 1}`),
    'User1': Array.from({ length: 18 }, (_, index) => `${5}`),
    'User2': Array.from({ length: 18 }, (_, index) => `${4}`),
  };

const ScoreCardTable = () => {
  return (
    <View >
      <Table tableData={tableData} />
    </View>
  );
};

export default ScoreCardTable;
