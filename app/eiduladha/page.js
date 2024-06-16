import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page(obj) {
    const { name, toname } = obj.searchParams;

    return (
        <div className=" w-screen h-screen overflow-hidden ">
            <div className="max-w-7xl mx-auto h-full relative">
                <div className=" w-full h-full flex flex-col justify-center items-center ">
                    <div
                        className={` flex justify-center items-center h-screen px-4`}
                    >
                        <div className="text-center p-8 bg-stone-800 bg-opacity-70 rounded-lg max-w-2xl mx-auto shadow-2xl z-20 ">
                            <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-wider mb-4">
                                Eid Mubarak,{" "}
                                <span className="text-yellow-300 capitalize">
                                    {name}
                                </span>
                                , Wishing you and your family a Happy Eid
                                ul-adha from{" "}
                                <span className="text-yellow-300  capitalize">
                                    {toname}
                                </span>
                                .
                            </h1>

                            <h2 className="text-3xl font-light text-gray-200">
                                May Allah grant all your wishes. Ameen.
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="h-96 w-36 absolute -bottom-2 -left-4   ">
                    <Image
                        src="/eid/candles11.png"
                        alt="newtest"
                        fill={true}
                        className=" object-contain object-bottom"
                    />
                </div>
                <div className="max-h-[600px] h-full max-w-[200px] w-1/2 absolute -top-2 right-0 origin-top   ">
                    <Image
                        src="/eid/candles12.png"
                        alt="newtest"
                        fill={true}
                        className="object-top pabdulam object-contain "
                    />
                </div>
                <div className="h-screen w-screen absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  -z-10">
                    <Image
                        src="/eid/heroimage1.jpg"
                        alt="newtest"
                        fill={true}
                        className=" object-center object-cover  "
                    />
                </div>
                <div className="absolute bottom-2 right-2 z-10">
                    <div className="h-12 w-40 rounded-full border box-content shadow-lg px-0.5 hover:scale-105 duration-300 transition  ease-in-out">
                        <Link
                            href="/eiduladha/customize"
                            passHref
                            className="w-full h-full flex items-center gap-1"
                        >
                            <span className=" shadow-sm rounded-full bg-black/30">
                                <Image
                                    src="/eid/customize1.png"
                                    alt="Customize"
                                    width={45}
                                    height={45}
                                    objectFit="cover"
                                    className="rounded-full"
                                />
                            </span>
                            <span className="font-bold text-xl text-yellow-300  ">
                                Customize
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
