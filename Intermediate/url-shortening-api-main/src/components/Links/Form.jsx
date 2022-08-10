// import { useState } from "react";

const Form = ({ handlesubmit, getlink }) => {
  return (
    <form onSubmit={handlesubmit} noValidate>
      <input
        type="url"
        placeholder="Shorten a link here..."
        onChange={getlink}
        required
      />
      <input type="submit" value="Shorten It!" />
    </form>
  );
};

export default Form;
