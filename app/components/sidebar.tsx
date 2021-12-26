import { Link } from "remix";

export default function Sidebar() {
  return (
    <nav className="block mr-6 col-span-1 sticky">
      <div className="fixed">
        <h1>WEB APIS</h1>
        <ul>
          <li className="flex flex-col">
            <Link to="apis/eye-dropper">EyeDropper API</Link>
            <Link to="apis/audio">Audio API</Link>
            <Link to="apis/share">Share API</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
