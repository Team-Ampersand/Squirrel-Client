import React from 'react';

const TableCategories = () => {
  const categories = ['순번', 'env', '시간', '이름:id', '이벤트 타입', '상태'];

  return (
    <div className="flex items-center justify-between border-b-1 border-solid border-gray-100 px-2 pb-3">
      {categories.map((category, index) => (
        <div key={index} className="flex-1">
          <p className="text-center text-body2 text-neutral-n30">{category}</p>
        </div>
      ))}
      <div className="w-[40px]" />
    </div>
  );
};

export default TableCategories;
