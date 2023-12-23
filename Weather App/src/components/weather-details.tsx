import moment from "moment";

import {
    Card,
    CardTitle,
    CardContent,
    CardHeader,
    CardDescription,
} from "@/components/ui/card";

import {
    Cloud,
    CloudFog,
    CloudLightning,
    CloudMoon,
    CloudMoonRain,
    CloudRain,
    CloudSnow,
    CloudSun,
    CloudSunRain,
    Cloudy,
    Droplets,
    GaugeCircle,
    Moon,
    Sun,
    Wind,
} from "lucide-react";

const WeatherIconsMap = {
    "01d": <Sun className="w-7 h-7 text-yellow-400" />,
    "01n": <Moon className="w-7 h-7 text-[#91a3b0]" />,
    "02d": <CloudSun className="w-7 h-7 text-yellow-400" />,
    "02n": <CloudMoon className="w-7 h-7 text-[#91a3b0]" />,
    "03d": <Cloud className="w-7 h-7 text-sky-500" />,
    "03n": <Cloud className="w-7 h-7 text-sky-500" />,
    "04d": <Cloudy className="w-7 h-7 text-gray-500" />,
    "04n": <Cloudy className="w-7 h-7 text-gray-500" />,
    "09d": <CloudRain className="w-7 h-7" />,
    "09n": <CloudRain className="w-7 h-7" />,
    "10d": <CloudSunRain className="w-7 h-7" />,
    "10n": <CloudMoonRain className="w-7 h-7" />,
    "11d": <CloudLightning className="w-7 h-7" />,
    "11n": <CloudLightning className="w-7 h-7" />,
    "13d": <CloudSnow className="w-7 h-7" />,
    "13n": <CloudSnow className="w-7 h-7" />,
    "50d": <CloudFog className="w-7 h-7" />,
    "50n": <CloudFog className="w-7 h-7" />,
};

interface WeatherDetailsProps {
    data: {
        weather: { icon: string; description: string }[];
        name: string;
        sys: { country: string };
        main: { humidity: number; temp: number; pressure: number };
        wind: { speed: number };
    };
}

export const WeatherDetails = ({ data }: WeatherDetailsProps) => {
    const icon = data.weather[0].icon;
    const name = data.name;
    const country = data.sys.country;
    const description = data.weather[0].description;
    const current_date = moment().format("MMMM Do YYYY");
    const temp = Math.round(data.main.temp);
    const humidity = data.main.humidity;
    const wind_speed = data.wind.speed;
    const pressure = data.main.pressure;

    return (
        <div className="text-white flex flex-col h-full w-full">
            <CardHeader className="flex flex-col w-full pt-6">
                {" "}
                <div className="flex">
                    <div className="flex flex-col flex-1 gap-1">
                        <CardTitle>
                            {name}, {country}
                        </CardTitle>
                        <CardDescription>{current_date}</CardDescription>
                    </div>
                    <div className="flex items-center">
                        {WeatherIconsMap[icon as keyof typeof WeatherIconsMap]}
                    </div>
                </div>
            </CardHeader>

            <CardContent className="flex flex-1 justify-center p-0 w-full">
                <div className="flex flex-col items-center w-full">
                    <div className="flex flex-1 flex-col items-center justify-center gap-2">
                        <div className="flex items-center">
                            <p className="text-6xl">{temp}°</p>
                        </div>
                        <p className="capitalize">{description}</p>
                    </div>
                    <div className="flex gap-4 m-4 w-full">
                        <div className="flex flex-1 flex-col justify-center items-center gap-1">
                            <Wind className="w-6 h-6 text-indigo-500" />
                            <p className="text-sm text-zinc-500">
                                {wind_speed} m/s
                            </p>
                            <p className="text-sm">Wind</p>
                        </div>
                        <div className="flex flex-1 flex-col justify-center items-center gap-1">
                            <Droplets className="w-6 h-6 text-cyan-400" />
                            <p className="text-sm text-zinc-500">
                                {humidity} %
                            </p>
                            <p className="text-sm">Humidity</p>
                        </div>
                        <div className="flex flex-1 flex-col justify-center items-center gap-1">
                            <GaugeCircle className="w-6 h-6 text-slate-500" />
                            <p className="text-sm text-zinc-500">
                                {pressure} hPa
                            </p>
                            <p className="text-sm">Pressure</p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </div>
    );
};
