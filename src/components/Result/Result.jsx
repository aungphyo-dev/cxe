import {object, string} from "prop-types";

const Result = ({data,amount}) => {
    console.log(data)
  return(
      <div className='flex flex-col justify-start items-start gap-y-1'>
            <p className='text-[16px] font-semibold text-[#5c667b]'>
                {amount} {data?.base_code} =
            </p>
          <h1 className='text-[32px] font-bold text-[#2e3c57]'>
              {data?.conversion_result} {data?.target_code}
          </h1>
          <p className='text-[16px] font-semibold text-gray-800'>
              Rates : 1 {data?.base_code} : {data?.conversion_rate} {data?.target_code}
          </p>
          {/*<p className='text-[16px] font-semibold text-gray-800'>*/}
          {/*    Latest updated on : {data?.time_last_update_utc.slice(17,30)}*/}
          {/*</p>*/}
      </div>
  )
}
Result.propTypes = {
    data : object,
    amount:string
}
export default Result