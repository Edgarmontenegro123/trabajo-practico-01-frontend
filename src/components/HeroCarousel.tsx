import { useState, useEffect, useCallback } from 'react'
import Mate_01 from '../assets/products/Mate_01.webp'
import Mate_02 from '../assets/products/Mate_02.webp'
import Mate_03 from '../assets/products/Mate_03.webp'
import './HeroCarousel.css'

const images = [
    {
        id: 1,
        title: 'Tu mate preferido',
        subtitle: 'SIEMPRE CERCA',
        desc: 'Variedad, calidad y el ritual de siempre.',
        url: Mate_01
    },
    {
        id: 2,
        title: 'El mejor sabor',
        subtitle: 'TRADICIÓN PURA',
        desc: 'Encontrá tu combinación ideal.',
        url: Mate_02
    },
    {
        id: 3,
        title: 'Novedades',
        subtitle: 'SUMATE AL CLUB',
        desc: 'Enterate de todo lo nuevo.',
        url: Mate_03
    }
]

const HeroCarousel = () => {
    const [current, setCurrent] = useState(0)

    const nextSlide = useCallback(() => {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }, [])

    const prevSlide = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000)
        return () => clearInterval(timer)
    }, [nextSlide])

    return (
        <section className='carousel'>
            <button className='arrow prev' onClick={prevSlide}>&#10094;</button>
            <button className='arrow next' onClick={nextSlide}>&#10095;</button>

            {images.map((slide, index) => (
                <div className={index === current ? 'slide active' : 'slide'} key={slide.id}
                     style={{backgroundImage: `url(${slide.url})`}}
                >
                    {index === current && (
                        <div className='container'>
                            <div className='content'>
                                <p>{slide.title}</p>
                                <h1>{slide.subtitle}</h1>
                                <span>{slide.desc}</span>
                                <button className='btn-hero'>ENCONTRANOS</button>
                            </div>
                        </div>
                    )}
                </div>
            ))}

            <div className='dots'>
                {images.map((_, i) => (
                    <span
                        key={i}
                        className={i === current ? 'dot active' : 'dot'}
                        onClick={() => setCurrent(i)}
                    ></span>
                ))}
            </div>
        </section>
    )
}

export default HeroCarousel