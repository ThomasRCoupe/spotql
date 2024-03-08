export interface AppContainerProps {
  children: React.ReactNode;
}

export const AppContainer = ({ children }: AppContainerProps) => (
  <div className="w-full h-full flex justify-center items-center">
    <div className="w-2/3">{children}</div>
  </div>
);
