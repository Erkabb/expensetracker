"use client";

import React, { useState } from "react";
import RecordModal from "./recordModal";

const Sidebar = () => {
  return (
    <div>
      <div className="flex flex-col justify-evenly gap-6 mx-3">
        <h1 className="text-[24px]">
          <strong>Records</strong>
        </h1>
        <Addrecordbtn />
        <input
          type="text"
          placeholder="Search"
          class="input input-bordered w-[250px] h-[40px] max-w-xs"
        />
      </div>
      <div className="flex flex-col my-6 gap-5 mx-3">
        <h1>
          <strong>Type</strong>
        </h1>{" "}
        <div className="mx-5">
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              checked="checked"
              class="checkbox checkbox-xs"
            />
            <p>All</p>
          </div>
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              checked="checked"
              class="checkbox checkbox-xs"
            />
            <p>Income</p>
          </div>
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              checked="checked"
              class="checkbox checkbox-xs"
            />
            <p>Expense</p>
          </div>
        </div>
      </div>
      <div className="mx-3">
        <h1>
          <strong>Category</strong>
        </h1>
      </div>
    </div>
  );
};
export const Addrecordbtn = () => {
  const [addRecord, setAddRecord] = useState(false);
  const handleClose = () => {
    setAddRecord(false);
  };
  return (
    //   <>

    //   <button
    //     className="btn bg-[#0166FF] text-white btn-sm"
    //     onClick={() => setAddRecord(true)}
    //   >

    //     Add
    //   </button>

    //   <RecordModal isOpen={addRecord} closebtn={handleClose} />
    // </>
    <div className="">
      <button
        className="btn w-[250px] bg-[#0166FF] h-[40px] rounded-lg text-white"
        onClick={() => setAddRecord(true)}
      >
        <strong>Add records</strong>
      </button>
      <RecordModal isOpen={addRecord} closebtn={handleClose} />
    </div>
  );
};
export default Sidebar;
