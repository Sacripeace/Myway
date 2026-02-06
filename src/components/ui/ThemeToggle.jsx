import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                return savedTheme;
            }
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return 'dark'; // Default server-side or fallback
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <motion.button
            onClick={toggleTheme}
            className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/10 dark:bg-black/30 backdrop-blur-md border border-gray-200 dark:border-white/10 shadow-lg text-gray-800 dark:text-yellow-400 hover:scale-110 transition-transform"
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle Theme"
        >
            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} className="text-indigo-600" />}
        </motion.button>
    );
};

export default ThemeToggle;
