import React from "react";
import Image from "next/image";


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
            <h1>Insert blurb here</h1>
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

export function ResumeEmbed() {
    return (
        <div>
            <h1>Insert resume here</h1>
        </div>
    );
}

export function CallToAction() {
    return (
        <div>
            <h1> Insert call to action here </h1>
        </div>
    );
}
