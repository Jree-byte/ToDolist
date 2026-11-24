import { Text, TouchableOpacity } from 'react-native'
import { Task } from './Todo'
import styles from '../styles'

interface RowProps {
  item: Task                         
  toggleTodo: (id: number) => void   // flips done/undone
}

export default function Row({ item, toggleTodo }: RowProps) {
  return (
    // Pressing anywhere on the row toggles the task
    <TouchableOpacity
      style={styles.row}
      onPress={() => toggleTodo(item.id)}
      accessibilityRole="button"
      accessibilityLabel={
        item.completed
          ? `Mark ${item.text} as undone`
          : `Mark ${item.text} as done`
      }
    >

      <Text style={[styles.rowText, item.completed && styles.rowTextDone]}>
        {item.text}
      </Text>
    </TouchableOpacity>
  )
}