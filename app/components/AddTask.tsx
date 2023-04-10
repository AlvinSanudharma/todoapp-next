import { AiOutlinePlus } from "react-icons/ai";

type Props = {};

const AddTask = (props: Props) => {
  return (
    <div className="">
      <button className="btn btn-primary w-full">
        Add new task <AiOutlinePlus className="ml-2" size={18} />
      </button>
    </div>
  );
};

export default AddTask;
