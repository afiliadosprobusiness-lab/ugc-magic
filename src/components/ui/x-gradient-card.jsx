import React from "react";
import { BadgeCheck as VerifiedIcon } from "lucide-react";
import { cn } from "../../lib/utils";
import { Link } from "react-router-dom"; // Use React Router Link

export function XCard({
    link = "#",
    authorName = "Author",
    authorHandle = "handle",
    authorImage = "",
    content = ["Content"],
    isVerified = true,
    timestamp = "Today",
    reply = null,
}) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
        >
            <div
                className={cn(
                    "w-full min-w-[300px] md:min-w-[400px] max-w-xl p-1.5 rounded-2xl relative isolate overflow-hidden",
                    "bg-white/5",
                    "bg-gradient-to-br from-black/5 to-black/[0.02] dark:from-white/5 dark:to-white/[0.02]",
                    "backdrop-blur-xl backdrop-saturate-[180%]",
                    "border border-white/10",
                    "shadow-[0_8px_16px_rgb(0_0_0_/_0.25)]",
                    "will-change-transform translate-z-0 transition-transform hover:scale-[1.02] duration-300"
                )}
            >
                <div
                    className={cn(
                        "w-full p-5 rounded-xl relative",
                        "bg-gradient-to-br from-white/[0.08] to-transparent",
                        "backdrop-blur-md backdrop-saturate-150",
                        "border border-white/[0.08]",
                        "text-white",
                        "shadow-sm",
                        "will-change-transform translate-z-0",
                        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/[0.03] before:to-white/[0.01] before:opacity-0 before:transition-opacity before:pointer-events-none",
                        "hover:before:opacity-100"
                    )}
                >
                    <div className="flex gap-3">
                        <div className="flex-shrink-0">
                            <div className="h-10 w-10 rounded-full overflow-hidden bg-slate-800">
                                {authorImage ? (
                                    <img
                                        src={authorImage}
                                        alt={authorName}
                                        className="h-full w-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-sm font-bold text-white uppercase">{authorName.charAt(0)}</div>
                                )}
                            </div>
                        </div>

                        <div className="flex-1">
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-1">
                                        <span className="font-semibold text-white/90 hover:underline cursor-pointer">
                                            {authorName}
                                        </span>
                                        {isVerified && (
                                            <VerifiedIcon className="h-4 w-4 text-blue-400" />
                                        )}
                                    </div>
                                    <span className="text-white/60 text-sm">
                                        @{authorHandle}
                                    </span>
                                </div>
                                <button
                                    type="button"
                                    className="h-8 w-8 text-white/80 hover:text-white hover:bg-white/5 rounded-lg p-1 flex items-center justify-center"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1200"
                                        height="1227"
                                        fill="none"
                                        viewBox="0 0 1200 1227"
                                        className="w-3 h-3"
                                    >
                                        <title>X</title>
                                        <path
                                            fill="currentColor"
                                            d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4">
                        {content.map((item, index) => (
                            <p
                                key={index}
                                className="text-white/90 text-[15px] leading-relaxed mb-2"
                            >
                                {item}
                            </p>
                        ))}
                        <span className="text-white/50 text-sm mt-3 block">
                            {timestamp}
                        </span>
                    </div>

                    {reply && (
                        <div className="mt-4 pt-4 border-t border-white/[0.08]">
                            <div className="flex gap-3">
                                <div className="flex-shrink-0">
                                    <div className="h-10 w-10 rounded-full overflow-hidden bg-slate-800">
                                        {reply.authorImage ? (
                                            <img
                                                src={reply.authorImage}
                                                alt={reply.authorName}
                                                className="h-full w-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-sm font-bold text-white uppercase">{reply.authorName.charAt(0)}</div>
                                        )}
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-1">
                                        <span className="font-semibold text-white/90 hover:underline cursor-pointer">
                                            {reply.authorName}
                                        </span>
                                        {reply.isVerified && (
                                            <VerifiedIcon className="h-4 w-4 text-blue-400" />
                                        )}
                                        <span className="text-white/60 text-sm">
                                            @{reply.authorHandle}
                                        </span>
                                        <span className="text-white/60 text-sm mx-1">·</span>
                                        <span className="text-white/60 text-sm">
                                            {reply.timestamp}
                                        </span>
                                    </div>
                                    <p className="text-white/90 text-[15px] mt-1">
                                        {reply.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </a>
    );
}
