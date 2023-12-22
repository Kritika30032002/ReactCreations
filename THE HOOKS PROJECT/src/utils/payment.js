import { useAuth } from "hooks/auth";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "lib/firebase";
import { arrayUnion } from "firebase/firestore";
import { Button, Center, Flex, FormControl, Toast } from "@chakra-ui/react";

export default function Payment({ post }) {
  console.log("Payment", post);
  const { id } = post;
  const { user: authUser } = useAuth();
  const activatePayment = (amount = 1000) => {
    var options = {
      key: process.env.REACT_APP_RAZORPAY_API_KEY,
      key_secret: process.env.REACT_APP_RAZORPAY_SECRET_KEY,
      amount: amount * 100, // amount in paise
      currency: "INR",
      name: "Donation",
      description: "Donation for children",
      // eslint-disable-next-line no-unused-vars
      handler: function (response) {
        // handle successful payment
        const uid = authUser.id;
        const paymentId = response.razorpay_payment_id;
        const docRef = doc(db, "posts", id);
        const data = {
          amount,
          uid,
          paymentId,
        };
        setDoc(docRef, data)
          .then(() => {
            const docSet = doc(db, "posts", id);
            const donation = { amount, uid, paymentId };
            const setData = {
              donation,
            };
            updateDoc(docSet, {
              likes: arrayUnion(data),
            })
              .then(() => {
                console.log("Document has been added successfully");
              })
              .catch((error) => {
                console.log(error);
              });
          })
          .catch((error) => {
            console.log(error);
          });
      },
      prefill: {
        email: authUser?.email,
      },
      theme: {
        color: "#F37254",
      },
      modal: {
        ondismiss: function () {
          Toast("Payment Cancelled!");
          return;
        },
      },
    };
    const pay = new window.Razorpay(options);
    console.log("payment done");
    pay.on("payment.failed", function (response) {
      const msg = "Payment Failed!";
      const error = response.error.code;
      const errorMsg = msg + error;
      Toast(errorMsg);
      return;
      // alert(response.error.code);
      // alert(response.error.description);
      // alert(response.error.source);
      // alert(response.error.step);
      // alert(response.error.reason);
      // alert(response.error.metadata.order_id);
      // alert(response.error.metadata.payment_id);
    });
    pay.open();
  };

  return (
    <Flex alignItems={Center} justifyContent={Center}>
      Donate Money
      <FormControl>
        {console.log("here")}
        <Button onClick={() => activatePayment}>Donate 100</Button>
        <Button onClick={() => activatePayment}>Donate 500</Button>
        <Button onClick={() => activatePayment}>Donate 1000</Button>
        <Button onClick={() => activatePayment}>Donate 5000</Button>
      </FormControl>
    </Flex>
  );
}
