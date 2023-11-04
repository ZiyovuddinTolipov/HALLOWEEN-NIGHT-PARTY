import pumpkin from "../assets/halloween-pumpkin-file.png"

export default function Hero() {
    return (
        <div className="max-w-[1400px] mx-auto w-full flex max-h-[600px] h-full">
            <div className="text-[#C3BFD8] font-medium flex flex-col justify-evenly w-1/2">
                <h2>
                    DONT MISS THE SCARIEST OF THE YEAR
                </h2>
                <h1 className="font-bold text-8xl ">
                    <span className="text-[#F97E48]">
                    HALLOWEEN
                    </span> <br />
                    NIGHT PARTY
                </h1>
                <h2>
                    THE TADITION ORIGINAITED WITH THE ANCIANT CELTIC FESTIVAL OF SAMHIAN ,WHEN PEOPLE WOULD LIGHT BONFIRES AND WEAR COSTUMS TO WAERD OFF GHOST
                </h2>
                <div className="flex gap-2">
                    <button className="bg-[#F97E48] px-4 py-2 rounded-md text-white font-semibold max-w-[140px] w-full whitespace-nowrap ">GET A TICKET</button>
                    <button className="border px-4 py-2 rounded-md text-white font-semibold max-w-[140px] w-full">RULES</button>
                </div>
            </div>
            <div className="w-1/2 flex items-end justify-center">
                <img src={pumpkin} alt="halloween-pumpkin-file" />
            </div>
        </div>
    )
}
