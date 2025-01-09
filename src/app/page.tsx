import PrivacyPolicy from "@/components/compliance/PrivacyPolicy";
import ResourceSubmissionForm from "@/components/forms/ResourceSubmissionForm";
import Layout from "@/components/layout/Layout";
import AboutPage from "@/components/main/AboutPage";
import BrowseCategories from "@/components/main/Categories";
import CuratedLinks from "@/components/main/CuratedLinks";
import FAQSection from "@/components/main/FAQ";
import PopularResources from "@/components/main/PopularResources";
import RecentAdditions from "@/components/main/RecentAddition";
import SearchResources from "@/components/main/SearchResources";
import Stats from "@/components/main/Stats";
import React from "react";

const Home = () => {
  return (
    <Layout className="">
      <CuratedLinks />
      <RecentAdditions />
      <Stats />
      <BrowseCategories />
      <PopularResources />
      <SearchResources />
      <ResourceSubmissionForm />
      <AboutPage />
      <FAQSection />
      <PrivacyPolicy />
    </Layout>
  );
};

export default Home;
