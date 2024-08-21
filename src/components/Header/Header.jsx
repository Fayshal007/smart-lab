import { GiArchiveResearch } from "react-icons/gi";
const Header = () => {
  return (
    <>
      <div className="navbar bg-[#228B22] text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#228B22] text-white rounded-box z-[1] mt-3 w-52 p-2"
            >
              <li className="hover:bg-[#50C878] hover:text-black rounded">
                <a>Home</a>
              </li>
              <li >
                <a className="hover:bg-[#50C878] hover:text-black rounded">Members</a>
                <ul className="p-2">
                  <li className="hover:bg-[#50C878] hover:text-black rounded">
                    <a>Director</a>
                  </li>
                  <li className="hover:bg-[#50C878] hover:text-black rounded">
                    <a>Postdocs</a>
                  </li>
                  <li className="hover:bg-[#50C878] hover:text-black rounded">
                    <a> Ph.D Students</a>
                  </li>
                  <li className="hover:bg-[#50C878] hover:text-black rounded">
                    <a>M.S. Students</a>
                  </li>
                  <li className="hover:bg-[#50C878] hover:text-black rounded">
                    <a>Alumni</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="hover:bg-[#50C878] hover:text-black rounded">Research</a>
                <ul className="p-2">
                  <li className="hover:bg-[#50C878] hover:text-black rounded">
                    <a>Machine Learning</a>
                  </li>
                  <li className="hover:bg-[#50C878] hover:text-black rounded">
                    <a>Bio-informatics</a>
                  </li>
                </ul>
              </li>
              <li className="hover:bg-[#50C878] hover:text-black rounded">
                <a>Publications</a>
              </li>
              <li className="hover:bg-[#50C878] hover:text-black rounded">
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <a className="btn hover:bg-[#50C878] hover:text-black text-3xl font-bold"><GiArchiveResearch /> Smart Lab</a>
        </div>
        <div className="navbar-center hidden lg:flex font-bold">
          <ul className="menu menu-horizontal px-1">
            <li className="hover:bg-[#50C878] hover:text-black rounded">
              <a>Home</a>
            </li>
            <li className="hover:bg-[#50C878] hover:text-black rounded">
              <details>
                <summary>Members</summary>
                <ul className="p-2 bg-[#228B22] text-white">
                  <li className="hover:bg-[#50C878] hover:text-black rounded">
                    <a>Director</a>
                  </li>
                  <li className="hover:bg-[#50C878] hover:text-black rounded">
                    <a>Postdocs</a>
                  </li>
                  <li className="hover:bg-[#50C878] hover:text-black rounded">
                    <a> Ph.D Students</a>
                  </li>
                  <li className="hover:bg-[#50C878] hover:text-black rounded">
                    <a>M.S. Students</a>
                  </li>
                  <li className="hover:bg-[#50C878] hover:text-black rounded">
                    <a>Alumni</a>
                  </li>
                </ul>
              </details>
            </li>
            <li className="hover:bg-[#50C878] hover:text-black rounded">
              <details>
                <summary>Research</summary>
                <ul className="p-2 bg-[#228B22] text-white">
                  <li className="hover:bg-[#50C878] hover:text-black rounded">
                    <a>Machine Learning</a>
                  </li>
                  <li className="hover:bg-[#50C878] hover:text-black rounded">
                    <a>Bio-informatics</a>
                  </li>
                </ul>
              </details>
            </li>
            <li className="hover:bg-[#50C878] hover:text-black rounded">
              <a>Publications</a>
            </li>
            <li className="hover:bg-[#50C878] hover:text-black rounded">
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <a className="btn hover:bg-[#50C878] hover:text-black rounded font-bold">Login</a>
        </div>
      </div>
    </>
  );
};

export default Header;
