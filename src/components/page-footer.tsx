"use client";

import { useState, useEffect } from "react";

const PageFooter = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full py-6 bg-card">
      <div className="container mx-auto px-4 md:px-6 text-center text-sm text-foreground/60">
        <p>
          Designed & Built by Bhavya Singh ❤️ | © {year}
        </p>
      </div>
    </footer>
  );
};

export default PageFooter;
