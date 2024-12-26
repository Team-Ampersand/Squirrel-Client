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
    <div className="w-18 flex h-full flex-col items-center bg-background-card py-9">
      <Squirrel />
      <div className="mt-9 flex grow flex-col items-center gap-2">
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
