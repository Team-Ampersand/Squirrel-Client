import React from 'react';
import TableCategories from '../../molecules/TableCategories';
import TableFooter from '../../molecules/TableFooter';
import TableHeader from '../../molecules/TableHeader';
import TableItem from '../../molecules/TableItem';

const TableForm = () => {
  return (
    <div className="space-y-[34px] rounded-sm border-1 border-solid border-gray-200 px-[30px] py-6">
      <TableHeader />
      <div className="border-b-1 border-solid border-gray-100 pb-6">
        <TableCategories />
        <div className="scrollbar scrollbar-thumb-primary-p30 scrollbar-track-main-100 scrollbar-thumb-rounded-md max-h-[740px] space-y-4 overflow-y-auto">
          {[...Array(11)].map((_, index) => (
            <TableItem key={index} />
          ))}
        </div>
        <TableFooter />
      </div>
    </div>
  );
};

export default TableForm;
