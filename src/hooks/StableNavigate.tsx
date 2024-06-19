import { createContext, useContext, useRef, MutableRefObject } from "react";
import { useNavigate, NavigateFunction } from "react-router-dom";

const StableNavigateContext =
  createContext<MutableRefObject<NavigateFunction> | null>(null);

const StableNavigateContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const navigate = useNavigate();
  const navigateRef = useRef(navigate);

  return (
    <StableNavigateContext.Provider value={navigateRef}>
      {children}
    </StableNavigateContext.Provider>
  );
};

const useStableNavigate = (): NavigateFunction => {
  const navigateRef = useContext(StableNavigateContext);

  if (navigateRef && navigateRef.current !== null) {
    return navigateRef.current;
  }

  throw new Error("StableNavigate context is not initialized");
};

export { StableNavigateContextProvider, useStableNavigate };
