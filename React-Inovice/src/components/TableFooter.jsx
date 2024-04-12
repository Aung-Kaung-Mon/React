import React, { useContext } from "react";
import { generalContext } from "../contexts/ContextProvider";

const TableFooter = () => {
  const { records } = useContext(generalContext);
  return (
    <tfoot>
      <tr className="border-b">
        <td className="px-6 py-4 text-center" colSpan={4}>
          Total
        </td>
        <td className="px-6 py-4 text-end" id="recordTotal">
          {records
            .reduce((pv, cv) => {
              return pv + cv.cost;
            }, 0)
            .toFixed(2)}
        </td>
      </tr>
    </tfoot>
  );
};

export default TableFooter;
