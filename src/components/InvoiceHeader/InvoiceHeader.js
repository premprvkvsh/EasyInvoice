


import React, { Fragment, useContext } from "react";
import Input from "../../ui/Input";
import AuthContext from "../../stores/AuthContext";

const InvoiceHeader = () => {
  const cntx = useContext(AuthContext);
  const todayDate = new Date().toISOString().slice(0, 10);

  return (
    <Fragment>
      <div className="flex justify-between mb-2 flex-wrap date_inv">
        <div className="date inline-flex items-center mb-2">
          <h3 className="text-sm font-semibold mr-1">Current Date:</h3>
          <span className="text-sm font-bold">{todayDate}</span>
        </div>
        <div className="invoice inline-flex items-center">
          <h3 className="text-sm font-semibold mr-2">Invoice Number:</h3>
          <Input
            onChange={cntx.onAddInvnum}
            type="number"
            min="1"
            value={cntx.invHeadData.invNum}
            className="w-12 p-1 border rounded"
          />
        </div>
      </div>
      <div className="due_date inline-flex items-center">
        <h3 className="text-sm font-semibold mr-1">Due Date:</h3>
        <Input
          onChange={cntx.onAddInvdueDate}
          value={cntx.invHeadData.dueDate}
          type="date"
          className="p-1 border rounded"
        />
      </div>
    </Fragment>
  );
};

export default InvoiceHeader;
