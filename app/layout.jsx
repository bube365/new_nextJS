import "@styles/globals.css";
import Nav from "@components/Nav";

export const metadata = {
  title: "AiPromto",
  description: "Discover and share AI prompt",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
