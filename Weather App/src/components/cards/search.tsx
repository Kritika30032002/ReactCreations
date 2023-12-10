import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

interface SearchProps {
    setCity: (city: string) => void;
}

export const SearchBox = ({ setCity }: SearchProps) => {
    const [value, setValue] = useState<string>("");

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setCity(value);
    };
    return (
        <Card className="bg-transparent flex md:w-1/2 items-center justify-center p-0 border-0 bg-zinc-900">
            <CardContent className="w-full p-2">
                <form
                    onSubmit={onSubmit}
                    className="bg-transparent flex w-full justify-center items-center p-2 gap-2">
                    <Search className="w-7 h-7 text-white ml-2" />
                    <Input
                        placeholder="Search city here"
                        className="bg-transparent focus-visible:ring-offset-0 focus-visible:ring-0 text-white border-0"
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                    />
                    <Button
                        type="submit"
                        className="bg-zinc-800 hover:bg-zinc-300/30">
                        Search
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};
