import styled from 'styled-components';


export const Container = styled.div.attrs(props => ({
    xl: props.xl || "50%",
    lg: props.lg || "50%",
    md: props.md || "100%",
    sm: props.sm || "100%",    
    xs: props.xs || "100%",
    pad: props.pad || "0%",
    
    
  }))`
  position: relative;
  padding: ${props => props.pad}
  width: ${props => props.xs};
  @media (min-width: 576px) {
    width: ${props => props.sm};
    padding: ${props => props.pad}
  }
  @media (min-width: 768px) {
    width: ${props => props.md};
    padding: ${props => props.pad}
  }
  @media (min-width: 992px) {
    width: ${props => props.lg};
    padding: ${props => props.pad}
  }
  @media (min-width: 1200px) {
    width: ${props => props.xl};
    padding: ${props => props.pad}
  }
    
  `;

  export const PrimaryContainer = styled(Container)`
  background: ${props => props.theme.primaryColor};
  `;

export const FlexRow = styled.div.attrs(props => ({
direction: props.direction || "column",
  
}))`
  display: flex;
  flex-direction: ${props => props.direction};

  width: ${props => props.xs};
  @media (min-width: 576px) {
    flex-direction: ${props => props.direction};
  }
  @media (min-width: 768px) {
    flex-direction: row;
  @media (min-width: 992px) {
    flex-diection: row;
  }
  @media (min-width: 1200px) {
    flex-diection: row;
  }

`;
  
export const FullscreenFlexRow = styled(FlexRow)`
min-height: 100vh;

@media (min-width: 992px) {
  height: 100vh;
}
  
`;

