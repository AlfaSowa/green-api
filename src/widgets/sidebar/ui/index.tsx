export const Sidebar = () => {
  const chats = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];
  return (
    <div className="w-(--left-column-width) bg-blue-950 flex flex-col rounded">
      <div className="px-2 min-h-14 flex items-center bg-amber-100">
        <div>1</div>
        <div>1</div>
        <div>1s</div>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="px-2 min-h-14 flex items-center bg-amber-300">
          табы чатов
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-none bg-amber-700  ">
          {chats.map((i) => (
            <div
              className="flex items-center px-2 bg-amber-500 min-h-14"
              key={i}
            >
              <div>12312</div>
              <div>12312</div>
              <div>12312</div>
            </div>
          ))}
        </div>

        <div className="px-2 min-h-14 flex items-center bg-amber-300">
          табы чатов
        </div>
      </div>
    </div>
  );
};
