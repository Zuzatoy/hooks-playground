import styled, { css } from 'styled-components';

const basicTextStyles = css`
    padding: 0;
    margin: 0;
`;

const fontDemi = css`
    font-family: 'AvenirNextLTPro-Demi', Helvetica, Arial, sans-serif;
    font-weight: 600;
`;

const fontMedium = css`
    font-family: 'AvenirNextLTPro-Medium', Helvetica, Arial, sans-serif;
    font-weight: 500;
`;

const fontRegular = css`
    font-family: 'AvenirNextLTPro-Regular', Helvetica, Arial, sans-serif;
    font-weight: normal;
`;

export const Display1 = styled.h1`
    ${basicTextStyles};
    ${fontDemi};

    font-size: 72px;

    @media screen and (max-width: 1200px) {
        font-size: 64px;
    }

    @media screen and (max-width: 940px) {
        font-size: 56px;
    }

    @media screen and (max-width: 640px) {
        font-size: 48px;
    }
`;

export const Display2 = styled.h1`
    ${basicTextStyles};
    ${fontDemi};

    font-size: 96px;

    @media screen and (max-width: 1200px) {
        font-size: 80px;
    }

    @media screen and (max-width: 940px) {
        font-size: 72px;
    }

    @media screen and (max-width: 640px) {
        font-size: 64px;
    }
`;

export const H1 = styled.h1`
    ${basicTextStyles};
    ${fontDemi};

    font-size: 48px;
    line-height: 1.25;

    @media screen and (max-width: 940px) {
        font-size: 40px;
        line-height: 1.25;
    }
`;

export const H2 = styled.h2`
    ${basicTextStyles};
    ${fontDemi};

    font-size: 38px;
    line-height: 1.25;

    @media screen and (max-width: 940px) {
        font-size: 32px !important;
        line-height: 1.25;
    }

    @media screen and (max-width: 639px) {
        font-size: 24px !important;
    }
`;

export const H3 = styled.h3`
    ${basicTextStyles};
    ${fontDemi};

    font-size: 30px;
    line-height: 1.25;

    @media screen and (max-width: 940px) {
        font-size: 24px;
        line-height: 1.25;
    }
`;

export const H4 = styled.h4`
    ${basicTextStyles};
    ${fontDemi};

    font-size: 24px;
    line-height: 1.25;

    @media screen and (max-width: 940px) {
        font-size: 18px;
        line-height: 1.25;
    }
`;

export const H5 = styled.h5`
    ${basicTextStyles};
    ${fontDemi};

    font-size: 22px;
    line-height: 1.25;

    @media screen and (max-width: 940px) {
        font-size: 16px;
        line-height: 1.25;
    }
`;

export const Body1 = styled.p`
    ${basicTextStyles};
    ${fontMedium};
    font-size: 16px;
    line-height: 1.4;

    @media screen and (max-width: 940px) {
        font-size: 14px;
        line-height: 1.4;
    }
`;

export const Body2 = styled.p`
    ${basicTextStyles};
    ${fontDemi};

    font-size: 16px;
    line-height: 1.4;

    @media screen and (max-width: 940px) {
        font-size: 14px;
        line-height: 1.4;
    }
`;

export const Caption1 = styled.p`
    ${basicTextStyles};
    ${fontMedium};

    font-size: 14px;
    line-height: 1.4;

    @media screen and (max-width: 940px) {
        font-size: 12px;
        line-height: 1.4;
    }
`;

export const Caption2 = styled.p`
    ${basicTextStyles};
    ${fontDemi};

    font-size: 14px;
    line-height: 1.4;

    @media screen and (max-width: 940px) {
        font-size: 12px;
        line-height: 1.4;
    }
`;

export const Caption3 = styled.p`
    ${basicTextStyles};
    ${fontRegular};

    font-size: 14px;
    line-height: 1.4;

    @media screen and (max-width: 940px) {
        font-size: 12px;
        line-height: 1.4;
    }
`;

export const Label1 = styled.p`
    ${basicTextStyles};
    ${fontDemi};

    font-size: 12px;
    line-height: 1.4;
`;
