import Image from "next/image";
import { BlurbName, CallToAction, NameIcon, ProjectsList,  SpotifyEmbed } from "./components";

export default function Home() {
    return (
        <>
            <NameIcon />
            <BlurbName />
            <ProjectsList />
            <SpotifyEmbed />
            <CallToAction />
        </>
    );
}
