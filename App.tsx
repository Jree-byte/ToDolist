import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { Text } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage'
import type { Task } from './utils/Todo'
import AddTodo from './components/AddTodo'
import Todolist from './components/Todolist'
import styles from './styles'
 
// the task array is stored in AsyncStorage
const STORAGE_KEY = 'tasks'
 
export default function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  // true once the saved tasks have been read from AsyncStorage
  const [loaded, setLoaded] = useState<boolean>(false)
 
  // read saved tasks from the phone's memory
  useEffect(() => {
    const loadTodos = async () => {
      try {
        const json = await AsyncStorage.getItem(STORAGE_KEY)
        if (json) setTasks(JSON.parse(json)) 
      } catch (e) {
        console.error('Failed to load tasks', e)
      } finally {
        setLoaded(true) 
      }
    }
    loadTodos()
  }, [])
 
  // Runs every time tasks change: save them to the phone's memory.
  // Skipped before the initial load, otherwise the empty starting list
  // would overwrite the saved data.
  useEffect(() => {
    if (!loaded) return
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks)).catch(console.error)
  }, [tasks, loaded])
 
  // Add a new task to the top of the list
  // (creates a new array instead of changing the old one)
  const addTodo = (text: string) => {
    const task: Task = { id: Date.now(), text, completed: false }
    setTasks([task, ...tasks])
  }
 
  // Flip completed between true and false for the task with the given id.
    const toggleTodo = (id: number) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    )
  }
 
  return (
    
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Todo list</Text>
        <AddTodo addTodo={addTodo} />
        <Todolist tasks={tasks} toggleTodo={toggleTodo} />
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}