import { isEmpty } from "lodash";
import { forwardRef } from "react";

const Resume = forwardRef(function Resume(props, ref) {
  const { data } = props;

  if (isEmpty(data)) {
    return (
      <div className="py-2 px-3 text-sm text-slate-500">
        Nothing to load yet
      </div>
    );
  }

  if (data)
    return (
      <div
        className="col-span-2 py-2 px-5 flex flex-row justify-between"
        ref={ref}
      >
        <div className="w-3/4">
          <div>
            <h2
              style={{ marginBottom: "20px" }}
              className="text-5xl font-semibold text-blue-700"
            >
              {data.about.name}
            </h2>
            <p className="text-xs max-w-80">{data.about.tagline}</p>
          </div>
        </div>
        <div className="w-1/4">
          <div className="mt-3">
            <p className=" mb-1 text-xs text-slate-800">{data.about.phone}</p>
            <p className=" mb-1 text-xs text-slate-800">{data.about.email}</p>
            <p className=" mb-1 text-xs text-slate-800">{data.about.github}</p>
            <p className=" mb-1 text-xs text-slate-800">
              {data.about.linkedin}
            </p>
            <p className=" mb-1 text-xs text-slate-800">{data.about.twitter}</p>
          </div>
        </div>
      </div>
    );
});

export default Resume;
