import styled from '@emotion/styled';

const Heading1 = styled.div`
  ${({ theme }) => theme.fonts.Heading1}
`;
const Heading2 = styled.div`
  ${({ theme }) => theme.fonts.Heading2}
`;
const Heading3 = styled.div`
  ${({ theme }) => theme.fonts.Heading3}
`;
const Heading4 = styled.div`
  ${({ theme }) => theme.fonts.Heading4}
`;
const Paragraph1 = styled.div`
  ${({ theme }) => theme.fonts.Paragraph1}
`;
const Paragraph2 = styled.div`
  ${({ theme }) => theme.fonts.Paragraph2}
`;
const SmallText = styled.div`
  ${({ theme }) => theme.fonts.smallText}
`;
export { Heading1, Heading2, Heading3, Heading4, Paragraph1, Paragraph2, SmallText };
