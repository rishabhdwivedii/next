const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="border-b text-center bg-red-600">
        Login now to get 20% off!
      </div>
      <div>{children}</div>
    </div>
  );
};

export default layout;
