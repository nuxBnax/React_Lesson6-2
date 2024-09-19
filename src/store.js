// Хранилище - это объект, который содержит состояние приложения и предоставляет методы для его изменения
import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './reducers/todosReducer';



// Настройкеа Redux  хранилища с использованием todosReducer
const store = configureStore({
	reducer: {
		todos: todosReducer,
	}
});

export default store;