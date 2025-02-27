"use client";
import React, { useState } from "react";
import ukFlag from "@/public/images/english.png";
import Image from "next/image";
import dynamic from 'next/dynamic';

const Select = dynamic(() => import('react-select'), { ssr: false });

const options = [
    {
        id: 1,
        name: 'English (UK)',
        src: ukFlag,
        alt:'uk'

    },
    {
        id: 2,
        name: 'English (US)',
        src: ukFlag, // bcz right now I don't have US flag
        alt:'us'

    },
    {
        id: 3,
        name: 'বাংলা (BD)',
        src: ukFlag, // bcz right now I don't have BD flag
        alt:'bd'

    },
]
function LanguageInput() {
  const [selectedLang, setSelectedLang] = useState(options[0]);
  return (
    <div className="w-[90%]">
      <Select
        options={options}
        placeholder={selectedLang.name}
        onChange={setSelectedLang}
        className="md:mb-4"
        getOptionLabel={(e) =>(
            <div className="flex items-center">
                <Image src= {e.src} alt={e.name} className="mr-2"/>
                {e.name}
            </div>
        )} 
        styles={{
          control: (base) => ({
            ...base,
            backgroundColor: '#13253F',
            color: '#FFFFFF99',
            borderColor: 'gray',
            padding: '4px'
          }),
          singleValue: (base) => ({ ...base, color: '#FFFFFF99', fontSize:'14px' }),
          menu: (base) => ({ ...base, backgroundColor: '#13253F' }),
          option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? '#0F1E2C' : '#13253F',
            color: '#FFFFFF99', fontSize:'14px', borderLeft:'1px solid gray'
          })
        }}
      />
    </div>
  );
}

export default LanguageInput;
