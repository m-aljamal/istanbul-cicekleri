import React, { useState } from "react";

const SendForm = () => {
  const [value, setValue] = useState("");
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(value);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="shadow-2xl rounded-3xl max-w-lg mx-auto  py-2 flex justify-between overflow-hidden "
    >
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder="E-posta adresiniz"
        className="outline-none text-gray-700 px-5 text-sm flex-1 "
      />
      <button
        type="submit"
        className="bg-primary text-white rounded-3xl px-8 py-2 mr-2 hover:bg-secondary transition-all duration-150 ease-out  "
      >
        Gönder
      </button>
    </form>
  );
};

export default SendForm;
