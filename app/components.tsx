import Image from "next/image";

export function NameIcon() {
  return (
    <div className="flex w-full place-content-center gap-2">
      <h1 className="font-bold">Hi, I'm </h1>
      <h1>Keshav</h1>
    </div>
  );
}

export function BlurbName() {
  return (
    <div className="flex w-full justify-center items-center h-screen  ">
      <div className="flex px-20 py-40 w-3/4 fill-red-100 border-4 border-slate-300 rounded-3xl"> 
        <h1 className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </h1>
        <Image
          className=""
          src="/headshot.jpg"
          width={100}
          height={100}
          alt="Picture of myself"
        />
      </div>
    </div>
  );
}

export function ProjectsList() {
  const numbers = [1, 2, 3, 4, 5];
  const listOfNums = numbers.map((number) => {
    return <li>{number}</li>;
  });
  return (
    <div className="flex w-1/2 border-solid justify-center items-center h-screen place-content-end h-screen">
      {" "}
      <div>
        <ul>{listOfNums}</ul>
      </div>
    </div>
  );
}

export function ResumeEmbed() {
  return (
    <div className="flex w-1/2 justify-center items-center h-screen place-content-end h-screen">
      <div>Insert Resume here</div>
    </div>
  );
}

export function CallToAction() {
  return (
    <div className="flex w-1/2 justify-center items-center h-screen place-content-end h-screen">
      <div>
        <h1> Insert call to action here </h1>
      </div>
    </div>
  );
}
