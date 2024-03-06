/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import CarouselWithText from "../../common/carouselwithtext/carouselwithtext";
import { useTranslation } from "react-i18next";
import PoolDesignInfo from "../../common/pooldesigninfo/pooldesigninfo";
import PoolDesignInfoImage from "./pooldesigninfo/PoolDesignInfo.png";
import ServiceSection from "../../common/servicesection/servicesection";
import PoolIcon from "./servicesection/new-pool-icon.png";
import SpaIcon from "./servicesection/spa-icon.png";
import RenovationIcon from "./servicesection/remodel-icon.png";
import MaintenanceIcon from "./servicesection/maintenance-icon.png";

function Home() {
  const carouselImages = require.context("./carouselimages", true);
  const carouselImageList = carouselImages
    .keys()
    .map((image) => carouselImages(image));
  const { t } = useTranslation();

  const serviceItems = [
    {
      src: PoolIcon,
      alt: t("home.poolService.customPools"),
      text: t("home.poolService.customPools"),
    },
    {
      src: SpaIcon,
      alt: t("home.poolService.customSpas"),
      text: t("home.poolService.customSpas"),
    },
    {
      src: RenovationIcon,
      alt: t("home.poolService.renovations"),
      text: t("home.poolService.renovations"),
    },
    {
      src: MaintenanceIcon,
      alt: t("home.poolService.cleanAndMaintenance"),
      text: t("home.poolService.cleanAndMaintenance"),
    },
  ];

  return (
    <>
      <CarouselWithText
        imageList={carouselImageList}
        title={t("home.carousel-title")}
      />

      <div
        css={css`
          margin: 5vh 12vw 5vh 12vw;
          @media (max-width: 991px) {
            margin: 5vh 0 5vh 0;
          }
        `}
      >
        <PoolDesignInfo
          imageSrc={PoolDesignInfoImage}
          blueTitle={t("home.poolDesignInfo.blueTitle")}
          title={t("home.poolDesignInfo.title")}
          p1={t("home.poolDesignInfo.p1")}
          p2={t("home.poolDesignInfo.p2")}
          buttonText={t("home.poolDesignInfo.buttonText")}
        />
      </div>

      <ServiceSection
        serviceItemsDisplay="flex"
        serviceItems={serviceItems}
        title={t("home.poolService.title")}
        p1={t("home.poolService.p1")}
        p2={t("home.poolService.p2")}
        ourService={t("home.poolService.ourService")}
      />
    </>
  );
}

export default Home;