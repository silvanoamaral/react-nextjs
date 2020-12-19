import axios from 'axios'

const financeService = async () => {
  const response = await axios.get('/api/OIBR3.SA?interval=1d')

  return response.data.chart.result
}

export default financeService
