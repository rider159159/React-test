import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <main className="bg-primary-100 text-white flex flex-col justify-center items-center gap-3 py-3">
        <h2>歡迎來到首頁!</h2>
        <p>此網站可以查看景點，以方便規畫你的旅程!</p>
        <Link to="/tour" className="inline-block text-center w-[200px] py-2 bg-primary rounded-full">前往選擇景點</Link>

      </main>
    </>
  );
}
export default Home