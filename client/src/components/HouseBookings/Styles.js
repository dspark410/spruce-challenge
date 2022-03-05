import styled from 'styled-components'

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
  width: 20rem;
`
const BookingDateTimeData = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 14rem;
`

export { BookingDataContainer, BookingData, BookingDateTimeData }
