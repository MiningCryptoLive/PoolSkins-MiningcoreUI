export namespace PoolService {
  let base_url = 'https://etc.solopool.us/api/pools/etcsolo';
  export const setApi = (value:string) => {
    base_url = value
  }
  export const getapi = () => {
    return base_url;
  }
}
