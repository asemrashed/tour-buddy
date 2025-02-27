"use client";
import React from "react";
import { useState } from "react";
import dynamic from 'next/dynamic';

const Select = dynamic(() => import('react-select'), { ssr: false });

const currencyOptions = [
  { id: 1, value: 'usd', label: 'U.S. Dollar ($)', short: 'USD' },
  { id: 2, value: 'eur', label: 'Euro (€)', short: 'EUR' },
  { id: 3, value: 'bdt', label: 'BD Taka (৳)', short: 'BDT' }
];

export default function CurrencyInput() {
  const [selectedCurrency, setSelectedCurrency] = useState(currencyOptions[0]);

  return (
    <div className="w-[90%]">
      {/* <div className="my-4">
        <div className="flex items-center rounded pl-3 border border-gray-500 py-1">
          <div className="shrink-0 text-base text-[#FFFFFF99] select-none sm:text-sm/6">
            $
          </div>
          <input
            type="string"
            name="price"
            id="price"
            className="block min-w-0 grow py-1.5 pr-3 pl-1 bg-[#13253F] text-base text-[#FFFFFF99] placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            placeholder="0.00"
          />
          <div className="grid shrink-0 grid-cols-1 focus-within:relative">
            <select
              id="currency"
              name="currency"
              aria-label="Currency"
              className="col-start-1 row-start-1 rounded bg-[#13253F] w-full appearance-none py-1.5 pr-7 pl-3 text-base text-[#FFFFFF99] focus:outline-2 focus:-outline-offset-2  sm:text-sm/6"
            >
              <option>USD</option>
              <option>CAD</option>
              <option>BDT</option>
            </select>
            <svg
              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-[#FFFFFF99] sm:size-4"
              viewBox="0 0 16 16"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                fillRule="evenodd"
                d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div> */}
      <Select
        options={currencyOptions}
        placeholder={selectedCurrency.label}
        onChange={setSelectedCurrency}
        styles={{
          control: (base) => ({
            ...base,
            backgroundColor: '#13253F',
            color: 'white',
            borderColor: 'gray',
            padding: '4px',
          }),
          singleValue: (base) => ({ ...base, color: '#FFFFFF99', fontSize:'14px' }),
          menu: (base) => ({ ...base, backgroundColor: '#13253F' }),
          option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? '#0F1E2C' : '#13253F',
            color: '#FFFFFF99',  fontSize:'14px'
          }),
          input:(base) => ({
            ...base, color:'white'
          })
        }}
      />
    </div>
  );
}
