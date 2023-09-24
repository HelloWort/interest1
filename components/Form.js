import React, { useState } from 'react'

function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    })
    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        document.write('Entered data: ', FormDatas)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name: </label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor='email'>Email: </label>
                    <input
                        type='text'
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor='phone'>phone: </label>
                    <input
                        type='text'
                        id='phone'
                        name='phone'
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
export default Form