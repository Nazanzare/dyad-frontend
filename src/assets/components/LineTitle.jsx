function LineTitle({ title }) {
  return (
    <div className="flex items-center h-10 w-full">
      <div className="flex w-full items-center">
        {/* حالت بدون عنوان */}
        {!title && (
          <div
            className="w-full h-px
                       bg-linear-to-r
                       from-transparent via-purple-400 to-transparent
                       shadow-[0_0_14px_rgba(168,85,247,0.8)]"
          />
        )}

        {/* حالت با عنوان */}
        {title && (
          <>
            <div
              className="grow h-px
                         bg-linear-to-r
                         from-transparent via-purple-400 to-cyan-400
                         shadow-[0_0_12px_rgba(168,85,247,0.7)]"
            />

            <span
              className="mx-2 w-2.5 h-2.5 rounded-full
                         bg-cyan-400
                         shadow-[0_0_12px_rgba(34,211,238,0.9)]"
            />

            <h2
              className="px-3 text-sm sm:text-lg font-iran font-medium
                         text-cyan-200 whitespace-nowrap
                         drop-shadow-[0_0_6px_rgba(34,211,238,0.6)]"
            >
              {title}
            </h2>

            <span
              className="mx-2 w-2.5 h-2.5 rounded-full
                         bg-purple-400
                         shadow-[0_0_12px_rgba(168,85,247,0.9)]"
            />

            <div
              className="grow h-px
                         bg-linear-to-l
                         from-transparent via-purple-400 to-cyan-400
                         shadow-[0_0_12px_rgba(34,211,238,0.7)]"
            />
          </>
        )}
      </div>
    </div>
  );
}

export default LineTitle;
