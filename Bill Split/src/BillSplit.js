import { useState } from "react";
import { Button } from "./Button";

export function BillSplit({ friend, setFriends, onBillSplit }) {
    const [billAmt, setBillAmt] = useState("");
    const [expense, setExpense] = useState("");
    const [payBy, setPayBy] = useState("You");

    const friendExpense = billAmt ? billAmt - expense : "";

    function handleForm(e) {
        e.preventDefault();
        onBillSplit(payBy === "You" ? friendExpense : -expense);
    }

    return (
        <>
            <h2>SPLIT A BILL WITH {friend.name}</h2>
            <form className="right__container-form flex" onSubmit={handleForm}>
                <div className="flex flex-column">
                    <label htmlFor="bill-value">💰 Bill Value</label>
                    <label htmlFor="expense">🧍 Your expense</label>
                    <label htmlFor="other-expense">
                        👯 {friend.name}'s expense
                    </label>
                    <label htmlFor="pay-by">🤑 Who is paying the bill ?</label>
                </div>
                <div className="flex flex-column">
                    <input
                        id="bill-value"
                        value={billAmt}
                        onChange={(e) =>
                            setBillAmt(
                                isNaN(Number(e.target.value))
                                    ? ""
                                    : Number(e.target.value)
                            )
                        }
                    />
                    <input
                        id="expense"
                        value={expense}
                        onChange={(e) =>
                            setExpense(
                                isNaN(Number(e.target.value))
                                    ? ""
                                    : Number(e.target.value) > billAmt
                                    ? expense
                                    : Number(e.target.value)
                            )
                        }
                    />
                    <input
                        id="other-expense"
                        value={friendExpense}
                        readOnly={true}
                        className="disable"
                    />
                    <select
                        value={payBy}
                        onChange={(e) => setPayBy(e.target.value)}
                    >
                        <option value="You">You</option>
                        <option value={friend.id}>{friend.name}</option>
                    </select>
                    <Button>Split bill</Button>
                </div>
            </form>
        </>
    );
}
