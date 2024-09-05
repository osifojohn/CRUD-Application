interface ErrorProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any;
}

const Error: React.FC<ErrorProps> = ({ error }) => (
  <div className="flex items-center justify-center h-full">
    <div className="flex flex-col items-center text-center">
      <p className="text-[14px]  md:text-[17px] font-bold  text-gray-800">
        {error?.response?.data?.error || error}
      </p>
    </div>
  </div>
);

export default Error;
