import m from "mithril";

const TopNav = {
  view(vnode) {
    const { title } = vnode.attrs;
    return (
      <nav className="horizontal-centered">
        <button className="shake">🍔</button>
        <p>
          <i>Good</i>
          <strong>Habits</strong>
          {title && `: ${title}`}
        </p>
        <a href="/auth/logout" className="logout">
          logout
        </a>
      </nav>
    );
  }
};

export default TopNav;
