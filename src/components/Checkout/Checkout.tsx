

import React from 'react'
import ImagemApresentacaoPage from '../ImagemApresentacaoPage'
import Informacoes from '../Informacoes'
import { FormEvent } from 'react'
import { useState } from 'react'
import { set } from 'react-hook-form'

const Checkout = () => {

    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [company, setCompany] = useState<string>('')
    const [zipcode, setZipcode] = useState<string>('')
    const [countryeRegion, setCountryeRegion] = useState<string>('')
    const [address, setAddress] = useState<string>('')
    const [townecity, setTownecity] = useState<string>('')
    const [province, setProvince] = useState<string>('')
    const [addaddress, setAddaddress] = useState<string>('')
    const [emailaddress, setEmailaddress] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    

    const handleSubmit = (e: FormEvent) => {

        e.preventDefault()

        setFirstName('')
        setLastName('')
        setCompany('')
        setZipcode('')
        setCountryeRegion('')
        setAddress('')
        setTownecity('')
        setProvince('')
        setAddaddress('')
        setEmailaddress('')
        setMessage('')
      }

  return (
    <div>
        <ImagemApresentacaoPage title="Checkout" />
        <section className='my-16 flex md:justify-center'>
            <form onSubmit={handleSubmit} className='flex flex-col md:items-start items-center md:ml-36 md:flex-wrap md:h-[1320px]'>
                
                <h1 className='font-bold text-3xl mb-8'>Billing details</h1>

                <div className='w-fit flex flex-col gap-8'>
                    <div className='flex gap-7'>
                        <div className='flex flex-col gap-3'>
                            <label className='font-semibold' htmlFor='firstname'>First Name</label>
                            <input value={firstName} onChange={(e) => setFirstName(e.target.value)}  className='appearance-none pl-3 text-zinc-500 focus:outline-none border rounded-lg border-neutral-700 w-40 h-16' required type='text'  id='firstname' />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <label className='font-semibold' htmlFor='lastname'>Last Name</label>
                            <input value={lastName} onChange={(e) => setLastName(e.target.value)} className='appearance-none pl-3 text-zinc-500 focus:outline-none border rounded-lg border-neutral-700 w-40 h-16' required type='text' id='lastname' />
                        </div>
                    </div>
                    
                    <div className='flex flex-col gap-3'>
                        <label className='font-semibold' htmlFor='company'>Company Name (optional)</label>
                        <input value={company} onChange={(e) => setCompany(e.target.value)} className='appearance-none pl-3 text-zinc-500 focus:outline-none border rounded-lg border-neutral-700 h-16 w-full' type='text' id='company' />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label className='font-semibold' htmlFor='zipcode'>ZIP code</label>
                        <input value={zipcode} onChange={(e) => setZipcode(e.target.value)} className='appearance-none pl-3 text-zinc-500 focus:outline-none border rounded-lg border-neutral-700 h-16 w-full' required type='text' id='zipcode' />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label className='font-semibold' htmlFor='countryeregion'>Country / Region</label>
                        <input value={countryeRegion} onChange={(e) => setCountryeRegion(e.target.value)} className='appearance-none pl-3 text-zinc-500 focus:outline-none border rounded-lg border-neutral-700 h-16 w-full' required type='text' id='countryeregion' />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label className='font-semibold' htmlFor='address'>Street address</label>
                        <input value={address} onChange={(e) => setAddress(e.target.value)} className='appearance-none pl-3 text-zinc-500 focus:outline-none border rounded-lg border-neutral-700 h-16 w-full' required type='text' id='address' />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label className='font-semibold' htmlFor='townecity'>Town / City</label>
                        <input value={townecity} onChange={(e) =>  setTownecity(e.target.value)} className='appearance-none pl-3 text-zinc-500 focus:outline-none border rounded-lg border-neutral-700 h-16 w-full' required type='text' id='townecity' />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label className='font-semibold' htmlFor='province'>Province</label>
                        <input value={province} onChange={(e) => setProvince(e.target.value)} className='appearance-none pl-3 text-zinc-500 focus:outline-none border rounded-lg border-neutral-700 h-16 w-full' required type='text' id='province' />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label className='font-semibold' htmlFor='addaddress'>Add-on address</label>
                        <input value={addaddress} onChange={(e) => setAddaddress(e.target.value)} className='appearance-none pl-3 text-zinc-500 focus:outline-none border rounded-lg border-neutral-700 h-16 w-full' required type='text' id='addaddress' />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label className='font-semibold' htmlFor='emailadress'>Email address</label>
                        <input value={emailaddress} onChange={(e) => setEmailaddress(e.target.value)} className='appearance-none pl-3 text-zinc-500 focus:outline-none border rounded-lg border-neutral-700 h-16 w-full' required type='email' id='emailaddress' />
                    </div>
                    <div>
                        <input value={message} onChange={(e) => setMessage(e.target.value)} className='appearance-none pl-3 text-zinc-500 focus:outline-none border rounded-lg border-neutral-700 h-16 w-full' required placeholder='Digite uma mensagem aqui...' type='text' id='lastname' />
                    </div>
                </div>

                <div className='w-5/12'>
                    <div className='flex py-9 flex-col gap-3 border-b border-zinc-300'>
                        <div className='flex justify-between gap-9 font-medium text-2xl'>
                            <span>Product</span>
                            <span>Subtotal</span>
                        </div>
                        <div className='flex gap-16 justify-between'>
                            <span className='text-zinc-400'>Asgaard sofa <strong className='text-black'>x 1</strong></span>
                            <span> Rs. 250.000,00</span>
                        </div>
                        <div className='flex gap-16 justify-between'>
                            <span className='font-medium'>Subtotal</span>
                            <span>Rs. 250.000,00</span>
                        </div>
                        <div className='flex items-center gap-16 justify-between'>
                            <span className='font-medium'>Total</span>
                            <span className='text-xl font-bold text-yellow-600'>Rs. 250.000,00</span>
                        </div>
                    </div>

                    <div className='pt-7 flex items-center flex-col gap-7'>
                        <div className='flex flex-col gap-3 items-start'>
                            <div className='flex items-center required gap-2 '>
                                <input className='focus:font-medium appearance-none rounded-full h-4 w-4 border border-gray-300 checked:bg-black checked:border-transparent focus:outline-none' type="radio" name="buy" id="bank" checked/>
                                <label htmlFor="bank">Direct Bank Transfer</label>
                            </div>
                            <p className='text-zinc-400 text-justify'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                        </div>

                        <div className='flex flex-col gap-4 items-start'>
                            <div className='flex items-center required gap-2 '>
                                <input className='focus:font-medium appearance-none rounded-full h-4 w-4 border border-gray-300 checked:bg-black checked:border-transparent focus:outline-none' type="radio" name="buy" id="cash" />
                                <label  htmlFor="cash">Cash On Delivery</label>
                            </div>
                            <p className='text-black text-justify'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <strong className='text-black'>privacy policy</strong>.</p>
                        </div>

                        <button type='submit' className='w-fit md:py-3 py-2 md:px-24 px-12 mt-2 border border-black rounded-xl font-medium text-neutral-900'>Place order</button>
                    </div>
                </div>
            </form>
        </section>
        <Informacoes />
    </div>
  )
}

export default Checkout