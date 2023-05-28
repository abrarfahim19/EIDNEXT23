import "../app/globals.css";

import Nav from "@ui/Nav";
import Provider from "@ui/Provider";
import { ReactNode } from "react";

export const metadata = {
  title: "Thoughts",
  description: "Get/Give Thoughts",
};

type LayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: LayoutProps): JSX.Element => (
  <html lang="en">
    <body>
      <Provider>
        <main className="min-h-screen font-raleway">
          <Nav />
          {children}
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
