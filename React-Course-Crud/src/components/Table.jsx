import React from "react";
import CreateBtn from "./CreateBtn";
import RowGroup from "./RowGroup";

const Table = () => {
  return (
    <section>
      <div className="relative overflow-x-auto mb-8">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-base text-gray-700 bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Short Name
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Fee
              </th>
              <th scope="col" colSpan={2} className="px-6 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>

          <RowGroup />

        </table>
      </div>

    <CreateBtn />
     
    </section>
  );
};

export default Table;
