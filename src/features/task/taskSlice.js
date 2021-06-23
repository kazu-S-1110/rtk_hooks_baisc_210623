import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  idCount: 4,
  tasks: [
    { id: 4, title: 'Task D', completed: false },
    { id: 3, title: 'Task C', completed: false },
    { id: 2, title: 'Task B', completed: false },
    { id: 1, title: 'Task A', completed: false },
  ],
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    //タスクの新規作成
    newTask: (state, action) => {
      state.idCount++;
      const newItem = {
        id: state.idCount,
        title: action.payload,
        completed: false,
      };
      state.tasks = [newItem, ...state.tasks];
    },
    //タスクのチェックの反転
    completeTask: (state, action) => {
      const task = state.task.find((t) => t.id === action.payload.id);
      if (task) {
        task.completed = !task.completed;
      }
    },
    // タスクの削除
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload.id);
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {},
});

export const { increment, decrement, incrementByAmount } = taskSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectTask = (state) => state.counter.value;

export default taskSlice.reducer;
