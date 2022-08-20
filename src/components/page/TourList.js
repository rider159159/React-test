import { useState,useEffect } from "react";
import { useNavigate  } from "react-router-dom";
import { zipCode } from "../../assets/zipCode"

function TourList() {
  const [data,setData] = useState([]);
  const [zipMenu] = useState(zipCode);
  const [selectTarget,setSelectTarget] = useState('');
  const navigate = useNavigate();

  useEffect(()=>{
    fetch("https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c")
    .then(res=>res.json())
    .then(result=>{
        const newData = result.data.XML_Head.Infos.Info;
        setData(newData)
          })
  },[])

  return (
    <>
      <main className="px-4 lg:px-10">
        <div className="flex flex-col w-full items-center mb-6">
        <h2>請選擇觀光地區</h2>
        <select defaultValue={'DEFAULT'} onChange={(e) => setSelectTarget(e.target.value)} className="border-2 border-black w-48">
          <option className="hidden" value="DEFAULT" disabled>請選擇區域</option>
          {
            zipMenu.map((item,index)=>{
              return(
                <option key={index} value={item.zip} className="px-5 py-2">{ item.name }</option>
              )
            })
          }
        </select>
        </div>

        <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {
            data.filter((item)=> item.Zipcode === selectTarget)
            .map((i)=>{
              return <li key={i.Id} onClick={()=>{ navigate(`/tour/${i.Id}`)}} className=" border-primary border rounded-xl flex flex-col cursor-pointer">
                <img src={i.Picture1} className="h-[250px] object-cover rounded-t-xl" alt="" />
                <div className="flex flex-col gap-2 my-2 px-4">
                  <div className="flex">
                    <span className="font-bold mr-2">景點名稱: </span>
                    <p>{i.Name}</p>
                    </div>
                  <div className="flex">
                    <span className="font-bold mr-2">連絡電話: </span>
                    <p>{i.Tel}</p>
                  </div>
                  <div className="flex">
                    <span className="font-bold mr-2">景點地址:: </span>
                    <p> {i.Add}</p>
                  </div>
                </div>
              </li>
            })
          }
          <li></li>
        </ul>

      </main>
    </>
  );
}
export default TourList