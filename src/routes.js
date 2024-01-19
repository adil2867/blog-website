import React from 'react';
import Listing from './component/listing';
import { Routes, Route } from 'react-router-dom';

export default function Routes_list
() {
  return (
        <Routes>
            <Route path="/" element={<Listing/>} /> 
            <Route/>
        </Routes>
  )
}
 