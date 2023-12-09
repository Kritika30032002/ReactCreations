import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import axios from "axios";
import { Braces, Loader2 } from "lucide-react";
import { WeatherDetails } from "../weather-details";

interface WeatherProps {
    city: string;
}

export const Weather = ({ city }: WeatherProps) => {
    const [loading, isLoading] = useState<boolean>(false);
    const [data, setData] = useState<any>({});
    const weather_app_url = import.meta.env.VITE_WEATHER_APP_URL;
    const weather_api_key = import.meta.env.VITE_WEATHER_API_KEY;

    const fetchData = async () => {
        setData("");
        try {
            isLoading(true);
            axios
                .get(
                    `${weather_app_url}/?q=${city}&appid=${weather_api_key}&units=metric`
                )
                .then((res) => {
                    if (res.data) {
                        setData(res.data);
                    }
                    isLoading(false);
                })
                .catch((err) => {
                    if (err.code === "ERR_BAD_REQUEST") {
                        setData({ code: "ERR_BAD_REQUEST" });
                    }
                    isLoading(false);
                });
        } catch (error) {
            isLoading(false);
        }
    };

    useEffect(() => {
        if (city.trim() !== "" && city.trim().length > 0) {
            setData("");
            fetchData();
        }
    }, [city]);
    return (
        <Card className="border-0 bg-zinc-900 h-full w-full md:w-1/2">
            <CardContent className="flex items-center justify-center h-full w-full">
                {loading ? (
                    <div className="flex flex-col text-white text-center h-full w-full items-center justify-center">
                        <Loader2 className="w-6 h-6 animate-spin text-white" />
                        <p>Fetching...</p>
                    </div>
                ) : data.code === "ERR_BAD_REQUEST" ||
                  data.name === undefined ? (
                    <div className="flex flex-col justify-center items-center text-center gap-1">
                        {" "}
                        <Braces className="text-red-500 w-6 h-6" />
                        <p className="text-white">No Data Found</p>
                    </div>
                ) : (
                    <WeatherDetails data={data} />
                )}
            </CardContent>
        </Card>
    );
};
