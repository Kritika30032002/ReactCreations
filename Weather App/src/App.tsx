import { ThermometerSun } from "lucide-react";
import { SearchBox } from "./components/cards/search";
import { Weather } from "./components/cards/weather";
import { useState } from "react";

export default function WeatherApp() {
    const [city, setCity] = useState<string>("");

    return (
        <main className="bg-zinc-800 h-full p-6 flex flex-col gap-2 items-center">
            <div className="flex justify-center items-center gap-2 m-1">
                <ThermometerSun className="w-8 h-8 text-white" />
                <h3 className="text-white text-2xl font-bold ">Weather App</h3>
            </div>
            <SearchBox setCity={setCity} />
            <Weather city={city} />
        </main>
    );
}
