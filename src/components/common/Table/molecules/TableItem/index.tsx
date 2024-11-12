import React from 'react';
import Env from '../../atoms/Env';
import State from '../../atoms/State';
import Text from '../../atoms/Text';
import { TrashCan } from '@/assets/icons';
import IconButton from '@/components/common/IconButton';

const TableItem = () => {
  const data = [
    { value: '1', type: 'text' },
    { value: 'Dev', type: 'env' },
    { value: '2024-03-23 14:32:54', type: 'text' },
    { value: '한재형', type: 'text' },
    { value: '자습', type: 'text' },
    { value: 'CREATE', type: 'state' },
  ];

  return (
    <div className="flex h-[56px] items-center justify-between p-2 px-2">
      {data.map((item, index) => {
        let Component;
        switch (item.type) {
          case 'env':
            Component = <Env value={item.value} />;
            break;
          case 'state':
            Component = <State />;
            break;
          default:
            Component = <Text text={item.value} />;
        }
        return (
          <div key={index} className="flex-1">
            <div className="flex justify-center">{Component}</div>
          </div>
        );
      })}
      <div className="flex w-[40px] justify-center">
        <IconButton>
          <TrashCan />
        </IconButton>
      </div>
    </div>
  );
};

export default TableItem;
