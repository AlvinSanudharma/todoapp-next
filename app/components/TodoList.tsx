import { ITask } from "@/types/tasks";
import React from "react";

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
          {/* NOTE: 22:36 */}
          {tasks.map((task) => {
            return (
              <tr key={task.id}>
                <td>{task.text}</td>
                <td>Blue</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;
