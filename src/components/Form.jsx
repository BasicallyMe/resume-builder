const Form = (props) => {
  const { setData } = props;
  return (
    <div className="col-span-1 py-4 px-2">
      <div>
        <h2 className="font-semibold text-lg">About you</h2>
        <div>
          <div className="flex flex-col">
            <input
              onChange={(e) => {
                e.stopPropagation();
                setData((prevData) => ({
                  ...prevData,
                  about: {
                    ...prevData.about,
                    name: e.target.value,
                  },
                }));
              }}
              placeholder="Eg: Jane Doe"
              name="name"
              id="name"
              type="text"
              className="text-sm mb-2 py-2 px-1 focus:outline-none border border-slate-600 outline-1 "
            />
            <textarea
              id="tagline"
              name="tagline"
              placeholder="Eg: Experienced software engineer with a focus on building
engaging & accessible digital experiences"
              rows={4}
              onChange={(e) => {
                e.stopPropagation();
                setData((prevData) => ({
                  ...prevData,
                  about: {
                    ...prevData.about,
                    tagline: e.target.value,
                  },
                }));
              }}
              className="text-sm border border-slate-600 py-2 px-1 focus:outline-none mb-2"
            />
            <input
              type="text"
              placeholder="Eg: +91 000 000 0000"
              className="text-sm border border-slate-600 py-2 px-1 mb-2"
              onChange={(e) => {
                e.stopPropagation();
                setData((prevData) => ({
                  ...prevData,
                  about: {
                    ...prevData.about,
                    phone: e.target.value,
                  },
                }));
              }}
            />
            <input
              type="text"
              placeholder="Eg: janedoe@example.com"
              onChange={(e) => {
                e.stopPropagation();
                setData((prevData) => ({
                  ...prevData,
                  about: {
                    ...prevData.about,
                    email: e.target.value,
                  },
                }));
              }}
              className="text-sm border border-slate-600 py-2 px-1 mb-2"
            />
            <input
              type="text"
              placeholder="Eg: github.com/janedoe"
              onChange={(e) => {
                e.stopPropagation();
                setData((prevData) => ({
                  ...prevData,
                  about: {
                    ...prevData.about,
                    github: e.target.value,
                  },
                }));
              }}
              className="text-sm border border-slate-600 py-2 px-1 mb-2"
            />
            <input
              type="text"
              onChange={(e) => {
                e.stopPropagation();
                setData((prevData) => ({
                  ...prevData,
                  about: {
                    ...prevData.about,
                    linkedin: e.target.value,
                  },
                }));
              }}
              placeholder="Eg: linkedin.com/janedoe"
              className="text-sm border border-slate-600 py-2 px-1 mb-2"
            />
            <input
              type="text"
              onChange={(e) => {
                e.stopPropagation();
                setData((prevData) => ({
                  ...prevData,
                  about: {
                    ...prevData.about,
                    twitter: e.target.value,
                  },
                }));
              }}
              placeholder="Eg: twitter.com/janedoe"
              className="text-sm border border-slate-600 py-2 px-1 mb-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
