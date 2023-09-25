import React, { useState } from 'react';

function Interest() {
    const [principal, setPrincipal] = useState('');
    const [startDate, setStartDate] = useState('');
    const [result, setResult] = useState('');

    const calculateInterest = () => {
        const p = parseInt(principal);
        const startDateObj = new Date(startDate);
        startDateObj.setDate(startDateObj.getDate() - 1); // Thêm 1 ngày vào ngày bắt đầu
        const currentDate = new Date();
        const daysDiff = Math.floor((currentDate - startDateObj) / (1000 * 60 * 60 * 24));
        let interestRate = 0;
        const month = parseInt(daysDiff / 30)
        const day = parseInt(daysDiff % 30)
        const oneM = p * 0.06
        if (!isNaN(p) && !isNaN(daysDiff)) {
            if (day <= 3) {
                interestRate = 0.01;
            } else if (day <= 7) {
                interestRate = 0.015;
            } else if (day <= 9) {
                interestRate = 0.02;
            } else if (day <= 15) {
                interestRate = 0.03;
            } else if (day <= 19) {
                interestRate = 0.04;
            } else if (day <= 24) {
                interestRate = 0.05;
            } else if (day <= 30) {
                interestRate = 0.06;
            }
            // else {
            //   const extraDays = daysDiff - 30;
            //   interestRate = 0.06 + (extraDays * 0.01);
            // }

            const interest = month * oneM + interestRate * p
            setResult(`Tổng số ngày: ${daysDiff}. Số tiền lãi cần đóng: ${interest.toFixed(0)} đồng`);
        } else {
            setResult('Vui lòng nhập thông tin hợp lệ.');
        }
    };

    return (
        <div className="App">
            <h1>Ứng dụng Tính Tiền Lãi</h1>
            <label htmlFor="principal">Số tiền cầm cố:</label>
            <input
                type="number"
                id="principal"
                placeholder="Số tiền"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
            />
            <br />
            <label htmlFor="startDate">Ngày bắt đầu cầm:</label>
            <input
                type="date"
                id="startDate"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
            />
            <br />
            <button onClick={calculateInterest}>Tính lãi</button>
            <br />
            <p id="result">{result}</p>
        </div>
    );
}

export default Interest;
