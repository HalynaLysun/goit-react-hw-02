import FriendListItem from "./FriendListItem";

export default function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map((friend) => (
        <li className="friend-item" key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}
