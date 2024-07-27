import React from 'react'

const Featured = () => {
  return (
    <div className='featured fixed right-0 left-80 '>
        <div className="f1 flex bg-black gap-3 ">
            <h1 className="f1a text-white p-2  cursor-pointer">All</h1>
            <h1 className="f1b text-white p-2 cursor-pointer">Music</h1>
            <h1 className="f1c text-white p-2 cursor-pointer ">Podcasts</h1>

        </div>

        <div className="featuredcharts">
              <div id="chart1 bg-silver"></div>
              <div id="chart2"></div>
              <div id="chart3"></div>
              <div id="chart4"></div>
              <div id="chart5"></div>
              <div id="chart6"></div>

        </div>
        <div className="hits">

        </div>
    </div>
  )
}

export default Featured