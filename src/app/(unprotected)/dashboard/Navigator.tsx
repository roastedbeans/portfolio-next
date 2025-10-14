'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'About', href: 'about' },
  { label: 'Contact', href: 'contact' },
  { label: 'Projects', href: 'projects' },
  { label: 'Milestones', href: 'milestones' },
  { label: 'Organizations', href: 'organizations' },
];

export default function Navigator() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const totalItems = navItems.length;

  return (
    <nav className="absolute top-1/2 -translate-y-1/2 left-24 z-50">
      <div className="relative w-[32rem] h-[32rem] rounded-full ">
        <div className="absolute inset-0 rounded-full h-full w-full z-10" />
        
        {navItems.map((item, index) => {
          const offset = index - selectedIndex;
          const normalizedOffset = ((offset % totalItems) + totalItems) % totalItems;
          const adjustedOffset = normalizedOffset > totalItems / 2 ? normalizedOffset - totalItems : normalizedOffset;
          
          const angleStep = 36;
          const angle = adjustedOffset * angleStep;
          const radius = 150;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;
          
          const isCenter = index === selectedIndex;
          const isVisible = Math.abs(adjustedOffset) <= 2;
          
          return (
            <Link
              key={item.label}
              href={{ pathname: '/dashboard', query: { tab: item.href } }}
              onClick={() => setSelectedIndex(index)}
              className={`absolute right-20 top-1/2 transition-all duration-500 ease-in-out w-52 z-20 ${
                isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
              style={{
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              }}
            >
              <span
                className={`block font-normal transition-all duration-500 whitespace-nowrap p-4 relative overflow-hidden ${
                  isCenter
                    ? 'text-white scale-125 font-semibold p-2 shadow-sm inset-0 backdrop-blur-sm  bg-white/5'
                    : 'text-muted-foreground group'
                }`}
              >
                {!isCenter && (
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                )}
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  {item.label}
                </span>
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}