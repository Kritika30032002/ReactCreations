import React, { useState, useEffect } from "react";
import axios from "axios";
import { endpointPath } from "../../config/api";
import Dropdowns from "../Dropdown/Dropdown";
import Result from "../Result/Result";
import moment from "moment";
import "./index.css";

const CurrencyConverter: React.FC = () => {
  const [from, setFrom] = useState<string>("EUR - Euro (€)");
  const [into, setInto] = useState<string>("INR - Indian Rupee (₹)");
  const [loading, setLoading] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>(1);
  const [currencyResult, setCurrencyResult] = useState<string>("");
  const [currencyRate, setCurrencyRate] = useState<string>("");
  const [amountValue, setAmountValue] = useState<string>("");
  const [update, setUpdate] = useState<string>("");

  const convertCurrency = async (
    from: string,
    into: string,
    amount: number | string
  ) => {
    const amountValue =
      typeof amount === "string" ? parseFloat(amount) : amount;

    if (amountValue === 0 || isNaN(amountValue) || amountValue < 0) {
      setCurrencyResult("");
      setCurrencyRate("");
      setLoading(false);
      return;
    }

    const fromValue = from.split(" ")[0].trim();
    const intoValue = into.split(" ")[0].trim().toUpperCase();
    const url = endpointPath(fromValue);
    try {
      setLoading(true);
      const response = await axios.get(url);
      const parsedData = response.data;
      if (intoValue in parsedData.conversion_rates) {
        const currencyRate = parsedData.conversion_rates[intoValue];
        const currencyResult = amountValue * currencyRate;
        const parsedUpdate = parsedData.time_last_update_utc;
        const update = moment(parsedUpdate).format("DD/MM/YYYY");
        setCurrencyRate(currencyRate.toFixed(2));
        setCurrencyResult(currencyResult.toFixed(2));
        setAmountValue(amountValue.toString());
        setUpdate(update);
      } else {
        console.error("Error while converting currency: Invalid data");
      }
    } catch (error) {
      console.error("Error while converting currency:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (from && into) {
      convertCurrency(from, into, amount);
    }
  }, [from, into, amount]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setAmount(parseFloat(value));
  };

  const handleFrom = (selectedOption: any) => {
    setFrom(selectedOption.value);
  };

  const handleInto = (selectedOption: any) => {
    setInto(selectedOption.value);
  };

  const handleSwitch = () => {
    setFrom(into);
    setInto(from);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="currency-app">
          <input
            className="form-control-lg currency-amount"
            placeholder="Enter Amount"
            value={amount}
            type="number"
            onChange={handleInput}
          />
          <div className="currency-from">
            <Dropdowns
              handleChange={handleFrom}
              placeholder="Select a currency (From)"
              value={from}
            ></Dropdowns>
          </div>
          <div className="currency-swap">
            <button className="btn currency-swap-btn" onClick={handleSwitch}>
              <i className="fas fa-sort"></i>
            </button>
          </div>
          <div className="currency-into">
            <Dropdowns
              handleChange={handleInto}
              placeholder="Select a currency (To)"
              value={into}
            ></Dropdowns>
          </div>
          <div>
            <Result
              loading={loading}
              result={parseFloat(currencyResult)}
              rate={parseFloat(currencyRate)}
              into={into}
              from={from}
              amount={parseFloat(amountValue)}
              update={update}
            ></Result>
          </div>
        </div>
      </div>
      <div className="space"></div>
    </>
  );
};

export default CurrencyConverter;
