const Features = () => {
  return (
    <section id="features">
      <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
            What's different about Manage?
          </h2>
          <p className="maw-x-sm text-center text-darkGrayishBlue md:text-left">
            Manage Provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        {/* Numbered list */}
        <div className="flex flex-col space-y-8 md:w-1/2">
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 ">
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                  01
                </div>
                <h3 className="text-base font-bold md:mb-0">
                  Track company-wide progress
                </h3>
              </div>
            </div>
            <div>
              <p className="text-darkGrayishBlue md:ml-8 ">
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way done to the
                amallest of details. Never lose sight of the bigger picture
                again.
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 ">
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                  02
                </div>
                <h3 className="text-base font-bold md:mb-0">
                  Advanced built-in reports
                </h3>
              </div>
            </div>
            <div>
              <p className="text-darkGrayishBlue md:ml-8 ">
                Set internal delivery estimates and track progress toward company goals.
                Our customisable dashboard helps you build out the reports you need to keep key stakeholders Informed.
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 ">
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                  03
                </div>
                <h3 className="text-base font-bold md:mb-0">
                  Everything you need in one place
                </h3>
              </div>
            </div>
            <div>
              <p className="text-darkGrayishBlue md:ml-8 ">
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way done to the
                amallest of details. Never lose sight of the bigger picture
                again.
              </p>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Features;
