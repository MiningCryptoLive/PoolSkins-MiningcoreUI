export namespace PoolService {
  let base_url = 'https://solopool.us/api/pools/etcsolo';
  export const setApi = (value:string) => {
    base_url = value
  }
  export const getapi = () => {
    return base_url;
  }
}
