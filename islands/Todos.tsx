function Todos() {
  return (
    <div className="mt-10 mx-auto max-w-sm w-full">
      <div className="flex items-center gap-4">
        <input
          id="todo"
          name="todo"
          type="text"
          placeholder="Enter new todo..."
          required
          className="w-full rounded-md py-1.5 px-3.5 ring-1 ring-inset ring-gray-300 placeholder:text-grey-400"
        />
        <button type="button" className="px-4 py-1.5 rounded-lg bg-lime-600 text-white text-sm font-medium">
          Add Todo
        </button>
        <button type="button" className="px-4 py-1.5 rounded-lg bg-red-600 text-white text-sm font-medium">
          Remove Todo
        </button>
      </div>
    </div>
  );
}

export default Todos;