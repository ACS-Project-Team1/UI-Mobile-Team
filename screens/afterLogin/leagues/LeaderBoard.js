import { Text, View, StyleSheet } from "react-native";
import Table from "../../../components/Table";

const tableDataPlayers = [
    ['Rank #', 'Player', 'Total', 'Handicap'],
    ['#1', 'Clyan', '150', '80'],
    ['#2', 'Max', '110', '60'],
    ['#3', 'Ryan', '100', '50'],
];

const tableDataTeams = [
    ['Rank #', 'Team', 'Total', 'Handicap'],
    ['#1', 'Nepal', '470', '198'],
    ['#2', 'Herm', '450', '176'],
    ['#3', 'Rockstar', '350', '150'],
];


const imageLink = "https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?w=826&t=st=1710281012~exp=1710281612~hmac=48d755763cf719d702a2b9cfffd9f1ad244fb8e8e6205d7197c202f01d13cef1"

export default function LeaderBoard() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Team Rankings</Text>
            <Table tableData={tableDataTeams} imageLink={imageLink} styles={styles} />
            <Text style={styles.heading}>Player Rankings</Text>
            <Table tableData={tableDataPlayers} imageLink={imageLink} styles={styles} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: "5%",
        paddingVertical: "5%",
    },
    card: {
        backgroundColor: 'white',
        marginVertical: "3%",
        marginHorizontal: "0%",
        height: 70,
        flex: 1,
        borderColor: '#B1B2B9',
        borderRadius: "10%",
        padding: '2%',
        paddingHorizontal: '4%'
    },
    cardTitle: {
        fontWeight: 'normal',
        fontSize: 16
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    tableContainer: {
        padding: 5,
        marginTop: 20,
        marginBottom: 30,
        borderRadius: 10,
        backgroundColor: 'white',
        // Card shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#B9B3B3',
    },
    lastRow: {
        borderBottomWidth: 0,
    },
    cell: {
        borderWidth: 1,
        borderColor: 'transparent',
        alignItems: "center",
        padding: 10,
        flex: 1,
    },
    bodyCell: {
        backgroundColor: 'white',
    },
    imageCell: {
        flexDirection: 'row',
    },
    headerText: {
        fontWeight: 'bold',
    },
    bodyText: {
        fontWeight: 'normal',
    },
    image: {
        width: 25,
        height: 25,
        borderRadius: 12.5,
        marginRight: 15,
    },
});