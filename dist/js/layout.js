"use strict";
(() => {
  // src/app/layout.tsx
  var geistSans = (void 0)({
    variable: "--font-geist-sans",
    subsets: ["latin"]
  });
  var geistMono = (void 0)({
    variable: "--font-geist-mono",
    subsets: ["latin"]
  });
  var metadata = {
    title: "Nikolas Padilla | Software Engineer",
    description: "Personal portfolio and resume showcasing my software development projects and skills"
  };
  function RootLayout({
    children
  }) {
    return /* @__PURE__ */ React.createElement("html", { lang: "en", className: "scroll-smooth" }, /* @__PURE__ */ React.createElement("body", { className: `${geistSans.variable} ${geistMono.variable} antialiased` }, children));
  }
})();
