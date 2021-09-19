import { FunctionComponent } from "react";

interface PixelProps {
    
}
 
const Pixel: FunctionComponent<PixelProps> = () => {
    return ( <svg className="pixelated" viewBox="0 0 1 1" height="120" width="120"><rect fill="#FF0000" width="1" height="1" /></svg>);
}
 
export default Pixel;