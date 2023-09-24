import React from 'react';

function ExampleEvent() {
    const handleChange = (event) => {
        // Truy cập thông tin từ sự kiện
        const elementType = event.target.type; // Loại phần tử (ví dụ: "text", "checkbox")
        const elementValue = event.target.value; // Giá trị của phần tử (ví dụ: giá trị nhập vào input)

        // Hiển thị thông tin sự kiện trong console
        console.log(`Loại phần tử: ${elementType}`);
        console.log(`Giá trị phần tử: ${elementValue}`);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Nhập văn bản"
                onChange={handleChange}
            />
        </div>
    );
}

export default ExampleEvent;
