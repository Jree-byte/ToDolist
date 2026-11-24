import { StyleSheet } from 'react-native'


export default StyleSheet.create({
  // Main screen container inside SafeAreaView
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
  },
  // "Todo list" heading
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 12,
  },
  // Text input for new tasks
  input: {
    borderWidth: 1,
    borderColor: '#c1c0c0',
    borderRadius: 8,
    padding: 10,
    margin: 8,
  },
  // One task row (the whole row is pressable)
  row: {
    backgroundColor: '#f5f5f5',
    padding: 14,
    marginHorizontal: 8,
    marginBottom: 10,
    borderColor: '#c1c0c0',
    borderWidth: 1,
    borderRadius: 8,
  },
  // Normal (not done) task text
  rowText: {
    color: '#000',
    fontSize: 16,
  },
 
  // solid line through the text or atleast it supposed to be ,but it seems like its not working in expo 58 version
  rowTextDone: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
})