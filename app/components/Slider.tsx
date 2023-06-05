
import "../styles/styles.css"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { RecordCover } from "./RecordCover"

export default function Slider() {
    const [ref] = useKeenSlider<HTMLDivElement>()
    return (
        <div ref={ref} className="keen-slider">
            <div className="keen-slider__slide number-slide1"><RecordCover /></div>
            <div className="keen-slider__slide number-slide2">2</div>
            <div className="keen-slider__slide number-slide3">3</div>
            <div className="keen-slider__slide number-slide4">4</div>
            <div className="keen-slider__slide number-slide5">5</div>
            <div className="keen-slider__slide number-slide6">6</div>
        </div>
    )
}