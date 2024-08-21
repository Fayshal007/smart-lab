import { GiArchiveResearch } from "react-icons/gi";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="navbar bg-[#228B22] text-white ">
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
                <NavLink to="/">Home</NavLink>
              </li>
              <li >
                <NavLink className="hover:bg-[#50C878] hover:text-black rounded">Members</NavLink>
                <ul className="p-2">
                  <li className="hover:bg-[#50C878] hover:text-black rounded">
                    <NavLink to="/director">Director</NavLink>
                  </li>
                  <li className="hover:bg-[#50C878] hover:text-black rounded">
                    <NavLink to="/postdocs">Postdocs</NavLink>
                  </li>
                  <li className="hover:bg-[#50C878] hover:text-black rounded">
                    <NavLink to="/phdstudents"> Ph.D Students</NavLink>
                  </li>
                  <li className="hover:bg-[#50C878] hover:text-black rounded">
                    <NavLink to="/msstudents">M.S. Students</NavLink>
                  </li>
                  <li className="hover:bg-[#50C878] hover:text-black rounded">
                    <NavLink to="/alumni">Alumni</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink className="hover:bg-[#50C878] hover:text-black rounded">Research</NavLink>
                <ul className="p-2">
                  <li className="hover:bg-[#50C878] hover:text-black rounded">
                    <NavLink to="/machinelearning">Machine Learning</NavLink>
                  </li>
                  <li className="hover:bg-[#50C878] hover:text-black rounded">
                    <NavLink to="/biosensor">Bio-sensor</NavLink>
                  </li>
                </ul>
              </li>
              <li className="hover:bg-[#50C878] hover:text-black rounded">
                <NavLink to="/publication">Publications</NavLink>
              </li>
              <li className="hover:bg-[#50C878] hover:text-black rounded">
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <NavLink to="/" className="btn hover:bg-[#50C878] hover:text-black text-3xl font-bold"><GiArchiveResearch /> Smart Lab</NavLink>
        </div>
        <div className="navbar-center hidden lg:flex font-bold z-50">
          <ul className="menu menu-horizontal px-1">
            <li className="hover:bg-[#50C878] hover:text-black rounded">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="hover:bg-[#50C878] hover:text-black rounded">
              <details>
                <summary>Members</summary>
                <ul className="p-2 bg-[#228B22] text-white">
                  <li className="hover:bg-[#50C878] hover:text-black rounded">
                    <NavLink to="/director">Director</NavLink>
                  </li>
                  <li className="hover:bg-[#50C878] hover:text-black rounded">
                    <NavLink to="/postdocs">Postdocs</NavLink>
                  </li>
                  <li className="hover:bg-[#50C878] hover:text-black rounded">
                    <NavLink to="/phdstudents"> Ph.D Students</NavLink>
                  </li>
                  <li className="hover:bg-[#50C878] hover:text-black rounded">
                    <NavLink to="/msstudents">M.S. Students</NavLink>
                  </li>
                  <li className="hover:bg-[#50C878] hover:text-black rounded">
                    <NavLink to="/alumni">Alumni</NavLink>
                  </li>
                </ul>
              </details>
            </li>
            <li className="hover:bg-[#50C878] hover:text-black rounded">
              <details>
                <summary>Research</summary>
                <ul className="p-2 bg-[#228B22] text-white">
                  <li className="hover:bg-[#50C878] hover:text-black rounded">
                    <NavLink to="/machinelearning">Machine Learning</NavLink>
                  </li>
                  <li className="hover:bg-[#50C878] hover:text-black rounded">
                    <NavLink to="/biosensor">Bio-sensor</NavLink>
                  </li>
                </ul>
              </details>
            </li>
            <li className="hover:bg-[#50C878] hover:text-black rounded">
              <NavLink to="/publication">Publications</NavLink>
            </li>
            <li className="hover:bg-[#50C878] hover:text-black rounded">
              <NavLink to="/contact">Contact</NavLink>
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
