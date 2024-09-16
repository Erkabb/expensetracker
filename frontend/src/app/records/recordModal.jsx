"use client";

import React from "react";

const RecordModal = ({ setAddRecord, closebtn }) => {
  return (
    <dialog open={setAddRecord} className="modal">
      <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div class="modal-box max-w-[800px]">
          <button class="join-item btn btn-outline">Income</button>
          <button class="join-item btn btn-outline">Expense</button>
        </div>
        <div class="modal-action">
          <form method="dialog">
            <button class="btn" onClick={closebtn}>
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default RecordModal;
