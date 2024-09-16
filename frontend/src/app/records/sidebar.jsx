"use client";

import React, { useState } from "react";

const Sidebar = () => {
  const [addRecord, setAddRecord] = useState(false);
  const toggleRecord = () => {
    setAddRecord(!addRecord);
  };
  return (
    <div>
      <div className="flex flex-col justify-evenly gap-6 mx-3">
        <h1 className="text-[24px]">
          <strong>Records</strong>
        </h1>

        <button
          class="btn w-[250px] bg-[#0166FF] h-[40px] rounded-lg text-white"
          onclick={() => {
            return (
              <dialog class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                  <div class="join grid grid-cols-2">
                    <button class="join-item btn btn-outline">Income</button>
                    <button class="join-item btn btn-outline">Expense</button>
                  </div>
                  <div class="modal-action">
                    <form method="dialog">
                      <button class="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            );
          }}
        >
          {" "}
          <strong>Add records</strong>
        </button>

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

export default Sidebar;
