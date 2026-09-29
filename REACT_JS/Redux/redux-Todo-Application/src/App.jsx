import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  addTodo,
  deleteTodo,
  editTodo,
} from "./Feauteres/todo/TodoSlice.js";
import "./App.css";
import Intro from "./components/Intro.jsx";
import Spinner from "./components/Spinner.jsx"

const App = () => {
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);
  const [showIntro, setShowIntro] = useState(true);
  const [showSpinner, setShowSpinner] = useState(false);
  const inputRef = useRef(null);


  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  const submitHandler = (e) => {
    e.preventDefault();

    if (input.trim() === "") {
      return toast.error("Please enter a valid task!");
    }

    if (editId) {
      dispatch(editTodo({ id: editId, title: input }));
      toast.success("Task updated successfully!");
      setEditId(null);
    } else {
      dispatch(
        addTodo({
          id: new Date().getTime(),
          title: input,
        })
      );
      toast.success("Task added successfully!");
    }

    setInput("");
  };

  const deleteTodoHandler = (id) => {
    dispatch(deleteTodo(id));
    toast.info("Task deleted");

    if (editId === id) {
      setEditId(null);
      setInput("");
    }
  };

  const editTodoHandler = (todo) => {
    setInput(todo.title);
    setEditId(todo.id);
  };

  const cancelEdit = () => {
    setEditId(null);
    setInput("");
  };
  useEffect(() => {
    const introTimer = setTimeout(() => {
      setShowIntro(false);
      setShowSpinner(true);
    }, 2200);

    const spinnerTimer = setTimeout(() => {
      setShowSpinner(false);
    }, 3100);

    return () => {
      clearTimeout(introTimer);
      clearTimeout(spinnerTimer);
    };
  }, []);
  if (showIntro) {
    return <Intro />;
  }

  if (showSpinner) {
    return <Spinner />;
  }
  return (
    <div className=" todo-app-enter min-h-screen bg-[#0b0f14] text-white flex items-center justify-center px-4 py-8">

      {/* Main Container */}
      <div className="w-full max-w-2xl">

        {/* Header */}
        <div className="mb-7">
          <div className="flex items-center justify-between mb-6">

            <div className="flex items-center gap-3">


              <div>
                <h1 className="text-4xl font-semibold tracking-tight">
                  Task Manager
                </h1>
                <p className="text-xs text-slate-500">
                  Personal workspace
                </p>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900/70">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="text-xs text-slate-400">
                Redux Toolkit
              </span>
            </div>

          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-100">
              Keep your work organized.
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Add, edit and manage your tasks from one simple workspace.
            </p>
          </div>
        </div>

        {/* Main Card */}
        <div className="rounded-2xl border border-slate-800 bg-[#11161d] shadow-2xl shadow-black/30 overflow-hidden">

          {/* Input Section */}
          <div className="p-4 sm:p-5 border-b border-slate-800">

            <form
              onSubmit={submitHandler}
              className="flex flex-col sm:flex-row gap-3"
            >
              <div className="relative flex-1">

                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  placeholder={
                    editId
                      ? "Update your task..."
                      : "Add a new task..."
                  }
                  onChange={(e) => setInput(e.target.value)}
                  className="
                    w-full
                    h-11
                    px-4
                    rounded-xl
                    bg-[#0b0f14]
                    border border-slate-800
                    text-sm
                    text-slate-200
                    placeholder:text-slate-600
                    outline-none
                    transition
                    focus:border-indigo-500
                    focus:ring-2
                    focus:ring-indigo-500/10
                  "
                />

              </div>

              <div className="flex gap-2">

                <button
                  type="submit"
                  className={`
                    h-11
                    px-5
                    rounded-xl
                    text-sm
                    font-medium
                    transition
                    active:scale-[0.98]
                    cursor-pointer
                    ${editId
                      ? "bg-emerald-600 hover:bg-emerald-500 text-white"
                      : "bg-[#f35c25] hover:bg-[#d63900] text-white"
                    }
                  `}
                >
                  {editId ? "Update Task" : "Add Task"}
                </button>

                {editId && (
                  <button
                    type="button"
                    onClick={cancelEdit}
                    className="
                      h-11
                      px-4
                      rounded-xl
                      text-sm
                      font-medium
                      text-slate-400
                      bg-slate-800/70
                      border border-slate-700
                      hover:bg-slate-800
                      hover:text-slate-200
                      transition
                      cursor-pointer
                    "
                  >
                    Cancel
                  </button>
                )}

              </div>
            </form>

          </div>

          {/* Tasks Header */}
          <div className="px-4 sm:px-5 pt-5 pb-3">

            <div className="flex items-center justify-between">

              <div>
                <h3 className="text-sm font-semibold text-slate-200">
                  Your Tasks
                </h3>

                <p className="text-xs text-slate-600 mt-1">
                  Stay focused on what matters.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500">
                  Total
                </span>

                <span className="min-w-7 h-7 px-2 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-semibold text-slate-300">
                  {todos ? todos.length : 0}
                </span>
              </div>

            </div>

          </div>

          {/* Todo List */}
          <div className="px-4 sm:px-5 pb-5">

            <div className="space-y-2.5 max-h-[400px] overflow-y-auto custom-scrollbar">

              {todos && todos.length > 0 ? (
                todos.map((todo) => (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    isEditing={editId === todo.id}
                    deleteTodoHandler={deleteTodoHandler}
                    editTodoHandler={editTodoHandler}
                  />
                ))
              ) : (
                <div className="py-14 text-center border border-dashed border-slate-800 rounded-xl">

                  <button
                    type="button"
                    onClick={() => inputRef.current?.focus()}
                    className="w-11 h-11 mx-auto mb-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center cursor-pointer hover:bg-slate-800 hover:border-slate-700 transition"
                  >
                    <span className="text-lg text-slate-600">
                      +
                    </span>
                  </button>

                  <p className="text-sm font-medium text-slate-400">
                    No tasks yet
                  </p>

                  <p className="text-xs text-slate-600 mt-1">
                    Add your first task above.
                  </p>

                </div>
              )}

            </div>

          </div>

        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4 px-1">

          <p className="text-[11px] text-slate-600">
            Built with React & Redux Toolkit
          </p>

          <p className="text-[11px] text-slate-700">
            Task Workspace
          </p>

        </div>

      </div>

      <ToastContainer
        position="bottom-right"
        theme="dark"
        toastClassName="!bg-[#11161d] !border !border-slate-800 !text-slate-200 !rounded-xl"
      />

    </div>
  );
};

