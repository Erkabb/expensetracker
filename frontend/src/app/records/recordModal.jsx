"use client";

import React, { useState } from "react";

const RecordModal = ({ isOpen, closebtn }) => {
  const [incomeTr, setIncomeTr] = useState(false);
  const [expenseTr, setExpenseTr] = useState(false);
  // const incomeChange = () => {
  //   setIncomeTr(true);
  //   setExpenseTr(false);
  // };
  return (
    <div className="">
      <dialog open={isOpen} className="modal bg-green ">
        <div className="modal-box flex w-[798px] h-[515px] ">
          <div className="w-[350px] flex flex-col">
            <h1 className=" border-b-2 border-slate-200 py-3">
              <strong>Add record</strong>
            </h1>
            <div className="flex">
              <button
                class=" join-item btn btn-outline my-5 w-[170px] h-[40px] rounded-lg mr-3"
                onClick={() => setIncomeTr(true)}
              >
                Income
              </button>
              <button
                class=" join-item btn btn-outline my-5 w-[170px] h-[40px] rounded-lg"
                onClick={() => setExpenseTr(true)}
              >
                Expense
              </button>
              <IncomeTr isOpen={incomeTr} />
            </div>
          </div>
          <div></div>
          <div className="modal-action">
            <form method="dialog">
              <button onClick={closebtn}>Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};
export const IncomeTr = ({ isOpen, closebtn, add }) => {
  return (
    <div className="flex">
      <dialog open={isOpen} className="w-[350px] h-[340px] flex mt-20 ml-6">
        <div className=" flex flex-col gap-3  ">
          Amount
          <input
            type="text"
            placeholder="₮ 000.00"
            className="w-[348px] h-[70px] border-2 border-slate-200 rounded-md"
          />
          Category
          <select class="select select-bordered w-[348px] h-[50px] ">
            <option disabled selected>
              Find or choose category
            </option>
            <p>Add category</p>
            <option>Food</option>
            <option>Home</option>
            <option>Gift</option>
            <option>Drink</option>
            <option>Taxi</option>
            <option>Shopping</option>
          </select>{" "}
          <div className="flex justify-between">
            <div>
              Date
              <input
                type="date"
                name="date"
                min="2022-12-31"
                className="w-[170px] h-[50px] border-2 border-slate-200 rounded-md"
              />
            </div>

            <div>
              Time
              <input
                type="time"
                name="datemax"
                className="w-[170px] h-[50px] border-2 border-slate-200 rounded-md"
              />
            </div>
          </div>{" "}
          <button className="btn w-[348px] bg-[#378d35] h-[40px] rounded-lg text-white">
            Add record
          </button>
        </div>
        <div></div>
      </dialog>
    </div>
  );
};

export default RecordModal;
