import styled from 'styled-components'

const BackDrop = styled.div`
  position: fixed;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`
const ModalContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #faf9fc;
  width: 622px;
  height: 432px;
  padding: 1rem;
  box-shadow: 0 0 9px #ccc;
  border-radius: 8px;
  z-index: 2;
`
const BookingHeaderCloseButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const CreateBookingHeader = styled.div`
  font-size: 24px;
  letter-spacing: 0.1rem;
  margin: 0 0 1rem 0;
`
const CloseModalButton = styled.div`
  font-size: 12px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`
const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const NameEmailAddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const BookingTypeDateTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 1rem 0;
`

const StateZipInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const InputLabel = styled.label`
  font-size: 12px;
  letter-spacing: 0.1rem;
`
const TextInput = styled.input`
  width: 264px;
  height: 33px;
  outline: none;
`
const StateZipInput = styled.input`
  width: 121px;
  height: 33px;
  outline: none;
`
const InputSelect = styled.select`
  width: 264px;
  height: 33px;
  outline: none;
`
const CreateBookingButton = styled.button`
  width: 128px;
  height: 29px;
  color: #333333;
  background-color: #f29648;
  border-radius: 5px;
  border: none;
  box-shadow: 0 0 3px #434242;
  margin: 8rem 0 0 0;
  &:hover {
    cursor: pointer;
  }
`
export {
  BackDrop,
  ModalContainer,
  BookingHeaderCloseButtonContainer,
  CreateBookingHeader,
  CloseModalButton,
  FormContainer,
  NameEmailAddressContainer,
  BookingTypeDateTimeContainer,
  InputContainer,
  StateZipInputContainer,
  InputLabel,
  TextInput,
  StateZipInput,
  InputSelect,
  CreateBookingButton,
}
