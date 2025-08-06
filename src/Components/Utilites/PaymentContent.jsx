import React from 'react'

const PaymentContent = ({paymentprice,payment}) => {
  return (
    <div>
        <div className='flex gap-[160px] pt-6'>
            <div className=''>
                <div className='font-poppins text-[18px] pt-6'>{payment.subtotal}</div>
                <div className='font-poppins text-[18px] pt-6' >{payment.ServiceTax}</div>
                <div className='font-poppins text-[18px] pt-6' >{payment.Protection}</div>
                <div className='font-poppins text-[22px] font-bold pt-8'  >{payment.Total}</div>
            </div>
            <div>
                 <div className='font-poppins text-[18px] pt-6' >{paymentprice.total}</div>
                <div  className='font-poppins text-[18px] pt-6' >{paymentprice.Tax}</div>
                <div  className='font-poppins text-[18px] pt-6'  >{paymentprice.Protectiontext}</div>
                <div className='font-poppins text-[22px] font-bold  pt-8 ' >{paymentprice.Totalcost}</div>
            </div>
        </div>
    </div>
  )
}

export default PaymentContent