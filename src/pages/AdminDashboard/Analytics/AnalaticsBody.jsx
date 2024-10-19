import Analytics from "./AdminAnalytics";
import TrafficSources from "./TrafficSources";
import VisitsByCountry from "./VistsByContry";
import MostVisitedPages from "./MostVisitedPages";
import SocialMediaChart from "./SocialMedia";
const AnalaticsBody = () => {
  return (
    <div className="container p-4">
      {/* Grid layout for responsive design */}
      <div className="">
        {/* Full-width Analytics on the first row */}
        <div className="lg:col-span-2">
          <Analytics />
        </div>

        <div className="flex w-full h-full gap-5">
          <div className="w-[1000px] ">
            <TrafficSources />
            <div className="mt-10">
              <MostVisitedPages />
            </div>
          </div>
          <div className="flex-grow">
            <div>
              <VisitsByCountry />
            </div>
            <div className="mt-3 w-full">
              <SocialMediaChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalaticsBody;
