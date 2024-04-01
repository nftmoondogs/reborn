// components/AboutSection.js
export default function AboutSection() {
    return (
      <div className="bg-black text-white py-12 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 items-start"> {/* Reduced gap from 8 to 4 */}
          
          {/* Left Side */}
          <div className="space-y-6 flex justify-center">
            <img src="https://i.ibb.co/6WBXX57/rainbow.png" alt="A Love Letter To Wen Bros" className="max-w-xs md:max-w-sm" />
          </div>
          
          {/* Right Side */}
          <div className="pt-4">
            <h2 className="font-courier text-2xl font-bold mb-4">rainbow meta</h2>
            <p className="font-simpfxo text-base mb-4">
            The meme-tastic dog that'll have you chasing rainbows and leaving a trail of laughter! 
            </p>
            <h3 className="font-courier-bold text-xl font-bold">Holding Nyan Dog tokens may cause uncontrollable laughter, excessive wealth, and a sudden urge to bark at the moon! </h3>
            <ul className="font-simpfxo text-base space-y-2">
  
  <li>• Fair Launch using pump.fun</li>
  
  <li>• No Team Tokens just pure fun</li>
  
</ul>

            <div className="space-y-2 mb-4">

              {/* NFT Address and additional content can be added here */}
            </div>
            <a href="https://www.pump.fun/" className="font-courier text-white bg-transparent border border-white py-2 px-4 rounded uppercase">
              Buy now on Pump.fun
            </a>
          </div>
        </div>
      </div>
    );
  }
  