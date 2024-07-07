import Image from "next/image";

export function NameIcon() {
  return (
    <div className="pt-10 flex w-full place-content-center gap-2">
      <h1 className="text-5xl text-inherit font-bold">Hi, I'm </h1>
      <h1 className="font-bold text-5xl text-green-300">Keshav</h1>
    </div>
  );
}

export function BlurbName() {
  return (
    <div className="flex w-full justify-center items-center h-screen  ">
      <div className="flex px-20 py-20 w-3/4 fill-red-100 border-4 border-slate-300 rounded-3xl">
        <h1 className="">
          Glad you could make it to my website! I'm a fourth year CS major at
          Georgia Tech with concentrations in Intelligence and IOT. Check out my
          projects and my resume!
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
        <div className="grid w-full justify-center items-center h-screen">
    <div className="grid w-full px-60 border-solid border-4 border-slate-300 rounded-3xl">
      {" "}
    <h1 className="text-5xl text-inherit font-bold"> Take a look at some of my projects!</h1>
      <div>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>2</li>
                    <li>2</li>
                    <li>2</li>
                </ul>
      </div>
    </div></div>
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
