import Anisha from "../assets/images/avatar-anisha.png"
import Ali from "../assets/images/avatar-ali.png"
import Richard from "../assets/images/avatar-richard.png"

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="mx-w-6xl px-5 mx-auto mt-32 text-center">
        <h2 className="text-4xl font-bold text-center">
          What's Different About Manage?
        </h2>

        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
            <img src={Anisha} alt="" className="w-16 -mt-14" />
            <h5 className="text-lg font-bold">Anisha Li</h5>
            <p className="text-sm text-darkGrayishBlue">
              "Manage has supercharged our team's workflow. The ability to
              maintain visiblity on larger milestones at all times keeps
              everyone motivated."
            </p>
          </div>
          <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
            <img src={Ali} alt="" className="w-16 -mt-14" />
            <h5 className="text-lg font-bold">Ali Bravo</h5>
            <p className="text-sm text-darkGrayishBlue">
              "We have been able to cancel so many subscriptions since using
              Manage. There is no more cross-channel confusion and everyone is
              much more focused."
            </p>
          </div>
          <div className="hidden  flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
            <img src={Richard} alt="" className="w-16 -mt-14" />
            <h5 className="text-lg font-bold">Richard Watts</h5>
            <p className="text-sm text-darkGrayishBlue">
              "Manage has supercharged our team's workflow. The ability to
              maintain visiblity on larger milestones at all times keeps
              everyone motivated."
            </p>
          </div>
        </div>
        <div className="my-16 mx-auto flex justify-center">
          <button className="hidden  p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block">
            Get Started
          </button>
        </div>
        </div>
    </section>
  );
}

export default Testimonials
