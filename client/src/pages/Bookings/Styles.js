import styled from 'styled-components'

const BookingsContainer = styled.div``

const BookingsHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  width: 1200px;
  margin: 0 auto 1rem auto;
`
const BookingsHeader = styled.div`
  font-size: 24px;
  letter-spacing: 0.1rem;
`

const FilterBookingCreateBookingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const FilterBookingsSpan = styled.span`
  font-size 14px;
  margin: 0 0.25rem 0 0;
`
const Select = styled.select`
  width: 128px;
  height: 29px;
  margin: 0 1rem 0 0;
  &:focus {
    outline: none;
  }
`
const LoadMoreButton = styled.button`
  width: 128px;
  height: 29px;
  color: #333333;
  background-color: ${(props) => (props.disabled ? 'grey' : '#f29648')};
  border-radius: 5px;
  border: none;
  box-shadow: 0 0 3px #434242;
  margin: 0 0.5rem 0 0;
  opacity: ${(props) => (props.disabled ? '75%' : '100%')};
  &:hover {
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  }
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
  width: 20rem;
`
const BookingDateTimeLabel = styled.span`
  width: 14rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const DataContainer = styled.div`
  margin: 0.5rem 0 3rem 0;
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
  FilterBookingCreateBookingContainer,
  FilterBookingsSpan,
  Select,
  LoadMoreButton,
  BookingsLabelsContainer,
  BookingLabel,
  BookingDateTimeLabel,
  DataContainer,
  CreateBookingButton,
}
