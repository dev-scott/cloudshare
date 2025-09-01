import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./page/Landing";
import Dashboard from "./page/Dashboard";
import Upload from "./page/Upload";
import Myfiles from "./page/Myfiles";
import Subscription from "./page/Subscription";
import Transactions from "./page/Transactions";
// import Navbar from "./components/Navbar/Navbar";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/dashboard"
          element={
            <>
              <SignedIn>
                <Dashboard />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
        <Route
          path="/upload"
          element={
            <>
              <SignedIn>
                <Upload />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
        <Route
          path="/myfile"
          element={
            <>
              <SignedIn>
                <Myfiles />{" "}
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
        <Route
          path="/transactions"
          element={
            <>
              <SignedIn>
                <Transactions />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
        <Route
          path="/subscription"
          element={
            <>
              <SignedIn>
                <Subscription />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
        <Route path="/*" element={<RedirectToSignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
