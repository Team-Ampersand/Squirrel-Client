import React from 'react';
import TableCategories from '../../molecules/TableCategories';
import TableFooter from '../../molecules/TableFooter';
import TableHeader from '../../molecules/TableHeader';
import TableItem from '../../molecules/TableItem';

const TableForm = () => {
  return (
    <div className="flex h-full w-full flex-col space-y-[34px] rounded-lg bg-background-card px-[30px]">
      <TableHeader />
      <div className="flex flex-1 flex-col overflow-hidden border-b-1 border-solid border-gray-100">
        <TableCategories />
        <div className="scrollbar scrollbar-thumb-primary-p30 scrollbar-track-main-100 scrollbar-thumb-rounded-md h-full space-y-4 overflow-y-auto">
          {[...Array(20)].map((_, index) => (
            <TableItem key={index} />
          ))}
        </div>
        <TableFooter />
      </div>
    </div>
  );
};

export default TableForm;
