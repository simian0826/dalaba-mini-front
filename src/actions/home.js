import {fetchHomeData} from '../api/api'

export default async function homeData(){
  let home = await fetchHomeData().then(res => res.data)
  return {
    home: home
  }
}



