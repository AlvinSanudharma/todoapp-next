import React from "react";
import { ITask } from "@/types/tasks";

type Props = {
  task: ITask;
};

export default function Task({ task }: Props) {
  return (
    <tr>
      <td>{task.text}</td>
      <td>Blue</td>
    </tr>
  );
}
