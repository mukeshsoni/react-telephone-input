import styled from 'styled-components'

import RTI from './withStyles'

const MobileReactTelephoneInput = styled(RTI)`
  .country-list {
    position: absolute;
    overflow-y: scroll;
    top: 0;
    @media (max-width: 576px) {
      width: 100% !important;
      height: 100% !important;
    }
  }
  .flag-dropdown {
    @media (max-width:  576px) {      
      z-index: 20;
    }
  }
  .open-dropdown {
    @media (max-width:  576px) {
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      height: 100%;
      width: 100%;
  }
`
export default MobileReactTelephoneInput
