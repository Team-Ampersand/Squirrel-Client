'use client';

import { usePathname } from 'next/navigation';
import React from 'react';
import NavItem from './atoms/NavItem';
import { Book, Music, Squirrel } from '@/assets/svg';

const navItems = [
  { href: '/', icon: Book },
  { href: '/music', icon: Music },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="h-full w-[72px] bg-background-card py-9">
      <Squirrel />
      <div className="mt-9 flex flex-col items-center gap-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <NavItem
              key={item.href}
              href={item.href}
              icon={item.icon}
              isActive={isActive}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Header;
