import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Calculator.css";

function Calculator() {
    const [firstnumber, setfirstnumber] = useState("");
    const [secondnumber, setsecondnumber] = useState("");
    const [result, setResult] = useState(""); // State variable to store the result

    useEffect(() => {
        console.log("Calculator component mounted");
    }, []);

    async function add(event) {
        event.preventDefault();
        try {
            const response = await axios.get("https://localhost:7251/api/Calculator/AddNumbers", {
                params: {
                    firstnumber: firstnumber,
                    secondnumber: secondnumber,
                }
            });
            setResult(response.data); // Update the result state
        } catch (error) {
            setResult("Error: " + (error.response?.data || error.message)); // Update the result state with error message

        }
    }

    async function substract(event) {
        event.preventDefault();
        try {
            const response = await axios.get("https://localhost:7251/api/Calculator/SubtractNumbers", {
                params: {
                    firstnumber: firstnumber,
                    secondnumber: secondnumber,
                }
            });
            setResult(response.data);
        } catch (error) {
            setResult("Error: " + (error.response?.data || error.message)); // Update the result state with error message
        }
    }

    async function multiply(event) {
        event.preventDefault();
        try {
            const response = await axios.get("https://localhost:7251/api/Calculator/MultiplyNumbers", {
                params: {
                    firstnumber: firstnumber,
                    secondnumber: secondnumber,
                }
            });
            setResult(response.data); // Update the result state
        } catch (error) {
            setResult("Error: " + (error.response?.data || error.message)); // Update the result state with error message
        }
    }

    async function divide(event) {
        event.preventDefault();
        try {
            const response = await axios.get("https://localhost:7251/api/Calculator/DivideNumbers", {
                params: {
                    firstnumber: firstnumber,
                    secondnumber: secondnumber,
                }
            });
            setResult(response.data); // Update the result state
        } catch (error) {
            setResult("Error: " + (error.response?.data || error.message)); // Update the result state with error message
        }
    }

    return (
        <div>
            <h1>Welcome To My Calculator</h1>
            <div className="container">
                <form>
                    <div className="form-group">
                        <label>First Number</label>
                        <input
                            type="number"
                            step="0.01"
                            className="form-control"
                            id="firstnumber"
                            value={firstnumber}
                            onChange={(event) => {
                                setfirstnumber(event.target.value);
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <label>Second Number</label>
                        <input
                            type="number"
                            step="0.01"
                            className="form-control"
                            id="secondnumber"
                            value={secondnumber}
                            onChange={(event) => {
                                setsecondnumber(event.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <button className="btn btn-primary mt-4" onClick={add}>
                            Add
                        </button>
                        <button className="btn btn-warning mt-4" onClick={substract}>
                            Substract
                        </button>
                        <button className="btn btn-warning mt-4" onClick={multiply}>
                            Multiply
                        </button>
                        <button className="btn btn-warning mt-4" onClick={divide}>
                            Divide
                        </button>
                    </div>
                    <div className="form-group">
                        <label>Result</label>
                        <textarea
                            type="text"
                            className="form-control"
                            id="result"
                            value={result}
                            readOnly
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Calculator;