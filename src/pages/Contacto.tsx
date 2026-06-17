import { useState } from 'react'
import './Contacto.css'

const Contacto = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Datos enviados:', formData)
        alert('¡Gracias por tu mensaje, ' + formData.nombre + '! Nos pondremos en contacto pronto.')
    }

    return (
        <div className='contacto-container'>
            <h1>Contacto</h1>
            <form onSubmit={handleSubmit} className='contacto-form'>
                <input
                    type='text'
                    name='nombre'
                    placeholder='Tu nombre'
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                />
                <input
                    type='email'
                    name='email'
                    placeholder='Tu email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name='mensaje'
                    placeholder='Tu mensaje'
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                />
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}

export default Contacto