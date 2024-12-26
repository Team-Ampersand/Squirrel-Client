import React from 'react';
import Logo from '@/components/common/Logo';
import ButtonWrapper from '../../molecules/ButtonWrapper';
import InputWrapper from '../../molecules/InputWrapper';

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
