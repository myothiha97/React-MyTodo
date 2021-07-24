import { combineReducers } from "redux";
import themeReducer from "./theme/theme.reducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import todoListReducer from "./todo-list/todo-list.reducer";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["theme"],
};

const rootReducer = combineReducers({
  theme: themeReducer,
  todoList: todoListReducer,
});

export default persistReducer(persistConfig, rootReducer);
