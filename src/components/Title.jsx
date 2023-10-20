import { useEffect } from "react";

function Title({ title, children }) {
  useEffect(() => {
    document.title = `Library Collection | ${title}`;
  }, []);
  return children;
}

export default Title;
