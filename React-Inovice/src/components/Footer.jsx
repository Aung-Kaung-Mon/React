import { useContext } from "react";
import { generalContext } from "../contexts/ContextProvider";

const Footer = () => {
  const { toggleOpen } = useContext(generalContext);
  const handlePrintBtn = () => {
    print();
  };
  return (
    <footer className="py-3 flex print:hidden gap-2 justify-end mt-auto">
      <button
        type="button"
        id="manageProductBtn"
        className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-2 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
        onClick={toggleOpen}
      >
        Manage Product
      </button>
      <button
        onClick={handlePrintBtn}
        id="printBtn"
        className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Print
      </button>
    </footer>
  );
};

export default Footer;
