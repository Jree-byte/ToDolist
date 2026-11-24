import { FlatList } from 'react-native'
import { Task } from '../utils/Todo'
import Row from '../utils/Row'

interface TodolistProps {
  tasks: Task[]                      // all tasks to display
  toggleTodo: (id: number) => void   // passed on to each Row
}

export default function Todolist({ tasks, toggleTodo }: TodolistProps) {
  return (
    <FlatList<Task>
      data={tasks}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Row item={item} toggleTodo={toggleTodo} />}
    />
  )
}