import { Link } from "react-router-dom";

function Header(){ 
  return (
    <header className="w-full bg-primary h-14 flex items-center justify-center">
      <ul className="flex text-white text-xl font-bold">
        <li >
          <Link to='/'>回首頁</Link>
        </li>
        <li className="px-6">|</li>
        <li>
        <Link to='/tour'>高雄旅遊景點</Link>
        </li>
      </ul>
    </header>
  );
}
export default Header