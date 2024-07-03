import Image from "next/image";
import { BlurbName, CallToAction, NameIcon, ProjectsList, ResumeEmbed } from "./components";

export default function Home() {
    return (
        <>
            <NameIcon />
            <BlurbName />
            <ProjectsList />
            <ResumeEmbed />
            <CallToAction />
        </>
    );
}
