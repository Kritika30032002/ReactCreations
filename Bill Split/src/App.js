import { useState } from "react";
import { FriendList } from "./FriendList";
import { AddFriend } from "./AddFriend";
import { BillSplit } from "./BillSplit";
import { Button } from "./Button";

const friendsData = [
    {
        id: 1,
        name: "Like",
        balance: -7,
        image: "https://i.pravatar.cc/48?u=464548",
    },
    {
        id: 2,
        name: "The",
        balance: 20,
        image: "https://i.pravatar.cc/48?u=46454wefw-wef8",
    },
    {
        id: 3,
        name: "Post",
        balance: 30,
        image: "https://i.pravatar.cc/48?u=464w84rwf8548",
    },
    // {
    //     id: 4,
    //     name: "Jane",
    //     balance: 0,
    //     image: "https://i.pravatar.cc/48?u=464-23454fd-4wdf548",
    // },
];

export default function App() {
    const [addFriendOpen, setAddFriendOpen] = useState(false);
    const [friends, setFriends] = useState(friendsData);
    const [selectedFriend, setSelectedFriend] = useState(null);

    function handleAddFriendOpen() {
        setAddFriendOpen((addFriend) => !addFriend);

        setSelectedFriend(null);
    }

    function handleSelectFriend({ id }) {
        setSelectedFriend((selectedFriend) =>
            selectedFriend !== id ? id : null
        );
        setAddFriendOpen(false);
    }

    function handleAddFriend(friend) {
        setFriends((friends) => [...friends, friend]);
    }

    function handleBillSplit(value) {
        setFriends((friends) =>
            friends.map((friend) =>
                friend.id === selectedFriend
                    ? { ...friend, balance: friend.balance + value }
                    : friend
            )
        );
        setSelectedFriend(null);
    }

    return (
        <>
            <h1>💰 Bill Split</h1>
            <div className="container flex">
                <div className="left__container flex flex-column">
                    <FriendList
                        friends={friends}
                        onSelectFriend={handleSelectFriend}
                        selectedFriend={selectedFriend}
                    />
                    {addFriendOpen && (
                        <AddFriend onAddFriend={handleAddFriend} />
                    )}
                    <Button onClick={handleAddFriendOpen}>
                        {addFriendOpen ? "Close" : "Add Friend"}
                    </Button>
                </div>
                {selectedFriend && (
                    <div className="right__container flex flex-column">
                        <BillSplit
                            friend={friends.find(
                                (f) => f.id === selectedFriend
                            )}
                            setFriends={setFriends}
                            onBillSplit={handleBillSplit}
                        />
                    </div>
                )}
            </div>
        </>
    );
}
