import Countdown from "react-countdown";

const CountDown = () => {
  const renderer = ({ days, hours, minutes, seconds }) => {
    const format = (num) => String(num).padStart(2, "0");

    return (
      <div className="mt-29.5 flex">
        <div className="flex gap-6 text-center">
          {/* Days */}
          <div>
            <h1 className="text-4xl font-normal">{format(days)}</h1>
            <p className="mt-1 text-xs font-bold tracking-widest text-gray-500">
              DAYS
            </p>
          </div>

          <span className="text-4xl font-semibold">:</span>

          {/* Hours */}
          <div>
            <h1 className="text-4xl font-normal">{format(hours)}</h1>
            <p className="mt-1 text-xs font-bold tracking-widest text-gray-500">
              HOURS
            </p>
          </div>

          <span className="text-4xl font-semibold">:</span>

          {/* Minutes */}
          <div>
            <h1 className="text-4xl font-normal">{format(minutes)}</h1>
            <p className="mt-1 text-xs font-bold tracking-widest text-gray-500">
              MINS
            </p>
          </div>

          <span className="text-4xl font-semibold">:</span>

          {/* Seconds */}
          <div>
            <h1 className="text-4xl font-normal">{format(seconds)}</h1>
            <p className="mt-1 text-xs font-bold tracking-widest text-gray-500">
              SEC
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Countdown date={new Date("2026-05-01T00:00:00")} renderer={renderer} />
  );
};

export default CountDown;

// return (
//       <div className="mt-29.5 flex">
//         <div className="flex gap-6 text-center">
//           {/* Days */}
//           <div>
//             <h1 className="text-4xl font-normal">{format(days)}</h1>
//             <p className="mt-1 text-xs font-bold tracking-widest text-gray-500">
//               DAYS
//             </p>
//           </div>

//           <span className="text-4xl font-semibold">:</span>

//           {/* Hours */}
//           <div>
//             <h1 className="text-4xl font-normal">{format(hours)}</h1>
//             <p className="mt-1 text-xs font-bold tracking-widest text-gray-500">
//               HOURS
//             </p>
//           </div>

//           <span className="text-4xl font-semibold">:</span>

//           {/* Minutes */}
//           <div>
//             <h1 className="text-4xl font-normal">{format(minutes)}</h1>
//             <p className="mt-1 text-xs font-bold tracking-widest text-gray-500">
//               MINS
//             </p>
//           </div>

//           <span className="text-4xl font-semibold">:</span>

//           {/* Seconds */}
//           <div>
//             <h1 className="text-4xl font-normal">{format(seconds)}</h1>
//             <p className="mt-1 text-xs font-bold tracking-widest text-gray-500">
//               SEC
//             </p>
//           </div>
//         </div>
//       </div>
//     );
