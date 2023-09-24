import React, { useState } from 'react';

function Interest() {
    const [principal, setPrincipal] = useState('');
    const [daysDiff, setDaysDiff] = useState('');
    const [result, setResult] = useState('');

    const calculateInterest = () => {
        const p = parseFloat(principal);
        const diff = parseInt(daysDiff);
        let interest = 0;

        if (!isNaN(p) && !isNaN(diff)) {
            if (diff <= 30) {
                interest = (p * 0.06 * 2) + (p * 0.01);
            } else if (diff <= 33) {
                interest = (p * 0.06 * 2) + (p * 0.015);
            } else if (diff <= 37) {
                interest = (p * 0.06 * 2) + (p * 0.02);
            } else if (diff <= 44) {
                interest = (p * 0.06 * 2) + (p * 0.03);
            } else if (diff <= 48) {
                interest = (p * 0.06 * 2) + (p * 0.04);
            } else if (diff <= 53) {
                interest = (p * 0.06 * 2) + (p * 0.05);
            } else {
                const extraMonths = Math.floor((diff - 30) / 30);
                interest = (p * 0.06 * 2) + (p * 0.06 * extraMonths);
            }

            setResult(`Số tiền lãi cần đóng: ${interest.toFixed(2)} đồng`);
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
            <label htmlFor="daysDiff">Số ngày cầm cố:</label>
            <input
                type="number"
                id="daysDiff"
                placeholder="Số ngày"
                value={daysDiff}
                onChange={(e) => setDaysDiff(e.target.value)}
            />
            <br />
            <button onClick={calculateInterest}>Tính lãi</button>
            <br />
            <p id="result">{result}</p>
        </div>
    );
}

export default Interest;
