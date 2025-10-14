'use client';   

import React from 'react';
import Navigator from './Navigator';
import AboutScreen from './About';
import { useSearchParams } from 'next/navigation';

const DashboardPage = () => {
    const searchParams = useSearchParams();
    const tab = searchParams.get('tab');

    console.log(tab);


	return (
		<div className='h-screen w-full flex p-36 relative bg-gradient-to-br from-black to-primary'>
			<div className='w-2/5'>
				<Navigator />
			</div>
			<div className=' w-full rounded-4xl p-8 bg-white inset-shadow-sm inset-shadow-black/20'>
			
                {tab === 'about' && <AboutScreen />}
			</div>
		</div>
	);
};

export default DashboardPage;
