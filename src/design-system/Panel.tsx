interface PanelProps {
  children: React.ReactNode;
}

const Panel = ({ children }: PanelProps) => (
  <div className="w-5/6 max-w-4xl max-h-5/6 p-4 rounded-xl bg-dark-grey">
    {children}
  </div>
);

export default Panel;
