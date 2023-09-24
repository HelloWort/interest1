import React, { useState } from 'react';

function Slider() {
    // Khai báo state để lưu trữ giá trị hiện tại của thanh trượt
    const [sliderValue, setSliderValue] = useState(50);

    // Hàm xử lý sự kiện khi giá trị thanh trượt thay đổi
    const handleSliderChange = (event) => {
        // Lấy giá trị mới từ sự kiện
        const newValue = parseInt(event.target.value, 10);
        // Cập nhật state với giá trị mới
        setSliderValue(newValue);
    };

    return (
        <div>
            <h1>Slider Example</h1>
            <input
                type="range"
                min={0}
                max={100}
                value={sliderValue}
                onChange={handleSliderChange}
            />
            <p>Giá trị hiện tại: {sliderValue}</p>
        </div>
    );
}

export default Slider;
