import { Link } from "react-router-dom";

const linkStyle = {
  color: "#1746A2",
};
export default function HomePage() {
  return (
    <>
      <h1>Top Super Heroes</h1>
      <em>All about the world's most iconic defenders</em>
      <ul>
        <li>
          <Link to="/heroes" style={linkStyle}>
            Explore Super Heroes
          </Link>
        </li>
        <li>
          <Link to="/search" style={linkStyle}>
            Search your favorite super Hero
          </Link>
        </li>
      </ul>
    </>
  );
}

