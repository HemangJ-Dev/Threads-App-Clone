import { atom } from "recoil";

// Define an atom for managing the authentication screen state
const authScreenAtom = atom({
	key: "authScreenAtom",		// Unique identifier for this atom
	default: "login",			// Default value for the atom, indicating the initial screen
});

export default authScreenAtom;	// Export the atom for use in other parts of the application