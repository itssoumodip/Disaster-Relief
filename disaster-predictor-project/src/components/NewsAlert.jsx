import React from 'react';

const defaultNews = {
  location: "DELHI, INDIA",
  headline: "A SIGNIFICANT EARTHQUAKE",
  details: "MEASURING [MAGNITUDE] ON THE RICHTER SCALE HAS STRUCK NEAR THE PACIFIC COAST EARLIER THIS 12:49, FEB 1. THE EPICENTER IS LOCATED APPROXIMATELY 1KM FROM JANAMAZ JID. INITIAL REPORTS INDICATE [LEVEL OF DAMAGE - E.G., SHAKING FELT STRONGLY, SOME STRUCTURAL DAMAGE, WIDESPREAD POWER OUTAGES]. RESIDENTS ARE BEING URGED TO TAKE NECESSARY SAFETY PRECAUTIONS, INCLUDING STAYING AWAY FROM UNSTABLE STRUCTURES AND PREPARING FOR POTENTIAL AFTERSHOCKS. EMERGENCY SERVICES ARE RESPONDING TO THE AFFECTED AREAS."
};

const NewsAlert = ({ 
  location = defaultNews.location,
  headline = defaultNews.headline,
  details = defaultNews.details
}) => {
  return (
    <div className="bg-[#4C9F50]/0 p-6 rounded-lg backdrop-blur-sm">
      <h2 className="text-3xl font-bold text-white mb-2">{location}</h2>
      <h3 className="text-xl font-semibold text-white/90 mb-4">{headline}</h3>
      <p className="text-white/80 font-semibold leading-relaxed">{details}</p>
    </div>
  );
};

export default NewsAlert;