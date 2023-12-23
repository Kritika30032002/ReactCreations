import { Friend } from "./Friend";

export function FriendList({ friends, onSelectFriend, selectedFriend }) {
    return (
        <div className="friend__container flex flex-column">
            {friends.map((friend) => (
                <Friend
                    friend={friend}
                    key={friend.image}
                    onSelectFriend={onSelectFriend}
                    selectedFriend={selectedFriend}
                />
            ))}
        </div>
    );
}
