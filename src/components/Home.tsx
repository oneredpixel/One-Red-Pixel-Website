
import { FunctionComponent } from "react";
import Header from "./components/Header";

interface HomeProps {
    
}
 
const Home: FunctionComponent<HomeProps> = () => {
    return (<div id="wrapper">
        <Header />
<div id="about">
<h2>What makes this project special?</h2>

<p>If this story sounds familiar, you may have heard of Kyle MacDonald, who in 2005 used craigslist to trade a single red paperclip for a house in a series of 14 trades.</p>


<p>One Red Pixel borrows this concept and applies it to digital art. The emergence of NFTs make this project possible, since both trading partners can prove they are the legitimate owner of the art and the exchange of one piece for another happens through a smart contract that ensures no one can back out of the deal and make off with both pieces.</p>

<p>In the past this could only have been done with certificates of authenticity, art dealers, escrow services and lawyers. $$$$</p>

<p>Some folks have a hard time understanding what makes NFTs interesting so I wanted to start a project that would showcase the utility of NFTs in representing “ownership” in our increasingly digital world.</p>

</div>
<div id="rules">
<h2>The rules of the game</h2>
<ul>
<li>Any digital art NFT is eligible (visual / audio / generative, on-chain or off)</li>
<li>At least 10 trades must occur before a punk is acquired</li>
<li>If no punk is acquired by X October 2022 I will auction off whatever NFT is in my wallet at that time</li>
<li>The game ends when the first punk lands in the wallet as the result of a trade</li>
</ul>
</div>
<div id="cause">
<h2>The cause</h2>

<p>So the big question is, what happens if I get my punk?</p>
<p>If I manage to grab a punk, he/she/they will be put up for auction on <a href="https://opensea.io/">OpenSea</a>. The proceeds of the sale will go to support the <a href="https://give.unhcr.ca">UNHCR (United Nations High Commissioner for Refugees)</a>. </p>

<p>One of the things I like about NFTs are the communities that form around artists and projects. These communities connect people around shared values, often transcending language or nationality.</p>
    
<p>In an age where climate change and political conflict have created more refugees than any other time in history, our digital brothers / sisters / siblings searching for safety deserve our help. There’s nothing more punk than that.</p>
</div>
<div id="community">
    <h2>Join the community</h2>
    <p>I want this project to be successful, but I also want to showcase emerging artists from around the world. I want the trade history of the One Red Pixel wallet to showcase the incredible diversity and creativity this space has to offer. To do this, I need your help to break me out of my bubble.</p>
    <p>Join our <a href="">Discord</a> server and share your favorite artists, make connections, pitch a trade. Join us on this ride!</p>
</div>
<div id="questions">
<h2>Questions</h2>
<p className="question">How can I get in touch with you to make a trade?</p>
<p>The best place to connect with me is on our public <a href="">Discord</a> server. You can also email <a href="mailto:oneredpixelnft@gmail.com">oneredpixelnft@gmail.com</a></p>
<p className="question">How are you executing these trades?</p>
<p>Trades will take place using <a href="https://www.nfttrader.io/">NFT Trader</a>.</p>
<p className="question">What's your angle?</p>
<p>NFTs give us a way to attach ownership and ultimately value to a creator's intellectual property. As more of the work done by humans is automated, we need to learn to value that which cannot be automated, human creativity.</p><p>To me, this project is something like digital performance art. 
    
    There's a ten percent commission on any potential future sale of the one red pixel I traded away to kick off this project. If one red pixel becomes part of the story of the emergence of this space, maybe my red pixel will be worth something to someone. Who knows!</p>
</div>
    </div>);
}
 
export default Home;