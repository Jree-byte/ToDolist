
export type Task = {
  id: number          // unique id, created with Date.now() when the task is added
  text: string        // the task description shown in the list
  completed: boolean  // true = done (shown with a line through), false = not done
}