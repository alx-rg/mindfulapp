import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: [],
}

export const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: (state, action) => {
			const { name, body, mind, breath } = action.payload
			state.todos.unshift({ name, body, mind, breath })
		}
	}
})


export const { addTodo } = todosSlice.actions
export default todosSlice.reducer
