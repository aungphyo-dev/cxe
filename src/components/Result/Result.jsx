import {object} from "prop-types";

const Result = ({data}) => {
  return(
      <div className='flex flex-col justify-start items-start gap-y-1'>
            <p className='text-[16px] font-semibold text-[#5c667b]'>
                {data?.query.amount} {data?.query.from} =
            </p>
          <h1 className='text-[32px] font-bold text-[#2e3c57]'>
              {data?.result} {data?.query.to}
          </h1>
          <p className='text-[16px] font-semibold text-gray-800'>
              Rates : 1 {data?.query.from} : {data?.info.rate} {data?.query.to}
          </p>
          <p className='text-[16px] font-semibold text-gray-800'>
              Latest updated on : {data?.date}
          </p>
      </div>
  )
}
Result.propTypes = {
    data : object
}
export default Result