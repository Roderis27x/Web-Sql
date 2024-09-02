import React from 'react';
import { navItems } from '../nav-items';
import { Link } from 'react-router-dom';
import { useTheme } from 'next-themes';
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-full bg-background/80 dark:bg-background/60 backdrop-blur-md shadow-lg p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-foreground">Herramienta de Consulta de Base de Datos</h1>
            <div className="flex items-center space-x-6">
              <ul className="flex space-x-6">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <Button
                      variant="ghost"
                      className="text-foreground hover:text-foreground/80 flex items-center"
                      onClick={item.to === '/' ? scrollToTop : undefined}
                      asChild={item.to !== '/'}
                    >
                      {item.to === '/' ? (
                        <span className="flex items-center">
                          {item.icon}
                          <span className="ml-2">{item.title}</span>
                        </span>
                      ) : (
                        <Link to={item.to} className="flex items-center">
                          {item.icon}
                          <span className="ml-2">{item.title}</span>
                        </Link>
                      )}
                    </Button>
                  </li>
                ))}
              </ul>
              <Button variant="ghost" size="sm" onClick={toggleTheme} className="flex items-center px-3 py-2">
                {theme === 'light' ? <Moon className="h-4 w-4 mr-2" /> : <Sun className="h-4 w-4 mr-2" />}
                <span>{theme === 'light' ? 'Modo oscuro' : 'Modo claro'}</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;