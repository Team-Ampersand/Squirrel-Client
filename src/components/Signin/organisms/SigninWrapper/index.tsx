import React from 'react';
import ButtonWrapper from '../../molecules/ButtonWrapper';
import InputWrapper from '../../molecules/InputWrapper';
import Logo from '@/components/common/Logo';

const SigninWrapper = () => {
  return (
    <div className="flex h-[438px] w-[444px] flex-col gap-8 rounded-lg bg-background-card px-8 py-9">
      <Logo />
      <div className="flex flex-col gap-[73px]">
        <InputWrapper />
        <ButtonWrapper />
      </div>
    </div>
  );
};

export default SigninWrapper;
