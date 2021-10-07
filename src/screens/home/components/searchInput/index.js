import Input from 'components/Input';
import React, { useState } from 'react';

const SearchInput = () => {
  const [dataInput, setDataInput] = useState({
    keyword: '',
  });

  const handleChangeInput = (e) => {
    const { value, name } = e.target;
    setDataInput({
      ...dataInput,
      [name]: value,
    });
  };
  return (
    <div className="search-input">
      <div className="search-input__label">
        <p>Tìm kiếm theo từ khóa</p>
      </div>
      <Input
        placeholder="Nhập từ khóa tìm kiếm"
        value={dataInput?.keyword}
        onChange={(e) => handleChangeInput(e)}
        name="keyword"
        isIconClose
      />
    </div>
  );
};

export default SearchInput;
