import type { IconProps } from './Icons.types'

const ChevronLeft = ({ size = 42, color = 'black' }: IconProps) => {
    return (

        <svg width={size}
            height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.9675 12.9675L18.9525 21L26.9675 29.0325L24.5 31.5L14 21L24.5 10.5L26.9675 12.9675Z" fill={color} />
        </svg>



    )
}

export default ChevronLeft