import Image from "next/image";
import { Document, Page, View, Text } from "@react-pdf/renderer";


const CLIENT_ID = "SPOTIFY_CLIENT_ID"
const CLIENT_SECRET = "SPOTIFY_CLIENT_SECRET"



export function NameIcon() {
    return (
        <div>
            <h1>Hi, I'm</h1>
            <h1>Keshav</h1>
        </div>
    );
}

export function BlurbName() {
    return (
        <div>
            <h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
            </h1>
            <Image
                src="/headshot.jpg"
                width={500}
                height={500}
                alt="Picture of myself"
            />
        </div>
    );
}

export function ProjectsList() {
    const numbers = [1, 2, 3, 4, 5];
    const listOfNums = numbers.map((number) => {
        return <li>{number}</li>;
    });
    return (
        <div>
            <ul>{listOfNums}</ul>
        </div>
    );
}

export function SpotifyEmbed() { 
    return (
        <div>Insert Resume here</div>
    );
}

export function CallToAction() {
    return (
        <div>
            <h1> Insert call to action here </h1>
        </div>
    );
}
