import { useState,useEffect } from "react";
import {Link,useParams } from "react-router-dom";

function TourDetail() {
  const { Id } = useParams();
  const [data,setData] = useState({});
  const {Name,Picture1,Description,Add,Opentime,Tel,} = data; 

  useEffect(()=>{
    fetch("https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c")
    .then(res=>res.json())
    .then(result=>{
        const newData = result.data.XML_Head.Infos.Info.filter(item=>item.Id===Id);
        setData({...newData[0]})
    })
},[])
  return (
    <>
      <main className="flex flex-col gap-3 px-3 py-5">
        <h2 className="text-xl text-center font-bold">高雄景點 - {Name}</h2>
        <div className="flex w-full justify-center">
          <img className="object-cover" src={Picture1} alt={Name} />
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex">
            <span className="font-bold mr-2">景點名稱: </span>
            <p>{Name}</p>
            </div>
          <div className="flex">
            <span className="font-bold mr-2">連絡電話: </span>
            <p>{Tel}</p>
          </div>
          <div className="flex">
            <span className="font-bold mr-2">景點地址: </span>
            <p> {Add}</p>
          </div>
          <div className="flex">
            <span className="font-bold mr-2">開放時段: </span>
            <p> {Opentime}</p>
          </div>
          <div className=" inline-block">
            <span className="font-bold mr-2">景點介紹: </span>
            <p className=" inline"> {Description}</p>
          </div>
        </div>

        <div className="w-full justify-center items-center">
          <Link to="/tour" className="w-[150px] text-center bg-primary rounded-full py-2 text-white block mx-auto">返回景點列表</Link>
        </div>
      </main>
    </>
  );
}


export default TourDetail