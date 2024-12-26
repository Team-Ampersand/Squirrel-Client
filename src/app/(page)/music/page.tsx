import FilterWrapper from '@/components/common/Filter';
import Header from '@/components/common/Header';
import TableForm from '@/components/common/Table/Organisms/TableForm';
import Title from '@/components/common/Title';

export default function Music() {
  return (
    <div className="h-screen w-full bg-background-bg">
      <div className="flex h-full">
        <Header />
        <div className="flex h-full w-full justify-center py-[50px]">
          <div className="h-full w-[95%]">
            <Title />
            <div className="flex h-full w-full gap-[32px]">
              <div className="mobile1:w-full h-[calc(100%-70px)] w-[75%]">
                <TableForm />
              </div>
              <div className="mobile1:hidden w-[25%]">
                <FilterWrapper />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
