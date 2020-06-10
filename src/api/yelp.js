import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer APslskbHE1OwUEO14BR2Mt9MJQl7R5-qjJppjsLs7qp2-vAYGfqSbExXj56_KerykuIFiKkxl7wdGb4akANXJrxpCWNFOnONISzd-jt4NFmbvcOCaHIdS2BhcZ7MXnYx'
  }
})