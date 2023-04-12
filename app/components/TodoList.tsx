import { ITask } from "@/types/tasks";
import React from "react";
import Task from "./Task";

type Props = {
  tasks: ITask[];
};

function TodoList({ tasks }: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Tasks</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => {
            return <Task key={task.id} task={task} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;
