import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import localizedFormat from 'dayjs/plugin/localizedFormat'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(localizedFormat)
//Date Variable
const defaultTimeZone = 'Asia/Yangon'
//const dateTimeFormat = 'hh:mm A - DD-MM-YYYY'
const dateTimeFormat = 'YYYY-MM-DD hh:mm A'
const dateFormat = 'DD-MM-YYYY'
const dateFormat2 = 'YYYY-MM-DD'

const limit: any = process.env.REACT_APP_PAGINATION_LIMIT
const USER = 'user'

export { dateFormat2 }

export const handleClose: any = (setShow: any) => setShow(false)
export const handleShow = (setShow: any) => setShow(true)

export const getNumber = (index: number, skip: number) => {
  return index + 1 + skip * limit
}

export const handleDateFormat = (date: any, format?: string) => {
  return dayjs(date)
    .tz(defaultTimeZone)
    .format(format || dateFormat)
}

export const handleDateTimeFormat = (date: any) => {
  return dayjs(date).tz(defaultTimeZone).format(dateTimeFormat)
}

export function numberFormat(x: any) {
  return x ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '-'
}

export function toFloat(x: any) {
  return x
    ? parseFloat(x)
        .toFixed(3)
        .replace(/\.?0+$/, '')
    : 0
}

export const login = (user: any) => {
  localStorage.setItem(USER, user)
}

export const logout = () => {
  localStorage.removeItem(USER)
}

export const getStoreUser = () => {
  const tempUser = localStorage.getItem('user')
  const user = tempUser && JSON.parse(tempUser)
  return user
}

export const isLogin = () => {
  if (localStorage.getItem(USER)) {
    return true
  }
  return false
}

//For Number Input
export const disableScroll = (e: any) => {
  e.currentTarget.blur()
}

export const handleKeyDown = (event: any) => {
  if (event.key.toLowerCase() === 'enter') {
    const form = event.target.form
    const index = [...form].indexOf(event.target)
    form.elements[index + 1].focus()
    event.preventDefault()
  }
}
