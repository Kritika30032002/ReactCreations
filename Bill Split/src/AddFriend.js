import { useState } from "react";
import { Button } from "./Button";

export function AddFriend({ onAddFriend }) {
    const [name, setName] = useState("");

    function handleForm(e) {
        e.preventDefault();
        if (!name) return;

        const id = crypto.randomUUID();
        const new_friend = {
            name,
            id,
            balance: 0,
            image: `https://i.pravatar.cc/48?u=${id}`,
        };

        onAddFriend(new_friend);
        setName("");
    }

    return (
        <form className="add-friend flex flex-column" onSubmit={handleForm}>
            <div className="flex add-friend__item">
                <label htmlFor="name">🧍 Friend name</label>
                <input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="flex add-friend__item">
                <label htmlFor="image">🖼️ Image url</label>
                <input
                    id="image"
                    value="https://i.pravatar.cc/48"
                    disable="true"
                    readOnly
                />
            </div>
            <Button>Add</Button>
        </form>
    );
}
