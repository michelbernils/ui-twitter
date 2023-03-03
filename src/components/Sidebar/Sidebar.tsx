import {
  House,
  Hash,
  Bell,
  Envelope,
  BookmarkSimple,
  FileText,
  User,
  DotsThreeCircle,
} from "phosphor-react";

import twitterLogo from "../../assets/logo-twitter.svg";

import "../Sidebar/Sidebar.css";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div>
        <img className="logo" src={twitterLogo} alt="Twitter Logo" />
        <nav className="main-navigation">
          <a className="active" href="/">
            <House weight="fill" />
            Home
          </a>
          <a href="">
            <Hash />
            Explore
          </a>
          <a href="">
            <Bell />
            Notifications
          </a>
          <a href="">
            <Envelope />
            Message
          </a>
          <a href="">
            <BookmarkSimple />
            Bookmarks
          </a>
          <a href="">
            <FileText />
            List
          </a>
          <a href="">
            <User />
            Profile
          </a>
          <a href="">
            <DotsThreeCircle />
            More
          </a>
        </nav>
        <button className="new-tweet" type="button">
          Tweet
        </button>
      </div>
    </aside>
  );
}
