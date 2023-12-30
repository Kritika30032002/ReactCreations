/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./Card.css";
function Card({ user }) {
  const {
    avatar_url,
    bio,
    created_at,
    followers,
    following,
    location,
    name,
    login,
    html_url,
    public_repos,
    message,
  } = user;
  if (message == "Not Found") {
    return <h1>User not found.</h1>;
  }

  const date = new Date(created_at);
  const options = { year: "numeric", month: "long", day: "numeric" };

  return (
    <div className="user">
      <img src={avatar_url} alt="user" className="avatar" />
      <div className="name">
        <a href={html_url}>{name || login}</a>
      </div>
      <div className="created_at">
        Profile created at :{" "}
        {new Intl.DateTimeFormat("en-US", options).format(date)}
      </div>
      <div className="bio">{bio}</div>
      <div className="location">{location}</div>
      <div className="followers">followers: {followers}</div>
      <div className="following">following: {following}</div>
      <div className="public_repos">public repository: {public_repos}</div>
    </div>
  );
}

export default Card;
