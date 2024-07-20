import { Box, Container } from "@chakra-ui/react"; // Import Chakra UI components
import { Navigate, Route, Routes, useLocation } from "react-router-dom"; // Import routing components
import { useRecoilValue } from "recoil"; // Import Recoil for state management

import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import userAtom from "./atoms/userAtom";
import UpdateProfilePage from "./pages/UpdateProfilePage";
import CreatePost from "./components/CreatePost";
import ChatPage from "./pages/ChatPage";
import { SettingsPage } from "./pages/SettingsPage";

function App() {
  const user = useRecoilValue(userAtom); // Get the current user state
  const { pathname } = useLocation(); // Get the current path
  
  return (
    <Box position="relative" width="100%"> {/* Main container */}
      <Container maxW={pathname === "/" ? { base: "620px", md: "900px" } : "620px"}> {/* Adjust container width based on path */}
        <Header /> {/* Include the header component */}
        <Routes>
          {/* Define routes for the application */}
          <Route path="/" element={user ? <HomePage /> : <Navigate to="/auth" />} /> {/* Home route */}
          <Route path="/auth" element={!user ? <AuthPage /> : <Navigate to="/" />} /> {/* Authentication route */}
          <Route path="/update" element={user ? <UpdateProfilePage /> : <Navigate to="/auth" />} /> {/* Profile update route */}
          
          <Route
            path="/:username"
            element={user ? ( 
              <> {/* Display user page and create post component if user is logged in */}
                <UserPage />
                <CreatePost />
              </>
            ) : ( 
              <UserPage /> /* Display only user page if user is not logged in */
            )}
          />
          <Route path="/:username/post/:pid" element={<PostPage />} /> {/* Post details route */}
          <Route path="/chat" element={user ? <ChatPage /> : <Navigate to="/auth" />} /> {/* Chat route */}
          <Route path="/settings" element={user ? <SettingsPage /> : <Navigate to="/auth" />} /> {/* Settings route */}
        </Routes>
      </Container>
    </Box>
  );
}

export default App; // Export the App component
