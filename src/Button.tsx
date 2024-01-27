import React from 'react'
import './Button.css'
interface ButtonProps {
    title:string
}
export default function({ title }: ButtonProps) {
    return (
        <button className='UI-Button'>{title}</button>
    )
}