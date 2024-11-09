// eslint-disable-next-line react/prop-types
const ResumeModel = ({ section, setOpenResumeModel }) => {
  const handleOnClick = (language) => {
    if (language === "english") {
      // const a = document.createElement("a");
      // a.href = "/assets/resume/CVEN-reda.pdf";
      // a.download = "resumeForReda.pdf";
      // a.click();
      window.open("/assets/resume/CVEN-reda.pdf", "_blank");
      setOpenResumeModel(false);
    } else {
      // const a = document.createElement("a");
      // a.href = "/assets/resume/CVFR-reda.pdf";
      // a.download = "resumeForReda.pdf";
      // a.click();
      window.open("/assets/resume/CVFR-reda.pdf", "_blank");
      setOpenResumeModel(false);
    }
  };

  return (
    <div
      className={`resume-model ${
        section === "contact"
          ? "before:left-[80%] before:border-b-white bg-white max-md:left-1/2 max-md:transform max-md:-translate-x-1/2 max-md:before:left-[50%] "
          : "before:left-[70%] before:border-b-blue bg-blue"
      }`}
    >
      <div className="w-full h-full flex-center flex-col space-y-4">
        <button
          onClick={() => handleOnClick("english")}
          className={`resume-btn ${
            section === "contact"
              ? "bg-transparent text-bgBlack border-bgBlack border-2 hover:bg-bgBlack hover:text-white"
              : "bg-white text-blue hover:bg-blue hover:text-white"
          }`}
        >
          English Resume
        </button>
        <button
          onClick={() => handleOnClick("french")}
          className={`resume-btn ${
            section === "contact"
              ? "bg-transparent text-bgBlack border-bgBlack border-2 hover:bg-bgBlack hover:text-white"
              : "bg-white text-blue hover:bg-blue hover:text-white"
          }`}
        >
          French Resume
        </button>
      </div>
    </div>
  );
};

export default ResumeModel;
