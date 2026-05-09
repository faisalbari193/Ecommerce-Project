import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";

const PriceRange = () => {
  const STEP = 1;
  const MIN = 0;
  const MAX = 937;

  const [values, setValues] = useState([0, 650]);

  return (
    <div>
      {/* Range */}
      <div className="flex py-2">
        <Range
          values={values}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={(values) => setValues(values)}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              className="h-1.25 w-full rounded-full"
              style={{
                background: getTrackBackground({
                  values,
                  colors: ["#d9d9d9", "#222", "#d9d9d9"],
                  min: MIN,
                  max: MAX,
                }),
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              className="h-5 w-5 rounded-full border-[3px] border-[#222] bg-white focus:outline-none"
            />
          )}
        />
      </div>

      {/* Price */}
      <div className="flex gap-28.25 text-[14px] text-[#6b6b6b]">
        <p>
          Min Price: <span className="text-[#222]">${values[0]}</span>
        </p>

        <p>
          Max Price: <span className="text-[#222]">${values[1]}</span>
        </p>
      </div>
    </div>
  );
};

export default PriceRange;
