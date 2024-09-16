"use client";

import React from "react";

const RecordModal = ({ isOpen, closebtn }) => {
 
  return (
    
    <div>
      <dialog open={isOpen} className="modal bg-green">
        <div className="modal-box flex ">
          <div className="w-[350px] flex flex-col">
            <h1 className=" border-b-2 border-slate-200 py-3"><strong>Add record</strong></h1>
            <div className="flex">
         <button class=" join-item btn btn-outline my-5 w-[170px] h-[40px] rounded-lg mr-3">Income</button>
          <button class=" join-item btn btn-outline my-5 w-[170px] h-[40px] rounded-lg">Expense</button>
          </div></div>
          <div></div>
          <div className="modal-action">
            <form method="dialog">
          <button onClick={closebtn}>Close</button></form>
        </div></div>
     </dialog>
      </div>
  
  );
};

export default RecordModal;
