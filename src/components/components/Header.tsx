import { FunctionComponent } from "react";
import Trade from "./Trade/Trade";

interface HeaderProps {
    
}
 
const Header: FunctionComponent<HeaderProps> = () => {
    return (
        <div id="header">
                    <h1>One Red Pixel</h1>
                <Trade />
<p>On October x, 2021 I minted an NFT of a single red pixel.</p><p>Now I’m on a journey to connect with artists and collectors to trade my pixel for something (anything!) better.</p><p>The end goal is to eventually trade my way up to a <a href="https://www.larvalabs.com/cryptopunks">cryptopunk</a> and share the work of up and coming digital artists who are innovating with this new art form.</p>
<p><ul className="no-bullet">
    <li><a href="#about">What makes this project special?</a></li>
    <li><a href="#rules">The rules of the game</a></li>
    <li><a href="#cause">The cause</a></li>
    <li><a href="#community">Join the community</a></li>
    <li><a href="#questions">Questions</a></li>
    <li><a href="#trades">Take me to the trades!</a></li>
    </ul></p>
        </div>
      );
}
 
export default Header;