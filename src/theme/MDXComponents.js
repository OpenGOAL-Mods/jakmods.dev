// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents";
import ReactPlayer from "react-player";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  ReactPlayer: ReactPlayer,
};
