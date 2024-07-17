'use client';
import React from 'react';
import { Spin } from '@douyinfe/semi-ui';

export default function Loading() {
  return <div className="flex justify-center items-center h-screen">
    <Spin />
    <span className='ml-4'>loading...</span>
  </div>
}
