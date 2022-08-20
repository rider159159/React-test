import { Link } from "react-router-dom";

function Notfound() {
  return (
    <>
      <main>
        <p>找不到頁面</p>
      </main>
      <nav>
        <Link to="/">回首頁</Link>
      </nav>
    </>
  );
}

export default Notfound