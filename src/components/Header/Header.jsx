import { GiArchiveResearch } from "react-icons/gi";
const Header = () => {
  return (
    <>
      <div className="navbar bg-black text-white">
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
              className="menu menu-sm dropdown-content bg-black text-white rounded-box z-[1] mt-3 w-52 p-2"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Members</a>
                <ul className="p-2">
                  <li>
                    <a>Director</a>
                  </li>
                  <li>
                    <a>Postdocs</a>
                  </li>
                  <li>
                    <a> Ph.D Students</a>
                  </li>
                  <li>
                    <a>M.S. Students</a>
                  </li>
                  <li>
                    <a>Alumni</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Research</a>
                <ul className="p-2">
                  <li>
                    <a>Machine Learning</a>
                  </li>
                  <li>
                    <a>Bio-informatics</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Publications</a>
              </li>
              <li>
                <a>IoD Site</a>
              </li>
              <li>
                <a>Activities</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl font-bold"><GiArchiveResearch /> Smart Lab</a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <details>
                <summary>Members</summary>
                <ul className="p-2 bg-black text-white">
                  <li>
                    <a>Director</a>
                  </li>
                  <li>
                    <a>Postdocs</a>
                  </li>
                  <li>
                    <a> Ph.D Students</a>
                  </li>
                  <li>
                    <a>M.S. Students</a>
                  </li>
                  <li>
                    <a>Alumni</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Research</summary>
                <ul className="p-2 bg-black text-white">
                  <li>
                    <a>Machine Learning</a>
                  </li>
                  <li>
                    <a>Bio-informatics</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Publications</a>
            </li>
            <li>
              <a>IoD Site</a>
            </li>
            <li>
              <a>Activities</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Login</a>
        </div>
      </div>
    </>
  );
};

export default Header;
