"use client";
import Image from "next/image";
import { useState } from "react";

export default function CreateEidLink() {
    const [name, setName] = useState("");
    const [toName, setToName] = useState("");
    const [generatedLink, setGeneratedLink] = useState("");

    const handleLinkCreation = () => {
        const link = `http://localhost:3000/eiduladha?name=${encodeURIComponent(
            name,
        )}&toname=${encodeURIComponent(toName)}`;
        setGeneratedLink(link);
    };

    const handleCopyLink = () => {
        navigator.clipboard.writeText(generatedLink);
    };
    return (
        <div className="flex flex-col items-center justify-center min-h-screen  p-4">
            <div className="w-full max-w-lg p-8 rounded-lg shadow-lg bg-stone-800/50">
                <h2 className="text-3xl font-bold text-center text-gray-300 mb-8">
                    Create Your Eid Greeting Link
                </h2>
                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-200"
                    >
                        Your Name
                    </label>
                  
                    <input
                        id="toName"
                        type="text"
                        value={toName}
                        onChange={(e) => setToName(e.target.value)}
                        placeholder="Enter recipient's name"
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 shadow-lg"
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="toName"
                        className="block text-sm font-medium text-gray-200"
                    >
                        Name of the person you want to send to
                    </label>
                              <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 shadow-lg"
                    />
                </div>
                <button
                    onClick={handleLinkCreation}
                    className="w-full px-4 py-2 text-white bg-blue-700 hover:bg-blue-800 focus:bg-blue-800 rounded-md focus:outline-none focus:ring focus:ring-blue-300 shadow-lg hover:shadow-xl"
                >
                    Generate Link
                </button>
                {generatedLink && (
                    <div className="mt-4 p-4 bg-blue-100 border border-blue-200 rounded-md shadow-inner">
                        <p className="text-sm font-medium text-blue-600">
                            Your custom link:
                        </p>
                        <a
                            href={generatedLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="break-all text-blue-500 hover:text-blue-600"
                        >
                            {generatedLink}
                        </a>
                        <div className="flex justify-between mt-4">
                            <button
                                onClick={() =>
                                    window.open(generatedLink, "_blank")
                                }
                                className="px-4 py-2 text-white bg-green-600 hover:bg-green-700 focus:bg-green-700 rounded-md focus:outline-none focus:ring focus:ring-green-300 shadow-lg hover:shadow-xl"
                            >
                                Go
                            </button>
                            <button
                                onClick={handleCopyLink}
                                className="px-4 py-2 text-white bg-gray-600 hover:bg-gray-700 focus:bg-gray-700 rounded-md focus:outline-none focus:ring focus:ring-gray-300 shadow-lg hover:shadow-xl"
                            >
                                Copy
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <div className="h-screen w-screen absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  -z-10">
                <Image
                    src="/eid/heroimage1.jpg"
                    alt="newtest"
                    fill={true}
                    objectFit="cover"
                    objectPosition="center"
                    className="object-top  "
                />
            </div>
        
        </div>
    );
}
