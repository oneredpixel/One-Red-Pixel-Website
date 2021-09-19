import { FunctionComponent } from "react";
import Pixel from "./components/Pixel";
import PunkCarousel from "./components/PunkCarousel";

interface TradeProps {
    
}
 
const Trade: FunctionComponent<TradeProps> = () => {
    return ( <div id="trade">
        <div className="pixel">
            <Pixel />
        </div>
        <div className="arrow">
            <span>&rarr;</span><span>&larr;</span></div>
        <div className="punk">
            <PunkCarousel />
        </div>
    </div> );
}
 
export default Trade;