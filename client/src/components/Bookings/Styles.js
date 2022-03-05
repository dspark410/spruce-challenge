import styled from 'styled-components'

const BookingsContainer = styled.div``

const BookingsHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  width: 1200px;
  margin: 0 auto;
`
const BookingsHeader = styled.div`
  font-size: 24px;
  letter-spacing: 0.1rem;
`

const BookingsLabelsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 1200px;
  margin: 0 auto;
  padding: 0rem 0.5rem;
`
const BookingLabel = styled.span`
  width: 15rem;
`
const DataContainer = styled.div`
  margin: 0.5rem;
`

const BookingDataContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #e3e0e0;
  padding: 0.5rem;
  font-size: 12px;
`
const BookingData = styled.div`
  width: 15rem;
`
const CreateBookingButton = styled.button`
  width: 128px;
  height: 29px;
  color: #333333;
  background-color: #f29648;
  border-radius: 5px;
  border: none;
  box-shadow: 0 0 3px #434242;
  &:hover {
    cursor: pointer;
  }
`

export {
  BookingsContainer,
  BookingsHeaderContainer,
  BookingsHeader,
  BookingsLabelsContainer,
  BookingLabel,
  DataContainer,
  BookingDataContainer,
  BookingData,
  CreateBookingButton,
}
