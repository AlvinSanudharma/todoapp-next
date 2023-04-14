"use client";

import { ITask } from "@/types/tasks";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Modal from "./Modal";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { editTodo } from "@/api";

type Props = {
  task: ITask;
};

export default function Task({ task }: Props) {
  const router = useRouter();

  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDeleted, setOpenModalDeleted] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(task.text);

  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    await editTodo({
      id: task.id,
      text: taskToEdit,
    });

    setTaskToEdit("");
    setOpenModalEdit((prev) => !prev);

    router.refresh();
  };

  return (
    <tr>
      <td className="w-full">{task.text}</td>
      <td className="flex gap-5">
        <FiEdit
          cursor="pointer"
          className="text-blue-500"
          size={25}
          onClick={() => setOpenModalEdit((prev) => !prev)}
        />
        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form onSubmit={handleSubmitEditTodo}>
            <h3 className="font-bold text-lg">Add new task</h3>
            <div className="modal-action">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
                value={taskToEdit}
                onChange={(e) => setTaskToEdit(e.target.value)}
              />
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </form>
        </Modal>
        <FiTrash2 cursor="pointer" className="text-red-500" size={25} />
      </td>
    </tr>
  );
}
