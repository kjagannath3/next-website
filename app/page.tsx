import Image from "next/image";
import { BlurbName, CallToAction, NameIcon, ProjectsList, ResumeEmbed } from "./components";

export default function Home() {
    return (
        <div className="bg-sky-100">
            <NameIcon />
            <BlurbName />
            <ProjectsList />
            <ResumeEmbed />
            <CallToAction />
        </div>
    );
}
