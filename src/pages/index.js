import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
import "../css/form.css"
import {Link as ScrollLink} from "react-scroll"

/* The tags you have to play with are p-#, height, 
export default () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-20 px-8 lg:flex">
      
        <div className="text-center lg:text-left lg:w-1/2">
          </div>
          <div class="h-full p-32 rounded-lg border-2 border-green-700 flex flex-col relative overflow-hidden">
        <span class="bg-green-700 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">BEFORE & AFTER</span>
        <iframe frameborder="100" class="juxtapose" width="600%" height="1000" src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=76dd44d0-d5d9-11ea-bf88-a15b6c7adf9a">

      </iframe>
        <div class="h-full p-6 rounded-lg border-green-500 flex flex-col items-center relative overflow-hidden">
          </div>
        </div>
        
          {/* <p className="mt-8 md:mt-12"> */}
          {/* <div class="p-4 xl:w-1/60 md:w-1/2 w-full">
        <div class="h-full p-10 rounded-lg border-2 border-green-500 flex flex-col relative overflow-hidden"
            style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
          <span class="bg-green-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">BEFORE & AFTER</span>
          <iframe frameborder="0" class="juxtapose" width="100%" height="300" src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=76dd44d0-d5d9-11ea-bf88-a15b6c7adf9a"></iframe>
          </div>
          </div> */}
        {/* <div className="lg:w-1/2"> */}
          {/* <div class="p-4 xl:w-1/25 md:w-1/2 w-full"
            style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"}}> */}
      
        <div class="h-full p-16 rounded-lg border-2 border-green-700 flex flex-col relative overflow-hidden">
        <span class="bg-green-700 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">60% OFF</span>
        <div class="h-full p-6 rounded-lg border-green-500 flex flex-col items-center relative overflow-hidden">
          <h2 class="text-sm tracking-widest title-font mb-1 font-medium">Summer Special!</h2>
          <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
            <span>$99 </span>
            <span class="text-lg ml-1 font-normal line-through text-gray-500">$250</span>
          </h1>
          </div>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>2 Car Driveway
          </p>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Front Porch
          </p>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Walkways
          </p>
          <button class="flex items-center mt-auto text-white bg-green-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-green-600 rounded">Text us your address!
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <p class="text-xs text-gray-500 mt-3">Healthy Driveway's Summer Special has already brought in over 500 DFW customers!</p>
        </div>
      </div>

      
        {/* </div> */}
      {/* </div> */}
    </section>
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Benefits of Powerwashing Driveway</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Clean and Efficient</p>
              <p className="mt-4">
              Accumulation of dirt, grime, and mildew on your home’s exterior surfaces can lead to maintanence and installation issues within the base structures of these surfaces. 
              Yearly pressure washing will prolong the life expectancies for these surfaces and keeps them looking healthy! 
              Another benefit of pressure washing is that it can reduce the amount of allergens within and outside of your environment. Our solution removes allergens, kills algae and fungus, and protects against harmful bacteria.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Retains Property Value</p>
              <p className="mt-4">
              If you’re looking to sell, pressure washing could be the difference between making a sale and not. 
              Exteriors degrade, discolor, and oxide as time passes. As a result, your property can lose value. 
              Pressure washing helps remove all the gunk off these exterior surfaces and makes them brand new again.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Reduces Damage</p>
              <p className="mt-4">
              Natural conditions like sun, wind, dirt, ultraviolet rays, insects, birds –  not to mention things like acid rain, smoke, pollutants and car exhaust – constantly take a beating on your home and contribute to its soiling, discoloration, and damage.
              Pressure washing can eliminate dirt trapped within the crevices in your exterior surfaces, preventing further deterrioation within your driveway. 
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Complete Change!</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            "Healthy Driveway uses their own cleaning solution which has made my driveway look spotless!" 
            Healthy Driveway Customer, Srini
          </p>
        </div>
      }
      secondarySlot={<iframe frameborder="0" class="juxtapose" width="100%" height="800" src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=76dd44d0-d5d9-11ea-bf88-a15b6c7adf9a">

      </iframe>}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Noticing the real difference!
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Once the market analysis process is completed our staff will search for opportunities
            that are in reach
          </p>
        </div>
      }
      // secondarySlot={}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Search For Performance Optimization
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            With all the information in place you will be presented with an action plan that your
            company needs to follow
          </p>
        </div>
      }
      // secondarySlot={}
    />
    <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section id='contact' className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Make your driveway look healthy again!</h3>
      <p className="mt-8 text-xl font-light">
       Please text me at 4698352290 or email healthydriveway@gmail.com for your driveway appointment!</p>
        </section>
  </Layout>
);
