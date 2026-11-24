import { useState } from 'react'
import { TextInput, View } from 'react-native'
import styles from '../styles'

// App gives this component a function it calls when a new task is added
interface AddTodoProps {
  addTodo: (text: string) => void
}

export default function AddTodo({ addTodo }: AddTodoProps) {
  // The text currently typed in the input field
  const [input, setInput] = useState<string>('')

  // Called when the user presses submit/enter on the keyboard
  const submit = () => {
    if (!input.trim()) return // ignore empty or whitespace-only input
    addTodo(input.trim())     // pass the new task text up to App
    setInput('')              // clear the input field
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        value={input}
        placeholder="Add new task"
        onChangeText={setInput}
        onSubmitEditing={submit}
      />
    </View>
  )
}