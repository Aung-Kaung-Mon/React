import React, { useContext } from "react";
import TableGroup from "./TableGroup";
import TableFooter from "./TableFooter";
import { generalContext } from "../contexts/ContextProvider";

const Table = () => {
  const { records } = useContext(generalContext);
  return (
    <section>
      <div className="relative shadow-md sm:rounded-lg overflow-hidden">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-4">
                #
              </th>
              <th scope="col" className="px-6 py-4">
                Product name
              </th>
              <th scope="col" className="px-6 py-4 text-end">
                Price
              </th>
              <th scope="col" className="px-6 py-4 text-end">
                Quantity
              </th>
              <th scope="col" className="px-6 py-4 text-end">
                Cost
              </th>
            </tr>
          </thead>
          <TableGroup />
          {records.length ? <TableFooter /> : null}
        </table>
      </div>
      <div className="hidden mt-0 print:block print:mt-10">
        <p className="font-bold">ဝယ်ယူအားပေးမူ့ကို ကျေးဇူး အထူးတင်ရှိပါသည်။</p>
        <p className="text-gray-600">နောက်လည်း လာအားပေးပါခင်ဗျာ။</p>
      </div>
    </section>
  );
};

export default Table;
