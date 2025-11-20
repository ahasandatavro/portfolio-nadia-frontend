/* eslint-disable react/button-has-type */
import React from 'react'
import { PaginationProps } from '@/types/pagination'
import { motion } from "framer-motion";
import Mars from '@/assets/gifs/Mars.gif'
import fireball from '@/assets/gifs/fireball.gif'
import Ship from '@/assets/gifs/ship.gif'

export default function Pagination({ total, current, onChange }: PaginationProps) {
    const pages = Array.from({ length: total }, (_, i) => i + 1)

    return (
        <section className='md:absolute top-14 right-10'>
            <div className="flex items-center justify-center gap-2 mt-10 select-none">

                <div className="flex items-center gap-2">
                    {pages.map((p) => (
                        <motion.button
                            key={p}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => onChange(p)}
                            className={`rounded-full text-sm transition 
                                ${current === p
                                    ? ""
                                    : "bg-lime-400 text-black flex items-center justify-center font-semibold shadow w-6 h-6 border border-white/10 hover:bg-lime-200"
                                }`}
                        >
                            {current === p ? (
                                <img
                                    src={Ship}
                                    alt=""
                                    className="h-16 w-16 transition-all"
                                />
                            ) : (
                                <span className="text-[13px]">{p}</span>
                            )}
                        </motion.button>
                    ))}
                </div>
            </div>
        </section>
    );
}
