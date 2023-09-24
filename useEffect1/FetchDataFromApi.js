import React, { useState, useEffect } from 'react';

function FetchDataFromApi() {
    const [inputValue, setInputValue] = useState('');
    const [data, setData] = useState(null);

    useEffect(() => {
        // Kiểm tra xem inputValue có giá trị không rỗng
        if (inputValue) {
            // Địa chỉ API bạn muốn gửi yêu cầu đến
            const apiUrl = `https://api.example.com/data?query=${inputValue}`;

            // Gửi yêu cầu đến API
            fetch(apiUrl)
                .then((response) => response.json())
                .then((resultData) => {
                    setData(resultData);
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                });
        }
    }, [inputValue]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <h1>Fetch Data From API</h1>
            <input
                type="text"
                placeholder="Enter a query"
                value={inputValue}
                onChange={handleInputChange}
            />
            <div>
                <h2>API Response:</h2>
                {data ? (
                    <ul>
                        {data.map((item) => (
                            <li key={item.id}>{item.name}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No data available</p>
                )}
            </div>
        </div>
    );
}

export default FetchDataFromApi;
