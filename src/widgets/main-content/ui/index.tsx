export const MainContent = () => {
  const messages = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];

  return (
    <div className="flex-1 flex justify-center bg-blue-100">
      <div className="flex flex-col  min-w-100 overflow-hidden">
        <div className="px-2 min-h-14 flex items-center bg-blue-100">
          Хедер чата
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-none bg-blue-700">
          {messages.map((i) => (
            <div
              className="flex items-center px-2 bg-blue-500 min-h-14"
              key={i}
            >
              <div>12312</div>
              <div>12312</div>
              <div>12312</div>
            </div>
          ))}
        </div>

        <div className="px-2 min-h-14 flex items-center bg-blue-300">
          футтер чата
        </div>
      </div>
    </div>
  );
};
