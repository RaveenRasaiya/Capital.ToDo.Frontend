import { ActionCreators } from "../common/toDoReducer";
import * as axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://localhost:44311/todo",
});

export const GetAllToDos = async (dispatch) => {
  try {
    const { data } = await axiosInstance.get();

    dispatch(ActionCreators.getAllToDo(data));
  } catch (ex) {
    console.log(ex);
  }
};

export const DeleteToDo = async (dispatch, todo) => {
  try {   
    await axiosInstance.delete(`/${todo.id}`);
    dispatch(ActionCreators.deleteToDo(todo));
  } catch {
    console.log("Error!");
  }
};

export const NewToDo = async (dispatch, todo) => {
  try {
    // api call
    const { data } = await axiosInstance.post("", todo);
    dispatch(ActionCreators.newToDo(data));
  } catch {
    console.log("Error!");
  }
};

export const ModifyToDo = async (dispatch, todo) => {
  try {
    // api call
    await axiosInstance.put("", todo);
    dispatch(ActionCreators.editToDo(todo));
  } catch {
    console.log("Error!");
  }
};
