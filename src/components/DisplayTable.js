import React, { useEffect, useState } from "react";
import { StaticData } from "../staticData";
import { StarIcon, SwitchVerticalIcon } from "@heroicons/react/outline"
import { StarIcon as SolidStar } from "@heroicons/react/solid"
import { useSelector, useDispatch } from 'react-redux'
import { addToFavourite, removeFromFavourite } from '../features/favourite/favouriteSlice'

const DisplayTable = () => {

  // Redux store
  const favourite = useSelector((state) => state.favourite.value)
  const dispatch = useDispatch()
  
  // data useState is used to store the data from the api 
  const [data, setData] = useState([]);
  // sortItem useState is used to store the sort item from the api
  const [sortItem, setSortItem] = useState('price');
  // sort useState is used to decide the sort order
  const [sort, setSort] = useState('desc');

  useEffect(() => {
    // getData();
    // setInterval(() => {
    const data = StaticData;
    const filteredData = data.filter(
      (item) => item.exchange_id === "BINANCE" && item.quote_asset === "USDT"
    );

    // switch the sort order
    switch (sortItem) {
      case 'symbol':
        filteredData.sort(function (a, b) {
          if (sort === "asc") {
            return a.symbol.localeCompare(b.symbol);
          } else {
            return b.symbol.localeCompare(a.symbol);
          }
        }
        );
        break;
        
        case 'price':
          filteredData.sort(function (a, b) {
            if (sort === "asc") {
              return a.price - b.price;
            } else {
              return b.price - a.price;
            }
          });
          break
        
        case 'change24h':
          filteredData.sort(function (a, b) {
            if (sort === "asc") {
              return a.change_24h - b.change_24h;
            } else {
              return b.change_24h - a.change_24h;
            }
          });
          break
        
        case 'volume24h':
          filteredData.sort(function (a, b) {
            if (sort === "asc") {
              return a.volume_24h - b.volume_24h;
            } else {
              return b.volume_24h - a.volume_24h;
            }
          });
          break

      default:
        break;
    }

    // filteredData.sort((a, b) => a.symbol.localeCompare(b.symbol));
    setData(filteredData);
    // // }, 5000);
  }, [sortItem, sort]);

  return (
    <div className="my-6 mx-8">
      <table className="mx-auto">
        <thead>
          <tr>
            <th scope="col" className="text-xl border-[1.4px] font-normal py-2 px-4 rounded-tl-lg">
              Sr No.
            </th>
            <th 
            onClick={() => {
              setSortItem('symbol');
              if (sort === 'asc') {
                setSort('desc')
              } else { 
                setSort('asc') 
              }
            } }
            scope="col" 
            className="text-xl border-[1.4px] font-normal py-2 px-4">
              <div className="items-center flex space-x-4 ">
                <span>Symbol</span>
                <SwitchVerticalIcon  
                className="w-5 h-5 cursor-pointer" />
              </div>
            </th>
            <th 
            onClick={() => {
              setSortItem('price');
              if (sort === 'asc') {
                setSort('desc')
              } else { 
                setSort('asc') 
              }
            } }
            scope="col" 
            className="text-xl border-[1.4px] font-normal py-2 px-4">
              <div className="items-center flex space-x-4 ">
                <span>Price</span>
                <SwitchVerticalIcon  
                className="w-5 h-5 cursor-pointer" />
              </div>
            </th>
            <th 
            onClick={() => {
              setSortItem('change24h');
              if (sort === 'asc') {
                setSort('desc')
              } else { 
                setSort('asc') 
              }
            } }
            scope="col" 
            className="text-xl border-[1.4px] font-normal py-2 px-4">
              <div className="items-center flex space-x-4 ">
                <span>Change 24h</span>
                <SwitchVerticalIcon  
                className="w-5 h-5 cursor-pointer" />
              </div>
            </th>
            <th 
            onClick={() => {
              setSortItem('volume24h');
              if (sort === 'asc') {
                setSort('desc')
              } else { 
                setSort('asc') 
              }
            } }
            scope="col" className="text-xl border-[1.4px] font-normal py-2 px-4">
              <div className="items-center flex space-x-4 ">
                <span>Volume 24h</span>
                <SwitchVerticalIcon  
                className="w-5 h-5 cursor-pointer" />
              </div>
            </th>
            <th scope="col" className="text-xl border-[1.4px] font-normal py-2 px-4 rounded-tr-lg">
              Exchange ID
            </th>
          </tr>
        </thead>
        <tbody>

          {
            data?.filter((item) => favourite.includes(item.symbol) ? item.symbol : null)?.map((item, index) => (
            <tr>
              <td className="border-[1.4px] font-normal py-2 px-4">{index+1}.</td>
              <td className="border-[1.4px] font-normal py-2 px-4">
                <div className="flex items-center justify-between">
                  <span>{item?.symbol}</span>
                  {
                    favourite.includes(item?.symbol) ? (
                      <SolidStar 
                      onClick={() => dispatch(removeFromFavourite(item?.symbol))}
                      className="w-5 h-5 cursor-pointer text-yellow-400" />
                    ):(

                      <StarIcon 
                      onClick={() => dispatch(addToFavourite(item?.symbol))}
                      className="w-5 h-5 cursor-pointer text-yellow-400" />
                    )
                  }
                </div>
              </td>
              <td className="border-[1.4px] font-normal py-2 px-4">{item?.price}</td>
              <td className="border-[1.4px] font-normal py-2 px-4">{item?.change_24h}</td>
              <td className="border-[1.4px] font-normal py-2 px-4">{item?.volume_24h}</td>
              <td className="border-[1.4px] font-normal py-2 px-4">{item?.exchange_id}</td>
            </tr>
            ))
          }
          {
            data?.filter((item) => !favourite.includes(item.symbol) ? item.symbol : null)?.map((item, index) => (
            <tr>
              <td className="border-[1.4px] font-normal py-2 px-4">{index+1+favourite.length}.</td>
              <td className="border-[1.4px] font-normal py-2 px-4">
                <div className="flex items-center justify-between">
                  <span>{item?.symbol}</span>
                  {
                    favourite.includes(item?.symbol) ? (
                      <SolidStar 
                      onClick={() => dispatch(removeFromFavourite(item?.symbol))}
                      className="w-5 h-5 cursor-pointer text-yellow-400" />
                    ):(

                      <StarIcon 
                      onClick={() => dispatch(addToFavourite(item?.symbol))}
                      className="w-5 h-5 cursor-pointer text-yellow-400" />
                    )
                  }
                </div>
              </td>
              <td className="border-[1.4px] font-normal py-2 px-4">{item?.price}</td>
              <td className="border-[1.4px] font-normal py-2 px-4">{item?.change_24h}</td>
              <td className="border-[1.4px] font-normal py-2 px-4">{item?.volume_24h}</td>
              <td className="border-[1.4px] font-normal py-2 px-4">{item?.exchange_id}</td>
            </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default DisplayTable;
