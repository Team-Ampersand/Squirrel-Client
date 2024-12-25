import FilterWrapper from '@/components/common/Filter';
import Header from '@/components/common/Header';
import TableForm from '@/components/common/Table/Organisms/TableForm';
import Title from '@/components/common/Title';

export default function Music() {
  return (
    <div className="h-screen w-full bg-background-bg">
      <div className="flex h-full">
        <Header />
        <div className="flex h-full w-full justify-center py-[56px]">
          <div className="h-full w-[95%]">
            <Title />
            <div className="flex h-full gap-[32px]">
              <div className="h-full w-[75%] bg-background-card">
                <TableForm />
              </div>
              <div className="w-[25%]">
                <FilterWrapper />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
