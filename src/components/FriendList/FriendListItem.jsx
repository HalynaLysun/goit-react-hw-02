export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <div>
      <img
        src={avatar}
        alt="Avatar"
        width="78
      "
      />
      <p className="friend-neame">{name}</p>
      {isOnline ? (
        <p className="status online">Online</p>
      ) : (
        <p className="status offline">Offline</p>
      )}
    </div>
  );
}
