"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function ThemeToggle() {
    const { setTheme, theme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="fixed bottom-6 right-6 z-50"
        >
            <Button
                variant="outline"
                size="icon"
                className="rounded-full w-12 h-12 shadow-lg bg-background border-border"
                onClick={toggleTheme}
            >
                <AnimatePresence mode="wait" initial={false}>
                    {theme === "dark" ? (
                        <motion.div
                            key="dark"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Moon className="h-[1.2rem] w-[1.2rem]" />
                            <span className="sr-only">Switch to light mode</span>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="light"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Sun className="h-[1.2rem] w-[1.2rem]" />
                            <span className="sr-only">Switch to dark mode</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Button>
        </motion.div>
    )
}
