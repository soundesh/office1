import React from "react";
import ImportExportIcon from "@mui/icons-material/ImportExport";

const SortDate = () => {
  return (
    <div>
      <div>
        <button className="text-white bg-black color-white">
          <i class="fa-solid fa-plus"></i>ADD
        </button>
      </div>

      <form>
        <h3>
          <ImportExportIcon />
          <span>sort</span>
        </h3>
        <input type="radio" id="age1" name="age" value="30" />
        <label for="age1">0 - 30</label>
        <input type="radio" id="age2" name="age" value="60" />
        <label for="age2">31 - 60</label>
      </form>
    </div>
  );
};

export default SortDate;
