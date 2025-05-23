import React from "react";
import styled from "styled-components";
import Image from "next/image";
import ArrowRight from "./ArrowRight";
import { getClampFrom } from "@/styles/helpers";

const profilePhotoClamp = getClampFrom(40, 80, 501, 1024);
const cardPaddingClamp = getClampFrom(12, 24, 501, 1024);
const nameClamp = getClampFrom(8, 16, 501, 1024);
const titleClamp = getClampFrom(6, 12, 501, 1024);
const userIdClamp = getClampFrom(5, 10, 501, 1024);
const companyClamp = getClampFrom(12, 24, 501, 1024);
const arrowClamp = getClampFrom(6, 8, 501, 1024);
const detailBarsClamp = getClampFrom(153, 307, 501, 1024);
const barCodeClamp = getClampFrom(30, 60, 501, 1024);
const borderRadiusClamp = getClampFrom(6, 12, 501, 1024);

const SlideBox = styled.div`
  min-height: 122px;
  max-width: 240px;
  aspect-ratio: 2;
  background: #f2f4ed;
  border: 1px solid var(--green-300);
  color: var(--green-300);
  border-radius: ${borderRadiusClamp};
  padding: 12px;

  @media (min-width: 501px) {
    height: auto;
    width: 100%;
    max-width: none;
    padding: ${cardPaddingClamp};
  }
`;

const SlideContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const SlideCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const SlideRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SlidePhoto = styled.div`
  aspect-ratio: 1;
  width: 40px;
  height: auto;

  @media (min-width: 501px) {
    width: ${profilePhotoClamp};
  }
`;

const SlideName = styled.p`
  font-size: 8px;
  text-transform: uppercase;
  color: var(--green-300);
  letter-spacing: 0.1em;
  text-align: right;

  @media (min-width: 501px) {
    font-size: ${nameClamp};
  }
`;

const SlideTitle = styled.p`
  font-size: 6px;
  text-transform: uppercase;
  color: var(--green-300);
  letter-spacing: 0.1em;
  opacity: 0.4;
  text-align: right;

  @media (min-width: 501px) {
    font-size: ${titleClamp};
  }
`;

const SlideUserId = styled.p`
  font-family: var(--font-soehne-mono);
  font-size: 5px;
  text-align: right;
  opacity: 0.4;
  color: var(--green-300);

  @media (min-width: 501px) {
    font-size: ${userIdClamp};
  }
`;

const SlideCompany = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2.5px;
  font-size: 12px;
  letter-spacing: -0.03em;

  svg {
    height: ${arrowClamp};
    width: auto;
    position: relative;
    top: 1px;
  }

  @media (min-width: 501px) {
    font-size: ${companyClamp};
  }
`;

const DetailBars = styled.div`
  max-width: 153px;
  height: auto;

  & img {
    height: auto;
  }

  @media (min-width: 501px) {
    max-width: ${detailBarsClamp};
  }
`;

const BarCode = styled.div`
  max-width: ${barCodeClamp};
`;

export type SlideProps = {
  name: string;
  imgUrl: string;
  title: string;
  userId: string;
  company: string;
};

const Slide = ({ name, imgUrl, title, userId, company }: SlideProps) => {
  return (
    <SlideBox>
      <SlideContent>
        <SlideRow className="aligned-top">
          <SlidePhoto>
            <Image src={`/${imgUrl}`} height={80} width={80} alt={name} />
          </SlidePhoto>
          <div>
            <SlideName>{name}</SlideName>
            <SlideTitle>{title}</SlideTitle>
            <SlideUserId>{userId}</SlideUserId>
          </div>
        </SlideRow>
        <SlideCol className="aligned-bottom">
          <SlideCompany>
            <ArrowRight />
            <p>{company}</p>
          </SlideCompany>
          <SlideRow>
            <DetailBars>
              <Image src={"/detail-bars.svg"} height={16} width={307} alt="details bar" />
            </DetailBars>
            <BarCode>
              <Image src={"/bar-code.svg"} height={20} width={60} alt="bar code" />
            </BarCode>
          </SlideRow>
        </SlideCol>
      </SlideContent>
    </SlideBox>
  );
};

export default Slide;
