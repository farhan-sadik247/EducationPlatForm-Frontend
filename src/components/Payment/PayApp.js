import axios from "axios";
import { useState } from "react";
// import useRazorpay, { RazorpayOptions } from "react-razorpay";
import useRazorpay from "react-razorpay";

function PayApp(){

    const [amount, setAmount] = useState(1000)
    const [Razorpay] = useRazorpay();

    const complete_payment = (payment_id, order_id, signature)=>{
      axios.post('http://127.0.0.1:8000/razorpay/order/complete/', {
            "payment_id": payment_id,
            "order_id": order_id,
            "signature":signature,
            "amount": amount,
          })
          .then((response)=>{
            console.log(response.data);
          })
          .catch((error)=>{
            console.log(error.response);
          })
    }

    const razorpayPayment =()=>{
        axios.post('http://127.0.0.1:8000/razorpay/order/create/', {
            "amount": amount*100,
            "currency": "USD"
          })
          .then(function (response) {
            // console.log(response.data.data);
            const order_id = response.data.data.id

            const options = {
                key: "rzp_test_vahqJG4VG4WTOj", // Enter the Key ID generated from the Dashboard
                name: "Professor's Hideout",
                description: "Professor's Hideout",
                image: "/logo001.png",
                order_id: order_id,
                handler: function (response) {
                  // alert(response.razorpay_payment_id);
                  // alert(response.razorpay_order_id);
                  // alert(response.razorpay_signature);
                  complete_payment(
                    response.razorpay_payment_id,
                    response.razorpay_order_id,
                    response.razorpay_signature,
                  )
                },
                prefill: {
                  name: "Farhan Sadik",
                  email: "md.farhan.sadik@g.bracu.ac.bd",
                  contact: "01521555555",
                },
                notes: {
                  address: "Razorpay Corporate Office",
                },
                theme: {
                  color: "#9AE6D9",
                },
              };
            
              const rzp1 = new Razorpay(options);
            
            //   rzp1.on("payment.failed", function (response) {
            //     alert(response.error.code);
            //     alert(response.error.description);
            //     alert(response.error.source);
            //     alert(response.error.step);
            //     alert(response.error.reason);
            //     alert(response.error.metadata.order_id);
            //     alert(response.error.metadata.payment_id);
            //   });
            
              rzp1.open();
          })
          .catch(function (error) {
            console.log(error);
          });  
    }

    return(
        <div className="container mt-5 text-center rounded bg-warning border p-5" style={{width:"28%"}}>
            <h1 className="fw-bolder display-2">$250</h1>
            <p>per year</p>
            <div>
                <h3 className="fw-semibold">Basic</h3>
                <div className="text-start mt-3">
                </div>
                <div className="d-grid mt-3">
                    <button type="button" className="btn btn-light fw-semibold py-3" onClick={razorpayPayment}>Enroll now</button>
                </div>
            </div>
        </div>
    )
}
export default PayApp;