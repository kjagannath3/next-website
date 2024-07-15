import Image from "next/image";
import { BlurbName, CallToAction, NameIcon, ProjectsList, ResumeEmbed } from "./components";
import { Sidebar } from "./sidebar";
export default function Home() {
    return (
        <div className="bg-white content-center">
            <Sidebar />
            <NameIcon />
            <BlurbName />
            <ProjectsList />
            <ResumeEmbed />
            <CallToAction />
        </div>
    );
}