export default App;


// ==============================
// Todo Item
// ==============================

const TodoItem = ({
  todo,
  isEditing,
  editTodoHandler,
  deleteTodoHandler,
}) => {
  return (
    <div
      className={`
        group
        flex
        items-center
        justify-between
        gap-4
        px-4
        py-3.5
        rounded-xl
        border
        transition-all
        duration-200
        ${isEditing
          ? "bg-indigo-500/[0.06] border-indigo-500/40"
          : "bg-[#0d1218] border-slate-800 hover:border-slate-700 hover:bg-[#10161d]"
        }
      `}
    >

      {/* Task Content */}
      <div className="flex items-center gap-3 min-w-0">

        <div
          className={`
            w-2
            h-2
            rounded-full
            shrink-0
            transition
            ${isEditing
              ? "bg-indigo-400"
              : "bg-slate-700 group-hover:bg-indigo-500"
            }
          `}
        />

        <h3
          className="
            text-sm
            text-slate-300
            font-medium
            break-all
            leading-relaxed
          "
        >
          {todo.title}
        </h3>

      </div>

      {/* Actions */}
      <div className="flex items-center gap-1.5 shrink-0">

        <button
          onClick={() => editTodoHandler(todo)}
          className="
            h-8
            px-3
            rounded-lg
            text-xs
            font-medium
            text-slate-400
            border
            border-transparent
            hover:border-slate-700
            hover:bg-slate-800
            hover:text-slate-200
            transition
            cursor-pointer
          "
        >
          Edit
        </button>

        <button
          onClick={() => deleteTodoHandler(todo.id)}
          className="
            h-8
            px-3
            rounded-lg
            text-xs
            font-medium
            text-slate-500
            border
            border-transparent
            hover:border-rose-500/20
            hover:bg-rose-500/10
            hover:text-rose-400
            transition
            cursor-pointer
          "
        >
          Delete
        </button>

      </div>

    </div>
  );
};