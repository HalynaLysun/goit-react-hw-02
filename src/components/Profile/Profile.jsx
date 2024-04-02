export default function Profile({
  image,
  name,
  tag,
  location,
  stats: { followers, views, likes },
}) {
  return (
    <div className="container">
      <div className="wrapper">
        <img className="user-photo" src={image} alt="User avatar" />
        <p className="user-name">{name}</p>
        <p className="user-tag">{tag}</p>
        <p className="user-location">{location}</p>
      </div>
      <ul className="user-list">
        <li className="user-item">
          <span className="user-followers">Followers</span>
          <span className="user-followers data">{followers}</span>
        </li>
        <li className="user-item">
          <span className="user-views">Views</span>
          <span className="user-views data">{views}</span>
        </li>
        <li className="user-item">
          <span className="user-likes">Likes</span>
          <span className="user-likes data">{likes}</span>
        </li>
      </ul>
    </div>
  );
}
