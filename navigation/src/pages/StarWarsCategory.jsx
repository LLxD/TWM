import React from "react"

const Siths = ({ images }) => {
  return (
    <>
      <main className="grid lg:grid-flow-col max-w-6xl gap-6 items-center justify-center">
        {images.map((image, index) => (
          <div key={index} className="flex flex-col">
            <img src={image} alt="sith" className="w-full h-auto" />
          </div>
        ))}
      </main>
    </>
  )
}

export default Siths
