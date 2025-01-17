import { useState } from "react";

const NewTask = ({ onAddTask }) => {
  const [taskValue, setTaskValue] = useState("");

  const handleChange = (event) => {
    setTaskValue(event.target.value);
  };

  const handleAddTask = () => {
    onAddTask(taskValue);
    setTaskValue("");
  };
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={taskValue}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleAddTask}
      >
        Add task
      </button>
    </div>
  );
};

export default NewTask;
