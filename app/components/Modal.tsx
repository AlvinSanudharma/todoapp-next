import React from "react";

type Props = {
  modalOpen: boolean;
  setModalOpen: any;
  children: React.ReactNode;
};

export default function Modal({ modalOpen, setModalOpen, children }: Props) {
  return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
      <div className="modal-box relative">
        <label
          onClick={() => setModalOpen((prev: any) => !prev)}
          className="btn btn-sm btn-circle absolute right-2 top-2"
        >
          ✕
        </label>
        {children}
      </div>
    </div>
  );
}
