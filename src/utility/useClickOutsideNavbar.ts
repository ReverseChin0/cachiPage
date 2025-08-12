import { type RefObject, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCurrentLanguage } from "../hooks/UseCurrentLanguage";

interface UseClickOutsideNavbarProps {
  frameBgRef: RefObject<HTMLDivElement | null>;
  hideNavbar: () => void;
}

export function useClickOutsideNavbar({
  frameBgRef,
  hideNavbar,
}: UseClickOutsideNavbarProps) {
  const language = useCurrentLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    function handleDocumentClick(e: MouseEvent) {
      const navbar = document.querySelector(".navbar");
      if (navbar && navbar.contains(e.target as Node)) {
        return;
      }

      if (frameBgRef.current && !frameBgRef.current.contains(e.target as Node)) {
        document
          .getElementById("background-image-div")
          ?.classList.remove("blur");
        hideNavbar();
        navigate(`/${language}`);
      }
    }

    document.addEventListener("mousedown", handleDocumentClick);
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [navigate, language, frameBgRef, hideNavbar]);
}