import React from 'react';
import { Card, CardContent } from './card-shadcn';
import { Shield, Users } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export function Features8() {
    const { t } = useLanguage();

    return (
        <div className="relative">
            <div className="relative z-10 grid grid-cols-6 gap-3">
                
                {/* 100% Guaranteed Card */}
                <Card className="relative col-span-full flex overflow-hidden lg:col-span-2 group hover:border-vyra-violet/50 transition-colors">
                    <CardContent className="relative m-auto size-fit pt-6">
                        <div className="relative flex h-24 w-56 items-center">
                            <svg className="text-white/5 absolute inset-0 size-full group-hover:text-vyra-violet/20 transition-colors" viewBox="0 0 254 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M112.891 97.7022C140.366 97.0802 171.004 94.6715 201.087 87.5116C210.43 85.2881 219.615 82.6412 228.284 78.2473C232.198 76.3179 235.905 73.9942 239.348 71.3124C241.85 69.2557 243.954 66.7571 245.555 63.9408C249.34 57.3235 248.281 50.5341 242.498 45.6109C239.033 42.7237 235.228 40.2703 231.169 38.3054C219.443 32.7209 207.141 28.4382 194.482 25.534C184.013 23.1927 173.358 21.7755 162.64 21.2989C161.376 21.3512 160.113 21.181 158.908 20.796C158.034 20.399 156.857 19.1682 156.962 18.4535C157.115 17.8927 157.381 17.3689 157.743 16.9139C158.104 16.4588 158.555 16.0821 159.067 15.8066C160.14 15.4683 161.274 15.3733 162.389 15.5286C179.805 15.3566 196.626 18.8373 212.998 24.462C220.978 27.2494 228.798 30.4747 236.423 34.1232C240.476 36.1159 244.202 38.7131 247.474 41.8258C254.342 48.2578 255.745 56.9397 251.841 65.4892C249.793 69.8582 246.736 73.6777 242.921 76.6327C236.224 82.0192 228.522 85.4602 220.502 88.2924C205.017 93.7847 188.964 96.9081 172.738 99.2109C153.442 101.949 133.993 103.478 114.506 103.79C91.1468 104.161 67.9334 102.97 45.1169 97.5831C36.0094 95.5616 27.2626 92.1655 19.1771 87.5116C13.839 84.5746 9.1557 80.5802 5.41318 75.7725C-0.54238 67.7259 -1.13794 59.1763 3.25594 50.2827C5.82447 45.3918 9.29572 41.0315 13.4863 37.4319C24.2989 27.5721 37.0438 20.9681 50.5431 15.7272C68.1451 8.8849 86.4883 5.1395 105.175 2.83669C129.045 0.0992292 153.151 0.134761 177.013 2.94256C197.672 5.23215 218.04 9.01724 237.588 16.3889C240.089 17.3418 242.498 18.5197 244.933 19.6446C246.627 20.4387 247.725 21.6695 246.997 23.615C246.455 25.1105 244.814 25.5605 242.63 24.5811C230.322 18.9961 217.233 16.1904 204.117 13.4376C188.761 10.3438 173.2 8.36665 157.558 7.52174C129.914 5.70776 102.154 8.06792 75.2124 14.5228C60.6177 17.8788 46.5758 23.2977 33.5102 30.6161C26.6595 34.3329 20.4123 39.0673 14.9818 44.658C12.9433 46.8071 11.1336 49.1622 9.58207 51.6855C4.87056 59.5336 5.61172 67.2494 11.9246 73.7608C15.2064 77.0494 18.8775 79.925 22.8564 82.3236C31.6176 87.7101 41.3848 90.5291 51.3902 92.5804C70.6068 96.5773 90.0219 97.7419 112.891 97.7022Z"
                                    fill="currentColor"
                                />
                            </svg>
                            <span className="mx-auto block w-fit text-5xl font-semibold text-white">100%</span>
                        </div>
                        <h2 className="mt-6 text-center text-3xl font-semibold text-white">{t('f8.card1.title')}</h2>
                    </CardContent>
                </Card>

                {/* Secure / Brand Guard Card */}
                <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 group hover:border-glow-cyan/50 transition-colors">
                    <CardContent className="pt-6">
                        <div className="relative mx-auto flex aspect-square size-32 rounded-full border border-white/10 before:absolute before:-inset-2 before:rounded-full before:border before:border-white/5">
                            <svg className="m-auto h-fit w-24" viewBox="0 0 212 143" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    className="text-white/20 group-hover:text-glow-cyan/30 transition-colors"
                                    d="M44.0209 55.3542C...141.417 128.135Z"
                                    fill="currentColor"
                                />
                                <g clipPath="url(#clip0_0_1)">
                                    <path
                                        d="M44.0209 55.3542C...141.417 128.135Z"
                                        fill="url(#paint0_linear_0_1)"
                                    />
                                </g>
                                <path className="text-glow-cyan" d="M3 72H209" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                                <defs>
                                    <linearGradient id="paint0_linear_0_1" x1="106.385" y1="1.34375" x2="106" y2="72" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="white" stopOpacity="0" />
                                        <stop className="text-glow-cyan" offset="1" stopColor="currentColor" />
                                    </linearGradient>
                                    <clipPath id="clip0_0_1">
                                        <rect width="129" height="72" fill="white" transform="translate(41)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className="relative z-10 mt-6 space-y-2 text-center">
                            <h2 className="text-lg font-medium text-white group-hover:text-glow-cyan transition">{t('f8.card2.title')}</h2>
                            <p className="text-white/60">{t('f8.card2.desc')}</p>
                        </div>
                    </CardContent>
                </Card>
                
                {/* Faster than light Card */}
                <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 group hover:border-vyra-violet/50 transition-colors">
                    <CardContent className="pt-6">
                        <div className="pt-6 lg:px-6">
                            <svg className="text-white/10 w-full" viewBox="0 0 386 123" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="386" height="123" rx="10" />
                                <g clipPath="url(#clip0_0_106)">
                                    <circle className="text-white/20 group-hover:text-vyra-violet/40 transition-colors" cx="29" cy="29" r="15" fill="currentColor" />
                                    <path d="M29 23V35" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M35 29L29 35L23 29" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M55.2373 32H58...367.254 34.167Z" fill="currentColor" />
                                </g>
                                <path
                                    className="text-vyra-violet"
                                    d="M3 121.077C3 121.077 15.3041 93.6691 36.0195 87.756C56.7349 81.8429 66.6632 80.9723 66.6632 80.9723C66.6632 80.9723 80.0327 80.9723 91.4656 80.9723C102.898 80.9723 100.415 64.2824 108.556 64.2824C116.696 64.2824 117.693 92.1332 125.226 92.1332C132.759 92.1332 142.07 78.5115 153.591 80.9723C165.113 83.433 186.092 92.1332 193 92.1332C199.908 92.1332 205.274 64.2824 213.017 64.2824C220.76 64.2824 237.832 93.8946 243.39 92.1332C248.948 90.3718 257.923 60.5 265.284 60.5C271.145 60.5 283.204 87.7182 285.772 87.756C293.823 87.8746 299.2 73.0802 304.411 73.0802C311.283 73.0802 321.425 65.9506 333.552 64.2824C345.68 62.6141 346.91 82.4553 362.27 80.9723C377.629 79.4892 383 106.605 383 106.605"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                />
                                <defs>
                                    <linearGradient id="paint0_linear_0_106" x1="3" y1="60" x2="3" y2="123" gradientUnits="userSpaceOnUse">
                                        <stop className="text-vyra-violet/50" stopColor="currentColor" />
                                        <stop className="text-transparent" offset="1" stopColor="currentColor" stopOpacity="0.103775" />
                                    </linearGradient>
                                    <clipPath id="clip0_0_106">
                                        <rect width="358" height="30" fill="white" transform="translate(14 14)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className="relative z-10 mt-14 space-y-2 text-center">
                            <h2 className="text-lg font-medium text-white group-hover:text-vyra-violet transition">{t('f8.card3.title')}</h2>
                            <p className="text-white/60">{t('f8.card3.desc')}</p>
                        </div>
                    </CardContent>
                </Card>

                {/* Shield Card */}
                <Card className="relative col-span-full overflow-hidden lg:col-span-3 group hover:border-glow-cyan/50 transition-colors">
                    <CardContent className="grid pt-6 sm:grid-cols-2">
                        <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                            <div className="relative flex aspect-square size-12 rounded-full border border-white/10 before:absolute before:-inset-2 before:rounded-full before:border before:border-white/5">
                                <Shield className="m-auto size-5 text-glow-cyan" strokeWidth={1} />
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-lg font-medium text-white group-hover:text-glow-cyan transition">{t('f8.card4.title')}</h2>
                                <p className="text-white/60">{t('f8.card4.desc')}</p>
                            </div>
                        </div>
                        <div className="rounded-tl-2xl relative -mb-6 -mr-6 mt-6 h-fit border-l border-t border-white/10 p-6 py-6 sm:ml-6 bg-white/5">
                            <div className="absolute left-3 top-2 flex gap-1">
                                <span className="block size-2 rounded-full border border-white/20 bg-white/10"></span>
                                <span className="block size-2 rounded-full border border-white/20 bg-white/10"></span>
                                <span className="block size-2 rounded-full border border-vyra-violet bg-vyra-violet/20 animate-pulse"></span>
                            </div>
                            <svg className="w-full sm:w-[150%] text-white/5" viewBox="0 0 366 231" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    className="text-white/20 group-hover:text-glow-cyan/50 transition-colors"
                                    d="M1 179.796L4....365 89.7556"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                />
                                <defs>
                                    <linearGradient id="paint0_linear_0_705" x1="0.85108" y1="0.947876" x2="0.85108" y2="230.114" gradientUnits="userSpaceOnUse">
                                        <stop className="text-glow-cyan/35" stopColor="currentColor" />
                                        <stop className="text-transparent" offset="1" stopColor="currentColor" stopOpacity="0.01" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </CardContent>
                </Card>

                {/* Team / Users Card */}
                <Card className="relative col-span-full overflow-hidden lg:col-span-3 group hover:border-vyra-violet/50 transition-colors">
                    <CardContent className="grid h-full pt-6 sm:grid-cols-2">
                        <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                            <div className="relative flex aspect-square size-12 rounded-full border border-white/10 before:absolute before:-inset-2 before:rounded-full before:border before:border-white/5">
                                <Users className="m-auto size-6 text-vyra-violet" strokeWidth={1} />
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-lg font-medium text-white group-hover:text-vyra-violet transition">{t('f8.card5.title')}</h2>
                                <p className="text-white/60">{t('f8.card5.desc')}</p>
                            </div>
                        </div>
                        <div className="before:bg-white/10 relative mt-6 before:absolute before:inset-0 before:mx-auto before:w-px sm:-my-6 sm:-mr-6">
                            <div className="relative flex h-full flex-col justify-center space-y-6 py-6">
                                <div className="relative flex w-[calc(50%+0.875rem)] items-center justify-end gap-2 text-white">
                                    <span className="block h-fit bg-vyra-black rounded border border-white/10 px-2 py-1 text-xs shadow-sm shadow-vyra-violet/10">Mia</span>
                                    <div className="ring-vyra-black size-7 ring-2 rounded-full overflow-hidden border border-white/10">
                                        <img className="size-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" alt="" />
                                    </div>
                                </div>
                                <div className="relative ml-[calc(50%-1rem)] flex items-center gap-2 text-white">
                                    <div className="ring-vyra-black size-8 ring-2 rounded-full overflow-hidden border border-white/10">
                                        <img className="size-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="" />
                                    </div>
                                    <span className="block h-fit bg-vyra-black rounded border border-white/10 px-2 py-1 text-xs shadow-sm shadow-glow-cyan/10">Lena</span>
                                </div>
                                <div className="relative flex w-[calc(50%+0.875rem)] items-center justify-end gap-2 text-white">
                                    <span className="block h-fit bg-vyra-black rounded border border-white/10 px-2 py-1 text-xs shadow-sm">Ava</span>
                                    <div className="ring-vyra-black size-7 ring-2 rounded-full overflow-hidden border border-white/10">
                                        <img className="size-full object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

            </div>
        </div>
    )
}
